import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {TraduccionContenido, TraduccionContenidoRelations} from '../models/traduccion-contenido.model';

export class TraduccionContenidoRepository extends DefaultCrudRepository<
  TraduccionContenido,
  typeof TraduccionContenido.prototype.id,
  TraduccionContenidoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(TraduccionContenido, dataSource);
  }
}
