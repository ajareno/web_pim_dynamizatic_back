import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {LogImportacion, LogImportacionRelations} from '../models/log-importacion.model';

export class LogImportacionRepository extends DefaultCrudRepository<
  LogImportacion,
  typeof LogImportacion.prototype.id,
  LogImportacionRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(LogImportacion, dataSource);
  }
}
