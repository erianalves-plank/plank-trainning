import express from 'express';
import { updateCrewman, createCrewman, deleteCrewman, getCrewman, getAllCrewman } from '../controllers/crewmanController';

const crewmanRouter = express.Router();

crewmanRouter.route('/')
    .get(getAllCrewman)
    .post(createCrewman);


crewmanRouter.route('/:id')
    .get(getCrewman)
    .put(updateCrewman)
    .delete(deleteCrewman);

export {
    crewmanRouter
};