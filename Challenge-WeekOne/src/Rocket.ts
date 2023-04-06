import Launch from "./Launch";

class Rocket {
    private readonly name: string;
    private readonly id: string;
    
    constructor(name: string, id:  string){
        this.name = name;
        this.id = id;
    }
}

export default Rocket;