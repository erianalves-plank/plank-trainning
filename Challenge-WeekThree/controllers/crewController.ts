import { Request, Response } from 'express';
import { CrewRepository } from '../repository/crewRepository';
import { CrewService } from '../service/crewService';

const crewRepository = new CrewRepository();
const crewService = new CrewService(crewRepository);


const getCrew = async (req: Request, res: Response) => {
    return res.json(await crewService.getCrewById(parseInt(req.params.id)));
}

const getAllCrew = async (req: Request, res: Response) => {
    return res.json(await crewService.getAllCrews());
}

const updateCrew = async (req: Request, res: Response) => {
    const newCrew = {
        name: req.body.name,
        crewCrewmanId: req.body.crewCrewmanId
    }
    await crewService.updateCrew(parseInt(req.params.id), newCrew);
    res.status(200).send(`Crew ID ${req.params.id} updated`);

}

const deleteCrew = async (req: Request, res: Response) => {
    await crewService.deleteCrew(parseInt(req.params.id));
    res.status(200).send(`Crew ID ${req.params.id} deleted`);
}

const createCrew = async (req: Request, res: Response) => {
    const newCrew = {
        name: req.body.name,
        crewCrewmanId: req.body.crewCrewmanId
    }
    await crewService.createCrew(newCrew);
    res.status(200).send(newCrew);
}

export {
    updateCrew,
    createCrew,
    deleteCrew,
    getCrew,
    getAllCrew
};