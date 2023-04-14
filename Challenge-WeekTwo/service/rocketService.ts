import { RocketRepository } from "../repository/rocketRepository";

class RocketService {

    private rocketRepository: RocketRepository;

    constructor (rocketRepo: RocketRepository){
        this.rocketRepository = rocketRepo;
    }

    async getRocketById(rocketId: number) {
        return await this.rocketRepository.getRocketById(rocketId);
    }
    async getAllRockets() {
        return await this.rocketRepository.getRockets();
    }
    async createRocket(rocketId : number, newRocket: Object) {
        return await this.rocketRepository.createRocket(rocketId, newRocket);
    }    
    async deleteRocket(rocketId : number) {
        return await this.rocketRepository.deleteRocketById(rocketId);
    }
    async updateRocket(rocketId : number, newRocket: Object) {
        return await this.rocketRepository.updateRocketById(rocketId, newRocket);
    }
}
export {
    RocketService
};