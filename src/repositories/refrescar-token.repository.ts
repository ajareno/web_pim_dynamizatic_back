import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {RefrescarToken, RefrescarTokenRelations} from '../models';

export class RefrescarTokenRepository extends DefaultCrudRepository<
  RefrescarToken,
  typeof RefrescarToken.prototype.id,
  RefrescarTokenRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(RefrescarToken, dataSource);
  }
}
