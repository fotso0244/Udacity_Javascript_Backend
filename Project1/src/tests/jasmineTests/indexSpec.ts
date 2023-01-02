import request from 'supertest';
import app from '../../index';

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
      .end(function (err, res) {
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
      .end(function (err, res) {
        if (err) {
          throw err;
        }
      });
  });
  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
