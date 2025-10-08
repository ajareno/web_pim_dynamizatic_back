import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'bbddmysql', table: 'log_sincronizacion'}}
})
export class LogSincronizacion extends Entity {
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
    mysql: {columnName: 'sistema_externo', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  sistemaExterno: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    mysql: {columnName: 'tipo_sincronizacion', dataType: 'enum', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  tipoSincronizacion: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    mysql: {columnName: 'estado', dataType: 'enum', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  estado: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'registros_procesados', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'Y', generated: false, default: 0},
  })
  registrosProcesados?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'registros_exitosos', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'Y', generated: false, default: 0},
  })
  registrosExitosos?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'registros_con_error', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'Y', generated: false, default: 0},
  })
  registrosConError?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'mensaje_resultado', dataType: 'mediumtext', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  mensajeResultado?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 500,
    generated: false,
    mysql: {columnName: 'archivo_log', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  archivoLog?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'usuario_id', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'Y', generated: false},
  })
  usuarioId?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    defaultFn: 'now',
    mysql: {columnName: 'fecha_inicio', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false, default: 'CURRENT_TIMESTAMP'},
  })
  fechaInicio?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'fecha_fin', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  fechaFin?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LogSincronizacion>) {
    super(data);
  }
}

export interface LogSincronizacionRelations {
  // describe navigational properties here
}

export type LogSincronizacionWithRelations = LogSincronizacion & LogSincronizacionRelations;