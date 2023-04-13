import { Request, Response } from "express";

const url = process.env['JSON_SERVER'] + '/crew'; 


const getCrew = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id);
    const jsonData = await response.json();
    return res.json({"data": jsonData});
}

const getAllCrews = async (req: Request, res: Response) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return res.json(jsonData);
}

const updateCrew = async (req: Request, res: Response) => {
    const newCrew = {
        name: req.body.name,
        id: req.body.id,
        crewCrewmanId: req.body.crewCrewmanId
    }
    try {
        const response = await fetch(url + '/' + req.params.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCrew)
        });
        
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).send(newCrew);
}

const deleteCrew = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id , {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
    res.status(200).send(`Crew ID ${req.params.id} deleted`);
}

const createCrew = async (req: Request, res: Response) => {
    const newCrew = {
        name: req.body.name,
        id: req.body.id,
        crewCrewmanId: req.body.crewCrewmanId
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCrew)
        });
        
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).send(newCrew);
}

export {
    getCrew, getAllCrews, updateCrew, deleteCrew, createCrew
};