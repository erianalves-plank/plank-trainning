import { Crew } from "../model/crew";
import AppDataSource from "../datasource/dataSource";
import { Crewman } from "../model/crewman";

const crewRepository = AppDataSource.getRepository(Crew);
const crewmanRepository = AppDataSource.getRepository(Crewman);

type CrewRequest = {
    name: string;
    crewmen: number[];

}

class CrewService {
    async execute({ name, crewmen }: CrewRequest): Promise<Crew | Error> {
        let crewmenObj: Crewman[] = [];
        for (const crewmanId of crewmen){
            let crewman = (await crewmanRepository.findOneBy({id: crewmanId}));
            crewmenObj.push(crewman);
        }
        const crew = new Crew();
        crew.crewmen = crewmenObj;
        crew.name = name;
        /*      
        const crew = crewRepository.create({
            name,
            crewmenObj, 
        }); */

        await crewRepository.save(crew);

        return crew;
    }

    async getAllCrew() {
        const crew = await crewRepository.find({
            relations: {
                crewmen: true,
            },
        });
        return crew;
    }

    async getCrewById(crewId: string){
        const crew = await crewRepository.findOneBy({id: parseInt(crewId)});
        return crew;
    }
}
export {
    CrewService
};