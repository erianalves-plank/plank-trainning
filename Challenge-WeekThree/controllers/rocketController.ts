import { Request, Response } from 'express';
import { RocketService } from '../service/rocketService';

class RocketController {
    async handle(request: Request, response: Response){
        const name = request.body.name;

        const service = new RocketService();
        console.log('AJLDSFHAJLF');
        const result = await service.execute({name});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}


export { RocketController };
