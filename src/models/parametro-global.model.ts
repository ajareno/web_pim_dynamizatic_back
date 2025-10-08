import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'bbddmysql', table: 'parametro_global'}}
})
export class ParametroGlobal extends Entity {
  @property({
    type: 'number',
    precision: 11,
    scale: 0,
    generated: true,
    id: true,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'N', generated: true},
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 100,
    generated: false,
    mysql: {columnName: 'clave', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  clave: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'valor', dataType: 'mediumtext', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  valor?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 500,
    generated: false,
    mysql: {columnName: 'descripcion', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  descripcion?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    mysql: {columnName: 'tipo_dato', dataType: 'enum', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false, default: 'texto'},
  })
  tipoDato: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 1,
    generated: false,
    mysql: {columnName: 'modificable', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false, default: 'S'},
  })
  modificable?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    defaultFn: 'now',
    mysql: {columnName: 'fecha_creacion', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false, default: 'CURRENT_TIMESTAMP'},
  })
  fechaCreacion?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'fecha_modificacion', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  fechaModificacion?: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'usuario_creacion', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'N', generated: false},
  })
  usuarioCreacion: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'usuario_modificacion', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'Y', generated: false},
  })
  usuarioModificacion?: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ParametroGlobal>) {
    super(data);
  }
}

export interface ParametroGlobalRelations {
  // describe navigational properties here
}

export type ParametroGlobalWithRelations = ParametroGlobal & ParametroGlobalRelations;