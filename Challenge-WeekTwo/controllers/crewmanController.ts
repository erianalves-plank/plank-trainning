import { Request, Response } from 'express';

const updateCrewman = (req: Request, res: Response) => {
    res.send('Patent upgraded');
}

const createCrewman = (req: Request, res: Response) => {
    res.send('New Crewman on board');
}

const deleteCrewman = (req: Request, res: Response) => {
    res.send('Crewman transferred from crew');
}

const getCrewman = (req: Request, res: Response) => {
    res.send('Say Hi to all crewman');
}

export {
    updateCrewman,
    createCrewman,
    deleteCrewman,
    getCrewman
};