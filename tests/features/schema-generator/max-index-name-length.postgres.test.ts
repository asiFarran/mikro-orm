import { Collection, Entity, ManyToOne, MikroORM, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import type { AbstractSqlDriver } from '@mikro-orm/knex';


@Entity({ tableName: 'very_long_table_name_64_chars_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' })
class ChildEntity {

  @PrimaryKey()
  id!: number;

  @ManyToOne({ type: 'ParentEntity' })
  parent!: any;

  @Property({ unique: true })
  key!: string;

}

@Entity()
class ParentEntity {

  @PrimaryKey()
  id!: number;

  @OneToMany({ entity: () => ChildEntity, mappedBy: 'parent' })
  children = new Collection<ChildEntity>(this);

}

describe('index and FK names should be a max of 64 chars in mysql (GH 1915)', () => {
  let orm: MikroORM<AbstractSqlDriver>;

  beforeAll(async () => {
    orm = await MikroORM.init({
      entities: [ParentEntity, ChildEntity],
      dbName: `mikro_orm_test_gh_1915`,
      type: 'postgresql',
    });
    await orm.getSchemaGenerator().ensureDatabase();
    await orm.getSchemaGenerator().dropSchema();
  });

  afterAll(() => orm.close(true));

  test('index and FK names should be a max of 64 chars in mysql', async () => {
    const sql = await orm.getSchemaGenerator().getCreateSchemaSQL();
    expect(sql).toMatchSnapshot();
    await orm.getSchemaGenerator().execute(sql);
    const diff = await orm.getSchemaGenerator().getUpdateSchemaSQL({ wrap: false });
    expect(diff).toBe('');
  });

});
