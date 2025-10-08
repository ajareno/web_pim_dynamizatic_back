import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {TipoUsuarioUsuario, TipoUsuarioUsuarioRelations} from '../models';

export class TipoUsuarioUsuarioRepository extends DefaultCrudRepository<
  TipoUsuarioUsuario,
  typeof TipoUsuarioUsuario.prototype.id,
  TipoUsuarioUsuarioRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(TipoUsuarioUsuario, dataSource);
  }
}
