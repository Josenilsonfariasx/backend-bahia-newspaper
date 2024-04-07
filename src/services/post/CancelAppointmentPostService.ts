import prismaClient from "../../prisma";
import jobQueue from "../../utils/jobQueue";

interface PostRequest {
  id: string;
}
class CancelAppointmentPostService {
  async execute({ id }: PostRequest){
    try {
      const jobs = await jobQueue.getJobs(['waiting', 'active', 'delayed', 'completed', 'failed']);
      const job = jobs.find(job => job.data.id === id);
      if (job) {
        await job.remove();
      }
      const postUpdated = await prismaClient.post.update({
        where: { id },
        data: {
          publishedAt: new Date(),
          published: true,
          scheduledAt: null 
        }
      });
      return postUpdated
    } catch (error) {
      throw new Error('Failed to cancel appointment: ' +error.message);
    }
  }
}
export { CancelAppointmentPostService };