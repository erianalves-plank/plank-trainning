import express from 'express';
import { RocketController }  from '../controllers/rocketController'; 
import { Rocket } from '../model/rocket';

const rocketRouter = express.Router();

rocketRouter.route('/')
    .post(new RocketController().handle)
    .get(new RocketController().handleGetRockets);

rocketRouter.route('/:id')
    .delete(new RocketController().handleDeleteRocket)
    .put(new RocketController().handleUpdateRocket);


export { rocketRouter };