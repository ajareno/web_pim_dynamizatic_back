import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {ProductoCampoDinamico, ProductoCampoDinamicoRelations} from '../models/producto-campo-dinamico.model';

export class ProductoCampoDinamicoRepository extends DefaultCrudRepository<
  ProductoCampoDinamico,
  typeof ProductoCampoDinamico.prototype.id,
  ProductoCampoDinamicoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(ProductoCampoDinamico, dataSource);
  }
}
