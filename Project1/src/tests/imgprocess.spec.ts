import sizeOf from 'image-size';
//import {expect, jest, test} from '@jest/globals';

const file = 'istockphoto-1438115452-1024x1024-200-200.jpg';
const pathImgResize = `./imageProcess/${file}`;
const dimensions = sizeOf(pathImgResize);
describe('Image processing', () => {
  test('resize an image to width = 200 and height = 200', () => {
    expect(dimensions.width).toEqual(200);
    expect(dimensions.height).toEqual(200);
  });
});
