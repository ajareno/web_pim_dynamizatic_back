import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {TraduccionLiteral, TraduccionLiteralRelations} from '../models/traduccion-literal.model';

export class TraduccionLiteralRepository extends DefaultCrudRepository<
  TraduccionLiteral,
  typeof TraduccionLiteral.prototype.id,
  TraduccionLiteralRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(TraduccionLiteral, dataSource);
  }
}
