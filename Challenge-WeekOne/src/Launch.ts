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

    public getInfoLaunch(): string {
        return `Launch registered with id ${this.id}, \n Launch Code: ${this.launchCode},\n date: ${this.date} and it was ${this.success ? "successful" : "failure"}`;
    } 
    public getId(): number {
        return this.id;
    }
}

export default Launch;
/**
 *  atributes: id launchCode date success
 * 
 * 
 */