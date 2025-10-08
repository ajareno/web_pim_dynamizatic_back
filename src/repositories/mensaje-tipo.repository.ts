import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {MensajeTipo, MensajeTipoRelations} from '../models';

export class MensajeTipoRepository extends DefaultCrudRepository<
  MensajeTipo,
  typeof MensajeTipo.prototype.id,
  MensajeTipoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(MensajeTipo, dataSource);
  }
}
