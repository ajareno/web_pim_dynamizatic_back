import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {TipoArchivo, TipoArchivoRelations} from '../models';

export class TipoArchivoRepository extends DefaultCrudRepository<
  TipoArchivo,
  typeof TipoArchivo.prototype.id,
  TipoArchivoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(TipoArchivo, dataSource);
  }
}
