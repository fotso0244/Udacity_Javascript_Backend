import Jimp from 'jimp';
//const Jimp = require('jimp');

const Resize = async (filename: string, width: number, height: number) => { // Function name is same as of file name
   // Reading Image
   console.log('toti');
   const srcImg = '/home/Udacity_Javascript_Backend/Project1/imageSrc/istockphoto-1438115452-1024x1024.jpg';
   const destImg = `/home/Udacity_Javascript_Backend/Project1/imageProcess/${filename}_thumb.jpg`;
  await Jimp.read(srcImg, (err, img) => { 
    console.log('totu');
    if (err) throw err;
    img
    .resize(width, height)
    .write('destImg');
   });
   //const image = await Jimp.read(`/home/Udacity_Javascript_Backend/Project1/imageSrc/istockphoto-1438115452-1024x1024.jpg`);
   console.log('totd');
   
   
};

export default Resize;