import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'bbddmysql', table: 'producto'}}
})
export class Producto extends Entity {
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
    mysql: {columnName: 'categoria_id', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'N', generated: false},
  })
  categoriaId: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 11,
    scale: 0,
    generated: false,
    mysql: {columnName: 'marca_id', dataType: 'int', dataLength: null, dataPrecision: 11, dataScale: 0, nullable: 'Y', generated: false},
  })
  marcaId?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 100,
    generated: false,
    mysql: {columnName: 'sku', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  sku: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 50,
    generated: false,
    mysql: {columnName: 'ean', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  ean?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 200,
    generated: false,
    mysql: {columnName: 'nombre', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  nombre: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 500,
    generated: false,
    mysql: {columnName: 'descripcion_corta', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  descripcionCorta?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'descripcion_larga', dataType: 'mediumtext', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  descripcionLarga?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 200,
    generated: false,
    mysql: {columnName: 'titulo_seo', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  tituloSeo?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 500,
    generated: false,
    mysql: {columnName: 'palabras_clave', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  palabrasClave?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    generated: false,
    mysql: {columnName: 'puntos_clave', dataType: 'mediumtext', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  puntosClave?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    generated: false,
    mysql: {columnName: 'estado', dataType: 'enum', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false, default: 'borrador'},
  })
  estado: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 1,
    generated: false,
    mysql: {columnName: 'finalizado_sn', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false, default: 'N'},
  })
  finalizadoSn?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 250,
    generated: false,
    mysql: {columnName: 'imagen_principal', dataType: 'varchar', dataLength: 250, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  imagenPrincipal?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 500,
    generated: false,
    mysql: {columnName: 'orden_atributos', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  ordenAtributos?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 100,
    generated: false,
    mysql: {columnName: 'dimensiones', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  dimensiones?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 50,
    generated: false,
    mysql: {columnName: 'color', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  color?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 3,
    generated: false,
    mysql: {columnName: 'peso', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 3, nullable: 'Y', generated: false},
  })
  peso?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 1,
    generated: false,
    mysql: {columnName: 'activo_sn', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false, default: 'S'},
  })
  activoSn?: string;

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

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;