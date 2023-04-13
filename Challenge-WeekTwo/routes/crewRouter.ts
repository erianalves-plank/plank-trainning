import express from 'express';
import { getCrew, getAllCrews, updateCrew, deleteCrew, createCrew } from '../controllers/crewController';

const crewRouter = express.Router();

crewRouter.route('/')
    .get(getAllCrews)
    .post(createCrew);

crewRouter.route('/:id')
    .get(getCrew)
    .delete(deleteCrew)
    .put(updateCrew);


export { crewRouter };