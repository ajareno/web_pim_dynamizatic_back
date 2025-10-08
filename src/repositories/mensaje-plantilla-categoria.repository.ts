import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {MensajePlantillaCategoria, MensajePlantillaCategoriaRelations} from '../models';

export class MensajePlantillaCategoriaRepository extends DefaultCrudRepository<
  MensajePlantillaCategoria,
  typeof MensajePlantillaCategoria.prototype.id,
  MensajePlantillaCategoriaRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(MensajePlantillaCategoria, dataSource);
  }
}
