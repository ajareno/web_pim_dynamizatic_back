import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'bbddmysql', table: 'log_acceso'}}
})
export class LogAcceso extends Entity {
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
    length: 100,
    generated: false,
    mysql: {columnName: 'navegador', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  navegador?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 100,
    generated: false,
    mysql: {columnName: 'sistema_operativo', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  sistemaOperativo?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 100,
    generated: false,
    mysql: {columnName: 'dispositivo', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  dispositivo?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    mysql: {columnName: 'resultado', dataType: 'enum', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false, default: 'exitoso'},
  })
  resultado: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 200,
    generated: false,
    mysql: {columnName: 'motivo_fallo', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  motivoFallo?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    defaultFn: 'now',
    mysql: {columnName: 'fecha_acceso', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false, default: 'CURRENT_TIMESTAMP'},
  })
  fechaAcceso?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LogAcceso>) {
    super(data);
  }
}

export interface LogAccesoRelations {
  // describe navigational properties here
}

export type LogAccesoWithRelations = LogAcceso & LogAccesoRelations;