import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {LogExportacion, LogExportacionRelations} from '../models/log-exportacion.model';

export class LogExportacionRepository extends DefaultCrudRepository<
  LogExportacion,
  typeof LogExportacion.prototype.id,
  LogExportacionRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(LogExportacion, dataSource);
  }
}
