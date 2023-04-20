import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDB1682011901967 implements MigrationInterface {
    name = 'CreateDB1682011901967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "crewman" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "patent" character varying NOT NULL, CONSTRAINT "PK_4fb6d9687691fd6b62b98a62955" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crew" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cc72b429996b3476dbaac59f1c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "launch" ("id" SERIAL NOT NULL, "launchCode" character varying NOT NULL, "date" character varying NOT NULL, "success" boolean NOT NULL, CONSTRAINT "PK_0efd83695074312cab129ff59f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crew_crewmen_crewman" ("crewId" integer NOT NULL, "crewmanId" integer NOT NULL, CONSTRAINT "PK_ffee24cdeb79494bc69172128e8" PRIMARY KEY ("crewId", "crewmanId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_23676586de1dd70e9780398146" ON "crew_crewmen_crewman" ("crewId") `);
        await queryRunner.query(`CREATE INDEX "IDX_644d12dc04dc82662f5677d260" ON "crew_crewmen_crewman" ("crewmanId") `);
        await queryRunner.query(`ALTER TABLE "crew_crewmen_crewman" ADD CONSTRAINT "FK_23676586de1dd70e9780398146e" FOREIGN KEY ("crewId") REFERENCES "crew"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "crew_crewmen_crewman" ADD CONSTRAINT "FK_644d12dc04dc82662f5677d260c" FOREIGN KEY ("crewmanId") REFERENCES "crewman"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crew_crewmen_crewman" DROP CONSTRAINT "FK_644d12dc04dc82662f5677d260c"`);
        await queryRunner.query(`ALTER TABLE "crew_crewmen_crewman" DROP CONSTRAINT "FK_23676586de1dd70e9780398146e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_644d12dc04dc82662f5677d260"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_23676586de1dd70e9780398146"`);
        await queryRunner.query(`DROP TABLE "crew_crewmen_crewman"`);
        await queryRunner.query(`DROP TABLE "launch"`);
        await queryRunner.query(`DROP TABLE "crew"`);
        await queryRunner.query(`DROP TABLE "crewman"`);
    }

}
