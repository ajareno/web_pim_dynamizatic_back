import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'bbddmysql', table: 'auditoria'}}
})
export class Auditoria extends Entity {
  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    generated: true,
    id: true,
    mysql: {columnName: 'id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N', generated: true},
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 6,
    scale: 0,
    generated: false,
    mysql: {columnName: 'empresa_id', dataType: 'smallint', dataLength: null, dataPrecision: 6, dataScale: 0, nullable: 'N', generated: false},
  })
  empresaId: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 100,
    generated: false,
    mysql: {columnName: 'tabla_afectada', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  tablaAfectada: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'id_registro', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'N', generated: false},
  })
  idRegistro: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    mysql: {columnName: 'accion', dataType: 'enum', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  accion: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'usuario_id', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'N', generated: false},
  })
  usuarioId: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 45,
    generated: false,
    mysql: {columnName: 'ip_address', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  ipAddress?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 500,
    generated: false,
    mysql: {columnName: 'user_agent', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  userAgent?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'valores_anteriores', dataType: 'longtext', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  valoresAnteriores?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'valores_nuevos', dataType: 'longtext', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  valoresNuevos?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    defaultFn: 'now',
    mysql: {columnName: 'fecha_accion', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false, default: 'CURRENT_TIMESTAMP'},
  })
  fechaAccion?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Auditoria>) {
    super(data);
  }
}

export interface AuditoriaRelations {
  // describe navigational properties here
}

export type AuditoriaWithRelations = Auditoria & AuditoriaRelations;