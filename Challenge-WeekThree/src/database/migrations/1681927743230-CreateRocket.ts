import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRocket1681927743230 implements MigrationInterface {
    name = 'CreateRocket1681927743230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rocket" ("name" character varying NOT NULL, "id" SERIAL NOT NULL, CONSTRAINT "PK_89b0efae402998623e1367aa34a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rocket"`);
    }

}
