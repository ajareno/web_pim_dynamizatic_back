import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {TipoUsuario, TipoUsuarioRelations} from '../models';

export class TipoUsuarioRepository extends DefaultCrudRepository<
  TipoUsuario,
  typeof TipoUsuario.prototype.id,
  TipoUsuarioRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(TipoUsuario, dataSource);
  }
}
