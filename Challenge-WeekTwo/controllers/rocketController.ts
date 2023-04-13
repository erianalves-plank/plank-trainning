import { Request, Response } from 'express';

const url = process.env['JSON_SERVER'] + '/rocket'; 


const getRocket = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id);
    const jsonData = await response.json();
    return res.json(jsonData);
}

const getAllRocket = async (req: Request, res: Response) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return res.json(jsonData);
}

const updateRocket = async (req: Request, res: Response) => {
    const newRocket = {
        name: req.body.name,
        id: req.body.id
    }
    try {
        const response = await fetch(url + '/' + req.params.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRocket)
        });
        
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).send(newRocket);
}

const deleteRocket = async (req: Request, res: Response) => {
    const response = await fetch(url + '/' + req.params.id , {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
    res.status(200).send(`Rocket ID ${req.params.id} deleted`);
}

const createRocket = async (req: Request, res: Response) => {
    const newRocket = {
        name: req.body.name,
        id: req.body.id
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRocket)
        });
        
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).send(newRocket);
}

export { getRocket, getAllRocket, createRocket, deleteRocket, updateRocket };
