import express from 'express';
import { updateCrewman, createCrewman, deleteCrewman, getCrewman } from '../controllers/crewmanController';

const crewmanRouter = express.Router();

crewmanRouter.route('/')
    .get(getCrewman)
    .post(createCrewman);


crewmanRouter.route('/:id')
    .put(updateCrewman)
    .delete(deleteCrewman);

export {
    crewmanRouter
};