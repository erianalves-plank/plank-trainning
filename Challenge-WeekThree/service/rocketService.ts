import { Rocket } from "../model/rocket";

type RocketRequest = {
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


}
export {
    RocketService
};