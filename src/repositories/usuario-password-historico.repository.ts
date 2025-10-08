import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {UsuarioPasswordHistorico, UsuarioPasswordHistoricoRelations} from '../models';

export class UsuarioPasswordHistoricoRepository extends DefaultCrudRepository<
  UsuarioPasswordHistorico,
  typeof UsuarioPasswordHistorico.prototype.id,
  UsuarioPasswordHistoricoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(UsuarioPasswordHistorico, dataSource);
  }
}
