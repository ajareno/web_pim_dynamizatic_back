import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {LogSincronizacion, LogSincronizacionRelations} from '../models/log-sincronizacion.model';

export class LogSincronizacionRepository extends DefaultCrudRepository<
  LogSincronizacion,
  typeof LogSincronizacion.prototype.id,
  LogSincronizacionRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(LogSincronizacion, dataSource);
  }
}
