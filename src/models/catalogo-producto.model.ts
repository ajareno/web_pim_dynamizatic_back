import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'bbddmysql', table: 'catalogo_producto'}}
})
export class CatalogoProducto extends Entity {
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
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'catalogo_id', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'N', generated: false},
  })
  catalogoId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'producto_id', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'N', generated: false},
  })
  productoId: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'orden', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'Y', generated: false, default: 0},
  })
  orden?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'fecha_inclusion', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  fechaInclusion?: string;

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

  constructor(data?: Partial<CatalogoProducto>) {
    super(data);
  }
}

export interface CatalogoProductoRelations {
  // describe navigational properties here
}

export type CatalogoProductoWithRelations = CatalogoProducto & CatalogoProductoRelations;