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
          unsigned: false,
          scale: 13,
          precision: 15
        },
        {
          name: 'longitude',
          type: 'decimal',
          unsigned: false,
          scale: 13,
          precision: 15
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
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'phone_number',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'reward',
          type: 'decimal',
          scale: 2,
          precision: 10,
          isNullable: true
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
          type: 'datetime',
          default: 'CURRENT_TIMESTAMP'
        },
        {
          name: 'updated_at',
          type: 'datetime',
          default: 'CURRENT_TIMESTAMP'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pets')
  }
}
