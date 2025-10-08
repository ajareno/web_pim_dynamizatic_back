import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Auditoria, AuditoriaRelations} from '../models/auditoria.model';

export class AuditoriaRepository extends DefaultCrudRepository<
  Auditoria,
  typeof Auditoria.prototype.id,
  AuditoriaRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Auditoria, dataSource);
  }
}
