import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {ProductoIcono, ProductoIconoRelations} from '../models/producto-icono.model';

export class ProductoIconoRepository extends DefaultCrudRepository<
  ProductoIcono,
  typeof ProductoIcono.prototype.id,
  ProductoIconoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(ProductoIcono, dataSource);
  }
}
