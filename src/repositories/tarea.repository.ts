import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Tarea, TareaRelations} from '../models/tarea.model';

export class TareaRepository extends DefaultCrudRepository<
  Tarea,
  typeof Tarea.prototype.id,
  TareaRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Tarea, dataSource);
  }
}
