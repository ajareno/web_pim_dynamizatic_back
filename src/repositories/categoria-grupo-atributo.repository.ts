import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {CategoriaGrupoAtributo, CategoriaGrupoAtributoRelations} from '../models/categoria-grupo-atributo.model';

export class CategoriaGrupoAtributoRepository extends DefaultCrudRepository<
  CategoriaGrupoAtributo,
  typeof CategoriaGrupoAtributo.prototype.id,
  CategoriaGrupoAtributoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(CategoriaGrupoAtributo, dataSource);
  }
}
