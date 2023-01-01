import express from 'express';
import image from './api/image';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('main api route');
});
routes.use('/images', image);
export default routes;