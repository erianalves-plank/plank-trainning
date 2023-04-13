class Crewman {
    private readonly name: string;
    private readonly id: number;
    private patent: string;

    constructor(name: string, id: number, patent: string) {
        this.name = name,
        this.id = id;
        this.patent = patent;
    }
}