import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Icono, IconoRelations} from '../models/icono.model';
export class IconoRepository extends DefaultCrudRepository<
  Icono,
  typeof Icono.prototype.id,
  IconoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Icono, dataSource);
  }
}
