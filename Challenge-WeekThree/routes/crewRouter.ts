import express from 'express';
import { getCrew, getAllCrew, updateCrew, deleteCrew, createCrew } from '../controllers/crewController';

const crewRouter = express.Router();

crewRouter.route('/')
    .get(getAllCrew)
    .post(createCrew);

crewRouter.route('/:id')
    .get(getCrew)
    .delete(deleteCrew)
    .put(updateCrew);


export { crewRouter };