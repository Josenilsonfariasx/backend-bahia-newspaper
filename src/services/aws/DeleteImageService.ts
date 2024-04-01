import S3Storage from "../../utils/S3Storage";

class DeleteImageService {
  async execute(filenames: string | string[]) {
    try {
      const s3 = S3Storage.getInstance();
      console.log(filenames)
  
      if (typeof filenames === 'string') {
        // Se filenames for uma única string, delete o arquivo e retorne um array com o resultado
        const file = await s3.deleteFile(filenames);
        return [file];
      } else {
        // Se filenames for um array de strings, delete todos os arquivos e retorne um array com os resultados
        const deletePromises = filenames.map(filename => s3.deleteFile(filename));
        const files = await Promise.all(deletePromises);
        return files;
      }
    } catch (error) {
      console.log('Error during delete image: ', error.message);
    }
  }
}

export { DeleteImageService}