import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createPets1603496114052 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'pets',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'pet_name',
          type: 'varchar'
        },
        {
          name: 'pet_type',
          type: 'varchar'
        },
        {
          name: 'detail',
          type: 'text'
        },
        {
          name: 'when',
          type: 'date'
        },
        {
          name: 'contact_name',
          type: 'varchar'
        },
        {
          name: 'phone_number',
          type: 'varchar'
        },
        {
          name: 'reward',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'founded',
          type: 'boolean',
          default: true
        },
        {
          name: 'action_type',
          type: 'char'
        },
        {
          name: 'created_at',
          type: 'datetime'
        },
        {
          name: 'updated_at',
          type: 'datetime'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pets')
  }
}
