import request from 'supertest';
import app from '../../index';
import sizeOf from 'image-size';

describe('Test endpoint and image processing', () => {
  const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  beforeEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  it('gets endpoint for image processing', () => {
    request(app)
      .get(
        '/api/images?name=istockphoto-1438115452-1024x1024&width=200&height=200'
      )
      .expect('Content-Type', 'image/jpeg')
      .expect(200)
      .end(function (err) {
        if (err) {
          throw err;
        }
      });
  });
  it('gets endpoint for image processing, width in string ', () => {
    request(app)
      .get(
        '/api/images?name=istockphoto-1438115452-1024x1024&width=nht&height=200'
      )
      .expect(410)
      .end(function (err) {
        if (err) {
          throw err;
        }
      });
  });
  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});

const file = 'istockphoto-1438115452-1024x1024-200-200.jpg';
const pathImgResize = `./imageProcess/${file}`;
const dimensions = sizeOf(pathImgResize);
describe('Image processing', () => {
  it('resize an image to width = 200 and height = 200', () => {
    expect(dimensions.width).toEqual(200);
    expect(dimensions.height).toEqual(200);
  });
});
