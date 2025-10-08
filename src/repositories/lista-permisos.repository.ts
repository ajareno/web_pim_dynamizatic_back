import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {ListaPermisos, ListaPermisosRelations} from '../models';

export class ListaPermisosRepository extends DefaultCrudRepository<
  ListaPermisos,
  typeof ListaPermisos.prototype.id,
  ListaPermisosRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(ListaPermisos, dataSource);
  }
}
