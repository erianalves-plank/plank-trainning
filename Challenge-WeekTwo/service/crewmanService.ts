import { CrewmanRepository } from "../repository/crewmanRepository";

class CrewmanService {

    private crewmanRepository: CrewmanRepository;

    constructor (crewmanRepo: CrewmanRepository){
        this.crewmanRepository = crewmanRepo;
    }

    async getCrewmanById(crewmanId: number) {
        return await this.crewmanRepository.getCrewmanById(crewmanId);
    }
    async getAllCrewmans() {
        return await this.crewmanRepository.getCrewmans();
    }
    async createCrewman(newCrewman: Object) {
        return await this.crewmanRepository.createCrewman(newCrewman);
    }    
    async deleteCrewman(crewmanId : number) {
        return await this.crewmanRepository.deleteCrewmanById(crewmanId);
    }
    async updateCrewman(crewmanId : number, newCrewman: Object) {
        return await this.crewmanRepository.updateCrewmanById(crewmanId, newCrewman);
    }
}
export {
    CrewmanService
};