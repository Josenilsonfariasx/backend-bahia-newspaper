import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import fs from 'fs';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
      'video/x-matroska',
      'video/mp4',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
  cleanup: () => {
    fs.readdir(tmpFolder, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(tmpFolder, file), err => {
          if (err) throw err;
        });
      }
    });
  },
};