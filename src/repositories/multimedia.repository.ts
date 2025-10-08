import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BbddmysqlDataSource} from '../datasources';
import {Multimedia, MultimediaRelations} from '../models/multimedia.model';

export class MultimediaRepository extends DefaultCrudRepository<
  Multimedia,
  typeof Multimedia.prototype.id,
  MultimediaRelations
> {
  constructor(
    @inject('datasources.Bbddmysql') dataSource: BbddmysqlDataSource,
  ) {
    super(Multimedia, dataSource);
  }
}
