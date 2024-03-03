import Queue from 'bull';
import prismaClient from '../prisma';


const jobQueue = new Queue('post jobs', 'redis://127.0.0.1:6379');

jobQueue.process(async (job) => {
  const post = await prismaClient.post.findUnique({
    where: { id: job.data.id },
  });

  if (post && !post.published) {
    await prismaClient.post.update({
      where: { id: post.id },
      data: {
        published: true,
        publishedAt: new Date()
      }
    });
  }
});


export default jobQueue;