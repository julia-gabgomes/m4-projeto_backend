import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserEntity1673362935972 implements MigrationInterface {
    name = 'createUserEntity1673362935972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying NOT NULL, "phone_number" character varying NOT NULL, "user_level" character varying(20) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
