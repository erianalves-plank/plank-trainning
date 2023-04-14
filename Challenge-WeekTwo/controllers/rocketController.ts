import { Request, Response } from 'express';
import { RocketRepository } from '../repository/rocketRepository';
import { RocketService } from '../service/rocketService';

const rocketRepository = new RocketRepository();
const rocketService = new RocketService(rocketRepository);


const getRocket = async (req: Request, res: Response) => {
    return res.json(await rocketService.getRocketById(parseInt(req.params.id)));
}

const getAllRocket = async (req: Request, res: Response) => {
    return res.json(await rocketService.getAllRockets());
}

const updateRocket = async (req: Request, res: Response) => {
    const newRocket = {
        name: req.body.name
    }
    await rocketService.updateRocket(parseInt(req.params.id), newRocket);
    res.status(200).send(`Rocket ID ${req.params.id} updated`);

}

const deleteRocket = async (req: Request, res: Response) => {
    await rocketService.deleteRocket(parseInt(req.params.id));
    res.status(200).send(`Rocket ID ${req.params.id} deleted`);
}

const createRocket = async (req: Request, res: Response) => {
    const newRocket = {
        name: req.body.name
    }
    await rocketService.createRocket(parseInt(req.params.id), newRocket);
    res.status(200).send(newRocket);
}

export { getRocket, getAllRocket, createRocket, deleteRocket, updateRocket };
