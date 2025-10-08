import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Atributo, AtributoRelations} from '../models/atributo.model';

export class AtributoRepository extends DefaultCrudRepository<
  Atributo,
  typeof Atributo.prototype.id,
  AtributoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Atributo, dataSource);
  }
}
