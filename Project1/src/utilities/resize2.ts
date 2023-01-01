//import sharp
import sharp from 'sharp';

const Resize = async (filename: string, width: unknown, height: unknown) => { 

    const newWidth = parseInt(width as string);
    const newHeight = parseInt(height as string);
    const srcImg = `./imageSrc/${filename}.jpg`;
    const destImg = `./imageProcess/${filename}_thumb.jpg`;
   await sharp(srcImg)
   .resize(newWidth, newHeight)
   .toFile(destImg, (err) => { 
    if (err) throw err;
    });
     
    
 };
 export default Resize;