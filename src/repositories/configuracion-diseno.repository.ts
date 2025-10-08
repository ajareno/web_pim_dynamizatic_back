import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {ConfiguracionDiseno, ConfiguracionDisenoRelations} from '../models/configuracion-diseno.model';

export class ConfiguracionDisenoRepository extends DefaultCrudRepository<
  ConfiguracionDiseno,
  typeof ConfiguracionDiseno.prototype.id,
  ConfiguracionDisenoRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(ConfiguracionDiseno, dataSource);
  }
}
