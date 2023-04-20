
class Crew {
    private readonly name: string;
    private readonly id: number;
    private crewmen: Array<Crewman>;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.crewmen = new Array<Crewman>;
    }
}

export {
    Crew
};