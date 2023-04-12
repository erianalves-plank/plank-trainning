import express from 'express';
import { getAllRockets, getRockets, createRocket, deleteRocket }  from '../controllers/rocketsController'; 

const router = express.Router();

router.route('/')
    .get(getAllRockets)
    .post(createRocket);

router.route('/:id')
    .get(getRockets)
    .delete(deleteRocket);


export = router;