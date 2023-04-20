import { Rocket } from "../model/rocket";

type RocketRequest = {
    id?: number;
    name : string;
}

import AppDataSource from "../datasource/dataSource";
const rocketRepository = AppDataSource.getRepository(Rocket);

class RocketService {

    async execute({ name }: RocketRequest): Promise<Rocket | Error> {
        console.log("--> "+ rocketRepository);
        
   /*      if (await repo.findOne({name}))
            return new Error('Rocket already exists');

 */
        const rocket = rocketRepository.create({
            name,
        });
        await rocketRepository.save(rocket);

        return rocket;
    }

    async getAllRockets() {
        const rockets = await rocketRepository.find();
        return rockets;
    }

    async deleteRocket(rocketId: string){
        if (!(await rocketRepository.findOneBy({id: parseInt(rocketId)})))
            return new Error("Rocket not found");

        await rocketRepository.delete(rocketId);
    }

    async updateRocket({id, name} : RocketRequest){
        const rocket = await rocketRepository.findOneBy({id: id});
        if (!rocket)
            return new Error("Rocket not found");
        
        rocket.name = name;

        await rocketRepository.save(rocket);

        return rocket;
    }

}
export {
    RocketService
};