import { Request, Response } from 'express';
import { CrewmanRepository } from '../repository/crewmanRepository';
import { CrewmanService } from '../service/crewmanService';

const crewmanRepository = new CrewmanRepository();
const crewmanService = new CrewmanService(crewmanRepository);


const getCrewman = async (req: Request, res: Response) => {
    return res.json(await crewmanService.getCrewmanById(parseInt(req.params.id)));
}

const getAllCrewman = async (req: Request, res: Response) => {
    return res.json(await crewmanService.getAllCrewmans());
}

const updateCrewman = async (req: Request, res: Response) => {
    const newCrewman = {
        name: req.body.name,
        patent: req.body.patent
    }
    await crewmanService.updateCrewman(parseInt(req.params.id), newCrewman);
    res.status(200).send(`Crewman ID ${req.params.id} updated`);

}

const deleteCrewman = async (req: Request, res: Response) => {
    await crewmanService.deleteCrewman(parseInt(req.params.id));
    res.status(200).send(`Crewman ID ${req.params.id} deleted`);
}

const createCrewman = async (req: Request, res: Response) => {
    const newCrewman = {
        name: req.body.name,
        patent: req.body.patent
    }
    await crewmanService.createCrewman(newCrewman);
    res.status(200).send(newCrewman);
}

export {
    updateCrewman,
    createCrewman,
    deleteCrewman,
    getCrewman,
    getAllCrewman
};