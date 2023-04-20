import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rocket')
export class Rocket {
    @Column()
    name: string;
    @PrimaryGeneratedColumn()
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}