import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TraduccionLiteral} from '../models/traduccion-literal.model';
import {TraduccionLiteralRepository} from '../repositories';

export class TraduccionLiteralController {
  constructor(
    @repository(TraduccionLiteralRepository)
    public traduccionLiteralRepository : TraduccionLiteralRepository,
  ) {}

  @post('/traduccion-literals')
  @response(200, {
    description: 'TraduccionLiteral model instance',
    content: {'application/json': {schema: getModelSchemaRef(TraduccionLiteral)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TraduccionLiteral, {
            title: 'NewTraduccionLiteral'
          }),
        },
      },
    })
    traduccionLiteral: TraduccionLiteral, // Permite incluir el id
  ): Promise<TraduccionLiteral> {
    //
    // Si me llega el id borro el registro 
    //
    if (traduccionLiteral.id) {
      //
      //Verificamos si el registro existe para borrarlo, sino no lo hacemos
      //
      const count = await this.traduccionLiteralRepository.count({id: traduccionLiteral.id});
      if (count.count > 0) {
        await this.traduccionLiteralRepository.deleteAll({clave: traduccionLiteral.clave});
      }
      delete traduccionLiteral.id;
    }
    return this.traduccionLiteralRepository.create(traduccionLiteral);
  }

  @get('/traduccion-literals/count')
  @response(200, {
    description: 'TraduccionLiteral model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TraduccionLiteral) where?: Where<TraduccionLiteral>,
  ): Promise<Count> {
    const dataSource = this.traduccionLiteralRepository.dataSource;
    //Aplicamos filtros
    let filtros = '';
    //Obtiene los filtros
    filtros += ` WHERE 1=1`
    if (where) {
      for (const [key] of Object.entries(where)) {
        if (key === 'and' || key === 'or') {
          {
            let first = true
            for (const [subKey, subValue] of Object.entries((where as any)[key])) {
              if (subValue !== '' && subValue != null) {
                if (!first) {
                  if (key === 'and') {
                    filtros += ` AND`;
                  }
                  else {
                    filtros += ` OR`;
                  }
                }
                else {
                  filtros += ' AND ('
                }
                if (/^-?\d+(\.\d+)?$/.test(subValue as string)) {
                  filtros += ` ${subKey} = ${subValue}`;
                }
                else {
                  //Corrije el nombre del campo
                  if (subKey !== 'activoSn') {
                    filtros += ` ${subKey} LIKE '%${subValue}%'`;
                  }
                  else {
                    filtros += ` activo_sn LIKE '%${subValue}%'`;
                  }
                }
                first = false
              }
            }
            if (!first) {
              filtros += `)`;
            }
          }
        }
      }
    }
    const query = `SELECT COUNT(*) AS count FROM vista_traduccion_literal_idioma${filtros}`;
    const registros = await dataSource.execute(query, []);
    return registros;
  }

  @get('/traduccion-literals')
  @response(200, {
    description: 'Array of TraduccionLiteral model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TraduccionLiteral, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TraduccionLiteral) filter?: Filter<TraduccionLiteral>,
  ): Promise<TraduccionLiteral[]> {
    const dataSource = this.traduccionLiteralRepository.dataSource;
    //Aplicamos filtros
    let filtros = '';
    //Obtiene los filtros
    filtros += ` WHERE 1=1`
    if (filter?.where) {
      for (const [key] of Object.entries(filter?.where)) {
        if (key === 'and' || key === 'or') {
          {
            let first = true
            for (const [subKey, subValue] of Object.entries((filter?.where as any)[key])) {
              if (subValue !== '' && subValue != null) {
                if (!first) {
                  if (key === 'and') {
                    filtros += ` AND`;
                  }
                  else {
                    filtros += ` OR`;
                  }
                }
                else {
                  filtros += ' AND ('
                }
                if (/^-?\d+(\.\d+)?$/.test(subValue as string)) {
                  filtros += ` ${subKey} = ${subValue}`;
                }
                else {
                  //Corrije el nombre del campo
                  if (subKey !== 'activoSn') {
                    filtros += ` ${subKey} LIKE '%${subValue}%'`;
                  }
                  else {
                    filtros += ` activo_sn LIKE '%${subValue}%'`;
                  }
                }
                first = false
              }
            }
            if (!first) {
              filtros += `)`;
            }
          }
        }

      }
    }
    // Agregar ordenamiento
    if (filter?.order) {
      filtros += ` ORDER BY ${filter.order}`;
    }
    // Agregar paginación
    if (filter?.limit) {
      filtros += ` LIMIT ${filter?.limit}`;
    }
    if (filter?.offset) {
      filtros += ` OFFSET ${filter?.offset}`;
    }
    const query = `SELECT * FROM vista_traduccion_literal_idioma${filtros}`;
    const registros = await dataSource.execute(query);
    
    // Transformar los datos para mostrar idiomas como columnas dinámicas
    const transformedData = this.transformDataToColumns(registros);
    return transformedData;
  }

  @patch('/traduccion-literals')
  @response(200, {
    description: 'TraduccionLiteral PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TraduccionLiteral, {partial: true}),
        },
      },
    })
    traduccionLiteral: TraduccionLiteral,
    @param.where(TraduccionLiteral) where?: Where<TraduccionLiteral>,
  ): Promise<Count> {
    return this.traduccionLiteralRepository.updateAll(traduccionLiteral, where);
  }

  @get('/traduccion-literals/{id}')
  @response(200, {
    description: 'TraduccionLiteral model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TraduccionLiteral, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TraduccionLiteral, {exclude: 'where'}) filter?: FilterExcludingWhere<TraduccionLiteral>
  ): Promise<TraduccionLiteral> {
    return this.traduccionLiteralRepository.findById(id, filter);
  }

  @patch('/traduccion-literals/{id}')
  @response(204, {
    description: 'TraduccionLiteral PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TraduccionLiteral, {partial: true}),
        },
      },
    })
    traduccionLiteral: TraduccionLiteral,
  ): Promise<void> {
    await this.traduccionLiteralRepository.updateById(id, traduccionLiteral);
  }

  @put('/traduccion-literals/{id}')
  @response(204, {
    description: 'TraduccionLiteral PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() traduccionLiteral: TraduccionLiteral,
  ): Promise<void> {
    await this.traduccionLiteralRepository.replaceById(id, traduccionLiteral);
  }

  @del('/traduccion-literals/{id}')
  @response(204, {
    description: 'TraduccionLiteral DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    //
    // Primero obtenemos el registro para obtener la clave
    //
    const registro = await this.traduccionLiteralRepository.findById(id);
    //
    // Eliminamos todos los registros que tengan esa clave
    //
    await this.traduccionLiteralRepository.deleteAll({clave: registro.clave});
  }

  /**
   * Transforma los datos de traducciones agrupando por clave y convirtiendo idiomas en columnas
   * @param registros Array de registros de traducción
   * @returns Array de objetos con idiomas como columnas dinámicas
   */
  private transformDataToColumns(registros: any[]): any[] {
    // Agrupar por clave
    const groupedData = new Map<string, any>();
    
    registros.forEach(registro => {
      const clave = registro.clave;
      const nombreIdioma = registro.nombreIdioma;
      const valor = registro.valor;
      const id = registro.id;
      
      if (!groupedData.has(clave)) {
        groupedData.set(clave, { id, clave });
      }
      
      // Agregar el idioma como columna dinámica
      groupedData.get(clave)![nombreIdioma] = valor;
    });
    
    // Convertir el Map a Array
    return Array.from(groupedData.values());
  }
}

