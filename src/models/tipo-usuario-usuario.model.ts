import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'bbddmysql', table: 'tipo_usuario_usuario'}}
})
export class TipoUsuarioUsuario extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: true,
    id: true,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false},
  })
  id: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: false,
    mysql: {columnName: 'usuario_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false},
  })
  usuarioId: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 5,
    scale: 0,
    generated: false,
    mysql: {columnName: 'tipo_usuario_id', dataType: 'smallint', dataLength: null, dataPrecision: 5, dataScale: 0, nullable: 'N', generated: false},
  })
  tipoUsuarioId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TipoUsuarioUsuario>) {
    super(data);
  }
}

export interface TipoUsuarioUsuarioRelations {
  // describe navigational properties here
}

export type TipoUsuarioUsuarioWithRelations = TipoUsuarioUsuario & TipoUsuarioUsuarioRelations;
