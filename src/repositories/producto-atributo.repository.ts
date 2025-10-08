import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {ProductoAtributo, ProductoAtributoRelations} from '../models/producto-atributo.model';

export class ProductoAtributoRepository extends DefaultCrudRepository<
  ProductoAtributo,
  typeof ProductoAtributo.prototype.id,
  ProductoAtributoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(ProductoAtributo, dataSource);
  }
}
