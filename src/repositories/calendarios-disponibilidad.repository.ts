import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {CalendariosDisponibilidad, CalendariosDisponibilidadRelations} from '../models';

export class CalendariosDisponibilidadRepository extends DefaultCrudRepository<
  CalendariosDisponibilidad,
  typeof CalendariosDisponibilidad.prototype.id,
  CalendariosDisponibilidadRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(CalendariosDisponibilidad, dataSource);
  }
}
