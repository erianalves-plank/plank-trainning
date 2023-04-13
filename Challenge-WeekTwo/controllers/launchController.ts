import { Request, Response } from 'express';
const url = process.env['JSON_SERVER'] + '/launch'; 


const getLaunch = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id);
    const jsonData = await response.json();
    return res.json(jsonData);
}

const getAllLaunch = async (req: Request, res: Response) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return res.json(jsonData);
}

const updateLaunch = async (req: Request, res: Response) => {
    const newLaunch = {
        id: req.body.id,
        launchCode: req.body.launchCode,
        date: req.body.date,
        success: req.body.success,
        rocketId: req.body.rocketId,
        crewId: req.body.crewId
    }
    try {
        const response = await fetch(url + '/' + req.params.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLaunch)
        });
        
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).send(newLaunch);
}

const deleteLaunch = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id , {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
    res.status(200).send(`Luanch ID ${req.params.id} deleted`);
}

const createLaunch = async (req: Request, res: Response) => {
    const newLaunch = {
        id: req.body.id,
        launchCode: req.body.launchCode,
        date: req.body.date,
        success: req.body.success,
        rocketId: req.body.rocketId,
        crewId: req.body.crewId
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLaunch)
        });
        
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).send(newLaunch);
}

export {
    updateLaunch,
    createLaunch,
    deleteLaunch,
    getLaunch,
    getAllLaunch
};