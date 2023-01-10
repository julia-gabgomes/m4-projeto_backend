import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedUserEntity1673381394559 implements MigrationInterface {
    name = 'updatedUserEntity1673381394559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "level" SET DEFAULT 'Junior'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "level" DROP DEFAULT`);
    }

}
