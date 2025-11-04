const fs = require('fs');
const path = require('path');

// Mapeo de snake_case a camelCase para las columnas
const columnMappings = {
  'empresa_id': 'empresaId',
  'tipo_archivo_id': 'tipoArchivoId',
  'id_tabla': 'idTabla',
  'fecha_creacion': 'fechaCreacion',
  'fecha_modificacion': 'fechaModificacion',
  'usuario_creacion': 'usuarioCreacion',
  'usuario_modificacion': 'usuarioModificacion',
  'grupo_atributo_id': 'grupoAtributoId',
  'tipo_dato': 'tipoDato',
  'unidad_medida': 'unidadMedida',
  'obligatorio_sn': 'obligatorioSn',
  'multivalor_sn': 'multivalorSn',
  'valores_permitidos': 'valoresPermitidos',
  'activo_sn': 'activoSn',
  'tabla_afectada': 'tablaAfectada',
  'id_registro': 'idRegistro',
  'usuario_id': 'usuarioId',
  'ip_address': 'ipAddress',
  'user_agent': 'userAgent',
  'valores_anteriores': 'valoresAnteriores',
  'valores_nuevos': 'valoresNuevos',
  'fecha_accion': 'fechaAccion',
  'tipo_campo': 'tipoCampo',
  'fecha_publicacion': 'fechaPublicacion',
  'fecha_vencimiento': 'fechaVencimiento',
  'catalogo_id': 'catalogoId',
  'producto_id': 'productoId',
  'fecha_inclusion': 'fechaInclusion',
  'categoria_padre_id': 'categoriaPadreId',
  'categoria_id': 'categoriaId',
  'color_primario': 'colorPrimario',
  'color_secundario': 'colorSecundario',
  'color_acento': 'colorAcento',
  'fuente_principal': 'fuentePrincipal',
  'configuracion_personalizada': 'configuracionPersonalizada',
  'tiempo_inactividad': 'tiempoInactividad',
  'fecha_inactivo': 'fechaInactivo',
  'usuario_inactivo': 'usuarioInactivo',
  'sistema_operativo': 'sistemaOperativo',
  'motivo_fallo': 'motivoFallo',
  'fecha_acceso': 'fechaAcceso',
  'tabla_origen': 'tablaOrigen',
  'nombre_archivo': 'nombreArchivo',
  'ruta_archivo': 'rutaArchivo',
  'filtros_aplicados': 'filtrosAplicados',
  'campos_exportados': 'camposExportados',
  'total_registros': 'totalRegistros',
  'registros_exportados': 'registrosExportados',
  'mensaje_resultado': 'mensajeResultado',
  'fecha_inicio': 'fechaInicio',
  'fecha_fin': 'fechaFin',
  'tabla_destino': 'tablaDestino',
  'registros_procesados': 'registrosProcesados',
  'registros_insertados': 'registrosInsertados',
  'registros_actualizados': 'registrosActualizados',
  'registros_con_error': 'registrosConError',
  'archivo_errores': 'archivoErrores',
  'sistema_externo': 'sistemaExterno',
  'tipo_sincronizacion': 'tipoSincronizacion',
  'registros_exitosos': 'registrosExitosos',
  'archivo_log': 'archivoLog',
  'sitio_web': 'sitioWeb',
  'pais_origen': 'paisOrigen',
  'url_api': 'urlApi',
  'credenciales_api': 'credencialesApi',
  'ultima_sincronizacion': 'ultimaSincronizacion',
  'tipo_mensaje_id': 'tipoMensajeId',
  'mensaje_plantilla_categoria_id': 'mensajePlantillaCategoriaId',
  'idioma_id': 'idiomaId',
  'texto_cuerpo': 'textoCuerpo',
  'archivo_original': 'archivoOriginal',
  'archivo_thumbnail': 'archivoThumbnail',
  'archivo_medio': 'archivoMedio',
  'archivo_grande': 'archivoGrande',
  'tamaño_bytes': 'tamañoBytes',
  'usuario_destinatario_id': 'usuarioDestinatarioId',
  'usuario_remitente_id': 'usuarioRemitenteId',
  'fecha_envio': 'fechaEnvio',
  'fecha_lectura': 'fechaLectura',
  'referencia_tabla': 'referenciaTabla',
  'referencia_id': 'referenciaId',
  'tipo_dato': 'tipoDato',
  'rol_id': 'rolId',
  'nombre_plantilla': 'nombrePlantilla',
  'marca_id': 'marcaId',
  'descripcion_corta': 'descripcionCorta',
  'descripcion_larga': 'descripcionLarga',
  'titulo_seo': 'tituloSeo',
  'palabras_clave': 'palabrasClave',
  'puntos_clave': 'puntosClave',
  'finalizado_sn': 'finalizadoSn',
  'imagen_principal': 'imagenPrincipal',
  'orden_atributos': 'ordenAtributos',
  'atributo_id': 'atributoId',
  'orden_en_grupo': 'ordenEnGrupo',
  'campo_dinamico_id': 'campoDinamicoId',
  'icono_id': 'iconoId',
  'texto_asociado': 'textoAsociado',
  'marketplace_id': 'marketplaceId',
  'titulo_personalizado': 'tituloPersonalizado',
  'descripcion_personalizada': 'descripcionPersonalizada',
  'palabras_clave_personalizadas': 'palabrasClavePersonalizadas',
  'activo_en_marketplace': 'activoEnMarketplace',
  'fecha_ultima_sincronizacion': 'fechaUltimaSincronizacion',
  'estado_sincronizacion': 'estadoSincronizacion',
  'mensaje_error': 'mensajeError',
  'multimedia_id': 'multimediaId',
  'tipo_uso': 'tipoUso',
  'es_principal': 'esPrincipal',
  'seccion_id': 'seccionId',
  'producto_id': 'productoId',
  'usuario_asignado_id': 'usuarioAsignadoId',
  'tipo_tarea': 'tipoTarea',
  'fecha_completada': 'fechaCompletada',
  'dias_aviso': 'diasAviso',
  'tipo_notificacion': 'tipoNotificacion',
  'tarea_dependiente_id': 'tareaDependienteId',
  'notificaciones_enviadas': 'notificacionesEnviadas',
  'tabla_referencia': 'tablaReferencia',
  'id_referencia': 'idReferencia'
};

function updateModelFile(filePath) {
  console.log(`Actualizando: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Actualizar cada mapeo de columna
  Object.entries(columnMappings).forEach(([snakeCase, camelCase]) => {
    // Buscar patrones como: mysql: {columnName: 'snake_case', ...}
    const regex = new RegExp(`(mysql:\\s*\\{[^}]*columnName:\\s*['"'])${snakeCase}(['"][^}]*\\})`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, `$1${camelCase}$2`);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Actualizado: ${path.basename(filePath)}`);
  } else {
    console.log(`- Sin cambios: ${path.basename(filePath)}`);
  }
}

function updateAllModels() {
  const modelsDir = path.join(__dirname, 'src', 'models');
  
  if (!fs.existsSync(modelsDir)) {
    console.error('Directorio de modelos no encontrado:', modelsDir);
    return;
  }
  
  const files = fs.readdirSync(modelsDir)
    .filter(file => file.endsWith('.model.ts'));
  
  console.log(`Encontrados ${files.length} archivos de modelo`);
  console.log('Iniciando actualización...\n');
  
  files.forEach(file => {
    const filePath = path.join(modelsDir, file);
    updateModelFile(filePath);
  });
  
  console.log('\n✅ Actualización de modelos completada');
}

// Ejecutar el script
updateAllModels();