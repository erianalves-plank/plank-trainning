import { CrewRepository } from "../repository/crewRepository";

class CrewService {

    private crewRepository: CrewRepository;

    constructor (crewRepo: CrewRepository){
        this.crewRepository = crewRepo;
    }

    async getCrewById(crewId: number) {
        return await this.crewRepository.getCrewById(crewId);
    }
    async getAllCrews() {
        return await this.crewRepository.getCrews();
    }
    async createCrew(newCrew: Object) {
        return await this.crewRepository.createCrew(newCrew);
    }    
    async deleteCrew(crewId : number) {
        return await this.crewRepository.deleteCrewById(crewId);
    }
    async updateCrew(crewId : number, newCrew: Object) {
        return await this.crewRepository.updateCrewById(crewId, newCrew);
    }
}
export {
    CrewService
};