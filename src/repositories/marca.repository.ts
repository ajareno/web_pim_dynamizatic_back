import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Marca, MarcaRelations} from '../models/marca.model';

export class MarcaRepository extends DefaultCrudRepository<
  Marca,
  typeof Marca.prototype.id,
  MarcaRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Marca, dataSource);
  }
}
