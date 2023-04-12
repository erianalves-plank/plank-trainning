import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
const fsPromises = fs.promises;

const data = require('../model/data.json');

const dataRockets = {
    rockets: data.rocket,
    setRockets: function (data: object) {this.rockets = data}
}

const getAllRockets = (req: Request, res: Response) => {
    res.json(dataRockets.rockets);
}

const getRockets = (req: Request, res: Response) => {
    const rocket = dataRockets.rockets.find((rock: { id: number; }) => rock.id === parseInt(req.params.id));

    if (!rocket)
        return res.status(400).json({ "message": `Rocket id ${req.params.id} not found.` });

    res.json(rocket);
}

const createRocket = async (req: Request, res: Response) => {
    const name = req.body.name
    if (!name)
        return res.status(400).json({"message" : "Name is required"});

/*     const duplicate = data.rockets.find((rock: { name: any; }) => rock.name == name);
    if (duplicate)
        return res.sendStatus(409);
 */
    try {
        const newRocket = {
            name: name,
            id: dataRockets.rockets[dataRockets.rockets.length - 1].id + 1 || 1
        }
        dataRockets.setRockets([...dataRockets.rockets, newRocket]);
        data.rocket = dataRockets.rockets;
        console.log(data);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'data.json'),
            JSON.stringify(data)
        );
        console.log(data.rockets);
        res.status(201).json({ 'success': `New rocket ${name} created` });
    }
    catch (err: any) {
        res.status(500).json({'message': err.message});
    }
}

const deleteRocket = async (req: Request, res: Response) => {
    const rocket = dataRockets.rockets.find((rock: { id: number; }) => rock.id === parseInt(req.params.id));
    if (!rocket)
        return res.status(400).json({ 'message': `Rocket ID ${req.body.id} not found` });
    const filteredArray = dataRockets.rockets.filter((rock: { id: number; }) => rock.id !== parseInt(req.body.id));
    dataRockets.setRockets([...filteredArray]);
    data.rocket = dataRockets.rockets;

    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'data.json'),
        JSON.stringify(data)
    );

    res.json(data.rocket);
}

export { getRockets, getAllRockets, createRocket, deleteRocket };
