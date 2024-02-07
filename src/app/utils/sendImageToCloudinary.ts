/* eslint-disable @typescript-eslint/no-explicit-any */
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import multer from 'multer';

cloudinary.config({
  cloud_name: 'dqj68envi',
  api_key: '425839273961875',
  api_secret: 'RfUzrec_2-2I4KYNfjz8pwCZXcw',
});

export const sendImageToCloudinary = (
  imageName: string | number,
  path: string,
): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { public_id: imageName },
      function (error, result) {
        if (error) {
          reject(error);
        }
        resolve(result as UploadApiResponse);

        // file deleted when image uploded complete in cloudinary
        fs.unlink(path, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('file is deleted');
          }
        });
      },
    );
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
