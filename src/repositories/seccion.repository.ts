import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Seccion, SeccionRelations} from '../models';

export class SeccionRepository extends DefaultCrudRepository<
  Seccion,
  typeof Seccion.prototype.id,
  SeccionRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Seccion, dataSource);
  }
}
