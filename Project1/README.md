IMAGE PROCESSING 

In this project, we use sharp library for processing (resizing) image. imageSrc folder contain images to resize.
ImageProcess folder contains resized images.
endpoint to get resized image: http://localhost:3550/api/images?name=istockphoto-1438115452-1024x1024&width=200&height=200

script to test endpoint and image processing: npm run jasmine
script to build: npm run build
script to start: npm run start

function for sharp(image processing) is in file src/utilities/resize2.ts
