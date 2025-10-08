import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {GrupoAtributo, GrupoAtributoRelations} from '../models/grupo-atributo.model';

export class GrupoAtributoRepository extends DefaultCrudRepository<
  GrupoAtributo,
  typeof GrupoAtributo.prototype.id,
  GrupoAtributoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(GrupoAtributo, dataSource);
  }
}
