import express from 'express';
import homeController from '../controller/homeController';
// Giups expres hieu duoc chung ta dang co khai bao 1 route
let router = express.Router();

const initWebRoute = (app)  => {
     router.get('/', homeController.getHomepage);

     router.get('/about', (req, res) => {
          res.send('I am Hung Vu')
     })

     return app.use('/', router)
}

export default initWebRoute;