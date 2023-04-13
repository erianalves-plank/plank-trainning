class Launch {
    private readonly id: number;
    private readonly launchCode: string;
    private date: string;
    private success: boolean;
    private rocket: Rocket;
    private crew?: Array<Crew>;

    constructor(id: number, launchCode: string, success: boolean, rocket: Rocket) {
        this.id = id;
        this.launchCode = launchCode;
        this.success = success;
        this.date = (new Date()).toDateString();
        this.rocket = rocket;
        this.crew = new Array<Crew>;
    }
}