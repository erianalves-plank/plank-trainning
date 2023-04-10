import Rocket from "./Rocket";
import Crew from "./Crew";

class Launch {
    private readonly id: number;
    private readonly launchCode: string;
    private date: string;
    private success: boolean = true;
    private rocket: Rocket;
    private crew?: Crew;

    constructor(id: number, launchCode: string, rocket: Rocket, crew?: Crew){
        this.id = id;
        this.launchCode = launchCode;
        this.date = (new Date()).toDateString();
        this.rocket = rocket;
        this.crew = crew;
    }

    public setSuccess(success: boolean): void {
        this.success = success;
    }
    public getSuccess(): boolean {
        return this.success;
    }
}

export default Launch;