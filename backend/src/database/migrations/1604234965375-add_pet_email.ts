import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class addPetEmail1604234965375 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('pets', new TableColumn({
      name: 'email',
      type: 'varchar'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('pets', 'email')
  }
}
