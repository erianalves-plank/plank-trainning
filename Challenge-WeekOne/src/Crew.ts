import Crewman from "./Crewman";

class Crew {
    private readonly name: string;
    private readonly id: number;
    private crewman: Array<Crewman>;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;   
        this.crewman = new Array<Crewman>;
    }

    public addCrewman(crewman: Crewman){
        this.crewman.push(crewman);
    }
}

export default Crew;