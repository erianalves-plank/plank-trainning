import express from 'express';
import { RocketController }  from '../controllers/rocketController'; 

const rocketRouter = express.Router();

rocketRouter.route('/')
    .post(new RocketController().handle);




export { rocketRouter };