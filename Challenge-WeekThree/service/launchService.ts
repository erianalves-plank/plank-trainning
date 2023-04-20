import { LaunchRepository } from "../repository/launchRepository";

class LaunchService {

    private launchRepository: LaunchRepository;

    constructor (launchRepo: LaunchRepository){
        this.launchRepository = launchRepo;
    }

    async getLaunchById(launchId: number) {
        return await this.launchRepository.getLaunchById(launchId);
    }
    async getAllLaunchs() {
        return await this.launchRepository.getLaunchs();
    }
    async createLaunch(newlaunch: Object) {
        return await this.launchRepository.createLaunch(newlaunch);
    }    
    async deleteLaunch(launchId : number) {
        return await this.launchRepository.deleteLaunchById(launchId);
    }
    async updateLaunch(launchId : number, newLaunch: Object) {
        return await this.launchRepository.updateLaunchById(launchId, newLaunch);
    }
}
export {
    LaunchService
};