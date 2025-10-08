import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Permiso, PermisoRelations} from '../models';

export class PermisoRepository extends DefaultCrudRepository<
  Permiso,
  typeof Permiso.prototype.id,
  PermisoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Permiso, dataSource);
  }
}
