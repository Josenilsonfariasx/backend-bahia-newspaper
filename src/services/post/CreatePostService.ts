// import multer from 'multer'
// import UploadImagesService from '../aws/uploadImagesService';
// import prismaClient from '../../prisma';
// // import heapdump from 'heapdump';

// interface PostRequest {
//   title: string;
//   content: string;
//   files: Express.Multer.File[]
// }

// class CreatePostService {
//   async execute({ title, content, files }: PostRequest) {
//     try {
//       if(!title || !content) throw new Error('Title and Content are required')

//       // separar os arquivos em fotos e videos
//       const photos = [];
//       const videos = [];
//       for (const file of files) {
//           if (file.mimetype.startsWith('image')) {
//               photos.push(file);
//           } else if (file.mimetype.startsWith('video')) {
//               videos.push(file);
//           }
//       }
//       // Cria uma única instância de UploadImagesService
//       const uploadService = new UploadImagesService();

//       // Executar o serviço de upload para cada arquivo de foto
//       const uploadedPhotos = await Promise.all(photos.map(async (file) => {
//         const fileUrl = await uploadService.execute(file);
//         return { filename: file.originalname, url: fileUrl };
//     }));

//     // Executar o serviço de upload para cada arquivo de vídeo
//     const uploadedVideos = await Promise.all(videos.map(async (file) => {
//         const fileUrl = await uploadService.execute(file);
//         return { filename: file.originalname, url: fileUrl };
//     }));

//       const post = await prismaClient.post.create({
//         data:{
//           title: title,
//           content:content,
//           photoUrls: uploadedPhotos.map(photo => photo.url),
//           videoUrls: uploadedVideos.map(video => video.url),
//           published: true,
//           publishedAt: new Date()
//         }, include: {
//           categories: true,
//           tags: true
//         }
//       })
//       // heapdump.writeSnapshot((err, filename) => {
//       //   if (err) console.error(err);
//       //   else console.log('Snapshot salvo em', filename);
//       // });
//       return post;
//     } catch (error) {
//       console.error('Erro durante o upload:', error);
//       throw new Error('Erro durante o upload'+ error.message);
//     }

//   }
// }
// export { CreatePostService };