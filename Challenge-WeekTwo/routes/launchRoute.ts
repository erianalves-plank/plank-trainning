import express from 'express';
import { updateLaunch, createLaunch, deleteLaunch, getLaunch, getAllLaunch } from '../controllers/launchController';

const launchRouter = express.Router();

launchRouter.route('/')
    .get(getAllLaunch)
    .post(createLaunch);


launchRouter.route('/:id')
    .get(getLaunch)
    .put(updateLaunch)
    .delete(deleteLaunch);

export {
    launchRouter
};