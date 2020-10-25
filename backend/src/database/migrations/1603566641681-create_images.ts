import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createImages1603566641681 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
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
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'pet_id',
          type: 'integer'
        },
        {
          name: 'created_at',
          type: 'datetime'
        },
        {
          name: 'updated_at',
          type: 'datetime'
        }
      ],
      foreignKeys: [
        {
          name: 'imagePet',
          columnNames: ['pet_id'],
          referencedTableName: 'pets',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images')
  }
}
