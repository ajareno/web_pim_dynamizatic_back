import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {MensajePlantilla, MensajePlantillaRelations} from '../models';

export class MensajePlantillaRepository extends DefaultCrudRepository<
  MensajePlantilla,
  typeof MensajePlantilla.prototype.id,
  MensajePlantillaRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(MensajePlantilla, dataSource);
  }
}
