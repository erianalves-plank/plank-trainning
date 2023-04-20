import { Request, Response } from 'express';
import { LaunchRepository } from '../repository/launchRepository';
import { LaunchService } from '../service/launchService';

const launchRepository = new LaunchRepository();
const launchService = new LaunchService(launchRepository);


const getLaunch = async (req: Request, res: Response) => {
    return res.json(await launchService.getLaunchById(parseInt(req.params.id)));
}

const getAllLaunch = async (req: Request, res: Response) => {
    return res.json(await launchService.getAllLaunchs());
}

const updateLaunch = async (req: Request, res: Response) => {
    const newLaunch = {
        launchCode: req.body.launchCode,
        date: req.body.date,
        success: req.body.success,
        rocketId: req.body.rocketId,
        crewId: req.body.crewId,
    }
    await launchService.updateLaunch(parseInt(req.params.id), newLaunch);
    res.status(200).send(`launch ID ${req.params.id} updated`);

}

const deleteLaunch = async (req: Request, res: Response) => {
    await launchService.deleteLaunch(parseInt(req.params.id));
    res.status(200).send(`launch ID ${req.params.id} deleted`);
}

const createLaunch = async (req: Request, res: Response) => {
    const newLaunch = {
        launchCode: req.body.launchCode,
        date: req.body.date,
        success: req.body.success,
        rocketId: req.body.rocketId,
        crewId: req.body.crewId,
    }
    await launchService.createLaunch(newLaunch);
    res.status(200).send(newLaunch);
}

export {
    updateLaunch,
    createLaunch,
    deleteLaunch,
    getLaunch,
    getAllLaunch
};