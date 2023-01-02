import express from 'express';
import fs from 'fs';
import path from 'path';
import Resize from '../../utilities/resize2';
import apicache from 'apicache';

const image = express.Router();
let cache = apicache.middleware;

image.get('/', cache('10 minutes'), (req, res) => {
  let filename: string = req.query.name as string;
  let width: unknown = req.query.width as unknown as number;
  let height: unknown = req.query.height as unknown as number;
  var options = {
    root: path.join('./imageProcess')
  };
  var file = `${filename}-${width}-${height}.jpg`;
  var pathImgResize = `./imageProcess/${file}`;
  var pathImgOrigin = `./imageSrc/${filename}.jpg`;

  if (!filename || !width || !height) {
    res.status(409);
    throw new Error('Name or Width or Height undefined');
  }
  if (!fs.existsSync(pathImgOrigin)) {
    res.status(411);
    throw new Error(
      "incompatible image file extension or image doesn't esxist, please use only jpg files"
    );
  }

  if (isNaN(+width) || isNaN(+height)) {
    res.status(410);
    console.log(parseInt(width as string));
    throw new Error('Width or height is string type');
  }
  if (height == 0 || width == 0) {
    res.status(406);
    throw new Error("Width or height isn't positive number");
  }
  if (!filename || !width || !height) {
    res.status(407);
    throw new Error('Name or width or height missing');
  }
  if (height == -1 || width == -1) {
    res.status(408);
    throw new Error('Width or height equal to -1');
  } else {
    if (!fs.existsSync(pathImgResize)) {
      const resizeImg = async (
        filename: string,
        width: unknown,
        height: unknown
      ): Promise<void> => {
        await Resize(filename, width, height);
      };
      resizeImg(filename, width, height);
      res.status(200).sendFile(file, options, function (err) {
        if (err) {
          throw err;
        } else {
          console.log('Sent:', file);
        }
      });
    } else {
      res.status(200).sendFile(file, options, function (err) {
        if (err) {
          throw err;
        } else {
          console.log('Sent:', file);
        }
      });
    }
  }
});
export default image;
