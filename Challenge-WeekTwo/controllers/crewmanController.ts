import { Request, Response } from 'express';
const url = process.env['JSON_SERVER'] + '/crewman'; 


const getCrewman = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id);
    const jsonData = await response.json();
    return res.json({"data": jsonData});
}

const getAllCrewman = async (req: Request, res: Response) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return res.json(jsonData);
}

const updateCrewman = async (req: Request, res: Response) => {
    const newCrewman = {
        name: req.body.name,
        id: req.body.id,
        patent: req.body.patent
    }
    try {
        const response = await fetch(url + '/' + req.params.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCrewman)
        });
        
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).send(newCrewman);
}

const deleteCrewman = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id , {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
    res.status(200).send(`Crewman ID ${req.params.id} deleted`);
}

const createCrewman = async (req: Request, res: Response) => {
    const newCrewman = {
        name: req.body.name,
        id: req.body.id,
        patent: req.body.patent
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCrewman)
        });
        
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).send(newCrewman);
}

export {
    updateCrewman,
    createCrewman,
    deleteCrewman,
    getCrewman,
    getAllCrewman
};