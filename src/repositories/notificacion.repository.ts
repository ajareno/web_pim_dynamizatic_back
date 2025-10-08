import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Notificacion, NotificacionRelations} from '../models/notificacion.model';

export class NotificacionRepository extends DefaultCrudRepository<
  Notificacion,
  typeof Notificacion.prototype.id,
  NotificacionRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Notificacion, dataSource);
  }
}
