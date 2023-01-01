
import request from 'supertest';
import app from '../index';

describe('Test endpoint and image processing', () => {
    const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    beforeEach(function() {
        
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });
    it('gets api/images endpoint', () => {
        request(app).get('/api/images/')
        .expect(200)
        .end(function(err, res) {
            if (err) { throw err;}
        
    });
});
    it('resize an image', () => {
        request(app).get('/api/images?filename=istockphoto-1438115452-1024x1024&width=200&height=200')
        .expect('Content-Type', 'image/jpeg')
        .expect(200);
        //done();
    });
    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});