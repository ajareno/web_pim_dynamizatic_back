import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {ParametroGlobal, ParametroGlobalRelations} from '../models/parametro-global.model';

export class ParametroGlobalRepository extends DefaultCrudRepository<
  ParametroGlobal,
  typeof ParametroGlobal.prototype.id,
  ParametroGlobalRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(ParametroGlobal, dataSource);
  }
}
