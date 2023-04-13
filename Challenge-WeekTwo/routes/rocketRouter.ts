import express from 'express';
import { getAllRockets, getRockets, createRocket, deleteRocket, updateRocket }  from '../controllers/rocketController'; 

const rocketRouter = express.Router();

rocketRouter.route('/')
    .get(getAllRockets)
    .post(createRocket)
    .put(updateRocket);

rocketRouter.route('/:id')
    .get(getRockets)
    .delete(deleteRocket);


export { rocketRouter };