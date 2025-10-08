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
  HttpErrors
} from '@loopback/rest';
import {MensajePlantilla} from '../models';
import {MensajePlantillaRepository} from '../repositories';

export class MensajePlantillaController {
  constructor(
    @repository(MensajePlantillaRepository)
    public mensajePlantillaRepository : MensajePlantillaRepository,
  ) {}

  @post('/mensaje-plantillas')
  @response(200, {
    description: 'MensajePlantilla model instance',
    content: {'application/json': {schema: getModelSchemaRef(MensajePlantilla)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajePlantilla, {
            title: 'NewMensajePlantilla',
            exclude: ['id'],
          }),
        },
      },
    })
    mensajePlantilla: Omit<MensajePlantilla, 'id'>,
  ): Promise<MensajePlantilla> {
    return this.mensajePlantillaRepository.create(mensajePlantilla);
  }

  @get('/mensaje-plantillas/count')
  @response(200, {
    description: 'MensajePlantilla model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MensajePlantilla) where?: Where<MensajePlantilla>,
  ): Promise<Count> {
    const dataSource = this.mensajePlantillaRepository.dataSource;
    //Aplicamos filtros
    let filtros = '';
      filtros += ` WHERE 1=1`
      //Obtiene los filtros
      if (where) {
        let first = true
        for (const [key, value] of Object.entries(where)) {
          if (value !== null) {
            if (!first) {
              filtros += ` OR`;
            }
            else {
              filtros += ' AND ('
            }
            filtros += ` ${key} LIKE '%${value}%'`;
            first = false
          }
        }
        if (!first) {
          filtros += `)`;
        }
      }
      const query = `SELECT COUNT(*) AS count FROM mensaje_plantilla${filtros}`;
      const registros = await dataSource.execute(query, []);
      return registros[0];
  }

  @get('/mensaje-plantillas')
  @response(200, {
    description: 'Array of MensajePlantilla model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MensajePlantilla, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MensajePlantilla) filter?: Filter<MensajePlantilla>,
  ): Promise<MensajePlantilla[]> {
    const dataSource = this.mensajePlantillaRepository.dataSource;
    //Aplicamos filtros
    let filtros = '';
    //Obtiene los filtros
    let first = true
    filtros += ` WHERE 1=1`
    if (filter?.where) {
      for (const [key, value] of Object.entries(filter.where)) {
        if (value !== '' && value !== null) {
          if (!first) {
            filtros += ` OR`;
          }
          else {
            filtros += ' AND ('
          }
          if(key === 'empresaId'){
            filtros += ` empresa_id = '${value}'`;
          }
          else{
            filtros += ` ${key} LIKE '%${value}%'`;
          }
          
          first = false
        }
      }
      if (!first) {
        filtros += `)`;
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
    const query = `SELECT id,nombre, mensaje_plantilla_categoria_id AS mensajePlantillaCategoriaId, empresa_id AS empresaId, idioma_id AS idiomaId, texto_cuerpo AS textoCuerpo FROM mensaje_plantilla${filtros}`;
    const registros = await dataSource.execute(query);
    return registros;
  }

  @patch('/mensaje-plantillas')
  @response(200, {
    description: 'MensajePlantilla PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajePlantilla, {partial: true}),
        },
      },
    })
    mensajePlantilla: MensajePlantilla,
    @param.where(MensajePlantilla) where?: Where<MensajePlantilla>,
  ): Promise<Count> {
    return this.mensajePlantillaRepository.updateAll(mensajePlantilla, where);
  }

  @get('/mensaje-plantillas/{id}')
  @response(200, {
    description: 'MensajePlantilla model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MensajePlantilla, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(MensajePlantilla, {exclude: 'where'}) filter?: FilterExcludingWhere<MensajePlantilla>
  ): Promise<MensajePlantilla> {
    return this.mensajePlantillaRepository.findById(id, filter);
  }

  @patch('/mensaje-plantillas/{id}')
  @response(204, {
    description: 'MensajePlantilla PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajePlantilla, {partial: true}),
        },
      },
    })
    mensajePlantilla: MensajePlantilla,
  ): Promise<void> {
    await this.mensajePlantillaRepository.updateById(id, mensajePlantilla);
  }

  @put('/mensaje-plantillas/{id}')
  @response(204, {
    description: 'MensajePlantilla PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mensajePlantilla: MensajePlantilla,
  ): Promise<void> {
    await this.mensajePlantillaRepository.replaceById(id, mensajePlantilla);
  }

  @del('/mensaje-plantillas/{id}')
  @response(204, {
    description: 'MensajePlantilla DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    try {
      //Borra la plantilla
      await this.mensajePlantillaRepository.deleteById(id);
    } catch (e) {
      if (e.errno === 1451) {
        throw new HttpErrors.BadRequest('No se pudo eliminar el registro porque tiene otros registros relacionados.');
      } else {
        throw new HttpErrors.BadRequest('No se pudo eliminar el registro.');
      }
    }
  }
}
