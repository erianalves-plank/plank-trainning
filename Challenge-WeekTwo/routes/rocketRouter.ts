import express from 'express';
import { getAllRocket, getRocket, createRocket, deleteRocket, updateRocket }  from '../controllers/rocketController'; 

const rocketRouter = express.Router();

rocketRouter.route('/')
    .get(getAllRocket)
    .post(createRocket);

rocketRouter.route('/:id')
    .get(getRocket)
    .delete(deleteRocket)
    .post(createRocket)
    .put(updateRocket);




export { rocketRouter };