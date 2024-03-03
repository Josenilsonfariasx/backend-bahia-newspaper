import UploadImagesService from '../aws/uploadImagesService';
import prismaClient from '../../prisma';
import jobQueue from '../../utils/jobQueue';
import moment from 'moment-timezone';

interface PostRequest {
  title: string;
  content: string;
  scheduledAt: string;
  files: Express.Multer.File[]
}

class CreatePostScheduleService {
  async execute({title, content, files, scheduledAt}: PostRequest) {
    if(!scheduledAt) throw new Error('Schedule date is required.')
    if(!title) throw new Error('Title is required.')
    if(!content) throw new Error('Content is required.')
    const scheduledAtUTC = new Date(scheduledAt);

    const nowUTC = moment.utc().toDate();

    const photos = files.filter(file => file.mimetype.startsWith('image'));
    const videos = files.filter(file => file.mimetype.startsWith('video'));

    const uploadService = new UploadImagesService();

    const uploadedPhotos = await Promise.all(photos.map(file => uploadService.execute(file)))
    const uploadedVideos = await Promise.all(videos.map(file => uploadService.execute(file)))

    const delay = scheduledAtUTC.getTime() - nowUTC.getTime();

    if (delay < 0) {
      throw new Error('The schedule date has already passed.');
    }

    const post = await prismaClient.post.create({
      data:{
        title: title,
        content:content,
        photoUrls: uploadedPhotos,
        videoUrls: uploadedVideos,
        published: false,
        scheduledAt: scheduledAtUTC
      }
    })

    await jobQueue.add(post.id, post, { delay: delay, attempts: 5 })
      .catch(err => { throw new Error('Error scheduling post: ' + err.message) });

    return post
  }
}

export { CreatePostScheduleService };