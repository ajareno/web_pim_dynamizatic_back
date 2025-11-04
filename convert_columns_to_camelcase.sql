-- Script para convertir todas las columnas de snake_case a camelCase
-- Base de datos: PIM Dynamizatic

-- Tabla: archivo
ALTER TABLE `archivo` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `tipo_archivo_id` `tipoArchivoId` int(10) DEFAULT NULL,
CHANGE COLUMN `id_tabla` `idTabla` int(10) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(10) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(10) DEFAULT NULL;

-- Tabla: atributo
ALTER TABLE `atributo` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `grupo_atributo_id` `grupoAtributoId` int(11) DEFAULT NULL,
CHANGE COLUMN `tipo_dato` `tipoDato` enum('texto','numero','fecha','booleano','lista','multiselect') NOT NULL DEFAULT 'texto',
CHANGE COLUMN `unidad_medida` `unidadMedida` varchar(50) DEFAULT NULL,
CHANGE COLUMN `obligatorio_sn` `obligatorioSn` varchar(1) DEFAULT 'N',
CHANGE COLUMN `multivalor_sn` `multivalorSn` varchar(1) DEFAULT 'N',
CHANGE COLUMN `valores_permitidos` `valoresPermitidos` mediumtext DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: auditoria
ALTER TABLE `auditoria` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `tabla_afectada` `tablaAfectada` varchar(100) NOT NULL,
CHANGE COLUMN `id_registro` `idRegistro` int(11) NOT NULL,
CHANGE COLUMN `usuario_id` `usuarioId` int(11) NOT NULL,
CHANGE COLUMN `ip_address` `ipAddress` varchar(45) DEFAULT NULL,
CHANGE COLUMN `user_agent` `userAgent` varchar(500) DEFAULT NULL,
CHANGE COLUMN `valores_anteriores` `valoresAnteriores` longtext DEFAULT NULL,
CHANGE COLUMN `valores_nuevos` `valoresNuevos` longtext DEFAULT NULL,
CHANGE COLUMN `fecha_accion` `fechaAccion` timestamp NULL DEFAULT current_timestamp();

-- Tabla: calendarios_disponibilidad
ALTER TABLE `calendarios_disponibilidad` 
CHANGE COLUMN `usuario_id` `usuarioId` int(11) DEFAULT NULL,
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: campo_dinamico
ALTER TABLE `campo_dinamico` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `tipo_campo` `tipoCampo` enum('texto','textarea','numero','fecha','booleano','select','multiselect') NOT NULL,
CHANGE COLUMN `obligatorio_sn` `obligatorioSn` varchar(1) DEFAULT 'N',
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: catalogo
ALTER TABLE `catalogo` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `fecha_publicacion` `fechaPublicacion` date DEFAULT NULL,
CHANGE COLUMN `fecha_vencimiento` `fechaVencimiento` date DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: catalogo_producto
ALTER TABLE `catalogo_producto` 
CHANGE COLUMN `catalogo_id` `catalogoId` int(11) NOT NULL,
CHANGE COLUMN `producto_id` `productoId` int(11) NOT NULL,
CHANGE COLUMN `fecha_inclusion` `fechaInclusion` date DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: categoria
ALTER TABLE `categoria` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `categoria_padre_id` `categoriaPadreId` int(11) DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: categoria_grupo_atributo
ALTER TABLE `categoria_grupo_atributo` 
CHANGE COLUMN `categoria_id` `categoriaId` int(11) NOT NULL,
CHANGE COLUMN `grupo_atributo_id` `grupoAtributoId` int(11) NOT NULL,
CHANGE COLUMN `obligatorio_sn` `obligatorioSn` varchar(1) DEFAULT 'N',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: configuracion_diseno
ALTER TABLE `configuracion_diseno` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `color_primario` `colorPrimario` varchar(7) DEFAULT '#007bff',
CHANGE COLUMN `color_secundario` `colorSecundario` varchar(7) DEFAULT '#6c757d',
CHANGE COLUMN `color_acento` `colorAcento` varchar(7) DEFAULT '#28a745',
CHANGE COLUMN `fuente_principal` `fuentePrincipal` varchar(100) DEFAULT 'Arial, sans-serif',
CHANGE COLUMN `configuracion_personalizada` `configuracionPersonalizada` longtext DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: empresa
ALTER TABLE `empresa` 
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(10) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(10) DEFAULT NULL,
CHANGE COLUMN `tiempo_inactividad` `tiempoInactividad` int(11) DEFAULT NULL;

-- Tabla: grupo_atributo
ALTER TABLE `grupo_atributo` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: icono
ALTER TABLE `icono` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: idioma
ALTER TABLE `idioma` 
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL,
CHANGE COLUMN `fecha_inactivo` `fechaInactivo` datetime DEFAULT NULL,
CHANGE COLUMN `usuario_inactivo` `usuarioInactivo` int(10) DEFAULT NULL;

-- Tabla: log_acceso
ALTER TABLE `log_acceso` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `usuario_id` `usuarioId` int(11) NOT NULL,
CHANGE COLUMN `ip_address` `ipAddress` varchar(45) DEFAULT NULL,
CHANGE COLUMN `user_agent` `userAgent` varchar(500) DEFAULT NULL,
CHANGE COLUMN `sistema_operativo` `sistemaOperativo` varchar(100) DEFAULT NULL,
CHANGE COLUMN `motivo_fallo` `motivoFallo` varchar(200) DEFAULT NULL,
CHANGE COLUMN `fecha_acceso` `fechaAcceso` timestamp NULL DEFAULT current_timestamp();

-- Tabla: log_exportacion
ALTER TABLE `log_exportacion` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `usuario_id` `usuarioId` int(11) NOT NULL,
CHANGE COLUMN `tabla_origen` `tablaOrigen` varchar(100) NOT NULL,
CHANGE COLUMN `nombre_archivo` `nombreArchivo` varchar(200) NOT NULL,
CHANGE COLUMN `ruta_archivo` `rutaArchivo` varchar(500) NOT NULL,
CHANGE COLUMN `filtros_aplicados` `filtrosAplicados` longtext DEFAULT NULL,
CHANGE COLUMN `campos_exportados` `camposExportados` longtext DEFAULT NULL,
CHANGE COLUMN `total_registros` `totalRegistros` int(11) DEFAULT 0,
CHANGE COLUMN `registros_exportados` `registrosExportados` int(11) DEFAULT 0,
CHANGE COLUMN `mensaje_resultado` `mensajeResultado` mediumtext DEFAULT NULL,
CHANGE COLUMN `fecha_inicio` `fechaInicio` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_fin` `fechaFin` timestamp NULL DEFAULT NULL;

-- Tabla: log_importacion
ALTER TABLE `log_importacion` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `usuario_id` `usuarioId` int(11) NOT NULL,
CHANGE COLUMN `tabla_destino` `tablaDestino` varchar(100) NOT NULL,
CHANGE COLUMN `nombre_archivo` `nombreArchivo` varchar(200) NOT NULL,
CHANGE COLUMN `ruta_archivo` `rutaArchivo` varchar(500) NOT NULL,
CHANGE COLUMN `total_registros` `totalRegistros` int(11) DEFAULT 0,
CHANGE COLUMN `registros_procesados` `registrosProcesados` int(11) DEFAULT 0,
CHANGE COLUMN `registros_insertados` `registrosInsertados` int(11) DEFAULT 0,
CHANGE COLUMN `registros_actualizados` `registrosActualizados` int(11) DEFAULT 0,
CHANGE COLUMN `registros_con_error` `registrosConError` int(11) DEFAULT 0,
CHANGE COLUMN `archivo_errores` `archivoErrores` varchar(500) DEFAULT NULL,
CHANGE COLUMN `mensaje_resultado` `mensajeResultado` mediumtext DEFAULT NULL,
CHANGE COLUMN `fecha_inicio` `fechaInicio` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_fin` `fechaFin` timestamp NULL DEFAULT NULL;

-- Tabla: log_sincronizacion
ALTER TABLE `log_sincronizacion` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `sistema_externo` `sistemaExterno` varchar(100) NOT NULL,
CHANGE COLUMN `tipo_sincronizacion` `tipoSincronizacion` enum('importacion','exportacion','bidireccional') NOT NULL,
CHANGE COLUMN `registros_procesados` `registrosProcesados` int(11) DEFAULT 0,
CHANGE COLUMN `registros_exitosos` `registrosExitosos` int(11) DEFAULT 0,
CHANGE COLUMN `registros_con_error` `registrosConError` int(11) DEFAULT 0,
CHANGE COLUMN `mensaje_resultado` `mensajeResultado` mediumtext DEFAULT NULL,
CHANGE COLUMN `archivo_log` `archivoLog` varchar(500) DEFAULT NULL,
CHANGE COLUMN `usuario_id` `usuarioId` int(11) DEFAULT NULL,
CHANGE COLUMN `fecha_inicio` `fechaInicio` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_fin` `fechaFin` timestamp NULL DEFAULT NULL;

-- Tabla: marca
ALTER TABLE `marca` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `sitio_web` `sitioWeb` varchar(200) DEFAULT NULL,
CHANGE COLUMN `pais_origen` `paisOrigen` varchar(100) DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: marketplace
ALTER TABLE `marketplace` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `url_api` `urlApi` varchar(500) DEFAULT NULL,
CHANGE COLUMN `credenciales_api` `credencialesApi` longtext DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `ultima_sincronizacion` `ultimaSincronizacion` timestamp NULL DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: mensaje
ALTER TABLE `mensaje` 
CHANGE COLUMN `usuario_id` `usuarioId` int(11) DEFAULT NULL,
CHANGE COLUMN `tipo_mensaje_id` `tipoMensajeId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: mensaje_plantilla
ALTER TABLE `mensaje_plantilla` 
CHANGE COLUMN `mensaje_plantilla_categoria_id` `mensajePlantillaCategoriaId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `idioma_id` `idiomaId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `texto_cuerpo` `textoCuerpo` varchar(5000) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` varchar(50) DEFAULT 'CURRENT_TIMESTAMP()',
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` varchar(50) DEFAULT 'ON UPDATE CURRENT_TIMESTAMP()',
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: mensaje_plantilla_categoria
ALTER TABLE `mensaje_plantilla_categoria` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL,
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) DEFAULT NULL;

-- Tabla: mensaje_tipo
ALTER TABLE `mensaje_tipo` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` varchar(50) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` varchar(50) DEFAULT NULL;

-- Tabla: multimedia
ALTER TABLE `multimedia` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `archivo_original` `archivoOriginal` varchar(250) NOT NULL,
CHANGE COLUMN `archivo_thumbnail` `archivoThumbnail` varchar(250) DEFAULT NULL,
CHANGE COLUMN `archivo_medio` `archivoMedio` varchar(250) DEFAULT NULL,
CHANGE COLUMN `archivo_grande` `archivoGrande` varchar(250) DEFAULT NULL,
CHANGE COLUMN `tamaño_bytes` `tamañoBytes` bigint(20) DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: notificacion
ALTER TABLE `notificacion` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `usuario_destinatario_id` `usuarioDestinatarioId` int(11) NOT NULL,
CHANGE COLUMN `usuario_remitente_id` `usuarioRemitenteId` int(11) DEFAULT NULL,
CHANGE COLUMN `fecha_envio` `fechaEnvio` datetime DEFAULT NULL,
CHANGE COLUMN `fecha_lectura` `fechaLectura` datetime DEFAULT NULL,
CHANGE COLUMN `referencia_tabla` `referenciaTabla` varchar(100) DEFAULT NULL,
CHANGE COLUMN `referencia_id` `referenciaId` int(11) DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: parametro_global
ALTER TABLE `parametro_global` 
CHANGE COLUMN `tipo_dato` `tipoDato` enum('texto','numero','booleano','json','fecha') NOT NULL DEFAULT 'texto',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: permiso
ALTER TABLE `permiso` 
CHANGE COLUMN `rol_id` `rolId` int(10) NOT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(10) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(10) DEFAULT NULL;

-- Tabla: plantilla_email
ALTER TABLE `plantilla_email` 
CHANGE COLUMN `idioma_id` `idiomaId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) DEFAULT NULL,
CHANGE COLUMN `nombre_plantilla` `nombrePlantilla` varchar(50) DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL,
CHANGE COLUMN `fecha_inactivo` `fechaInactivo` timestamp NULL DEFAULT NULL,
CHANGE COLUMN `usuario_inactivo` `usuarioInactivo` varchar(11) DEFAULT NULL;

-- Tabla: producto
ALTER TABLE `producto` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `categoria_id` `categoriaId` int(11) NOT NULL,
CHANGE COLUMN `marca_id` `marcaId` int(11) DEFAULT NULL,
CHANGE COLUMN `descripcion_corta` `descripcionCorta` varchar(500) DEFAULT NULL,
CHANGE COLUMN `descripcion_larga` `descripcionLarga` mediumtext DEFAULT NULL,
CHANGE COLUMN `titulo_seo` `tituloSeo` varchar(200) DEFAULT NULL,
CHANGE COLUMN `palabras_clave` `palabrasClave` varchar(500) DEFAULT NULL,
CHANGE COLUMN `puntos_clave` `puntosClave` mediumtext DEFAULT NULL,
CHANGE COLUMN `finalizado_sn` `finalizadoSn` varchar(1) DEFAULT 'N',
CHANGE COLUMN `imagen_principal` `imagenPrincipal` varchar(250) DEFAULT NULL,
CHANGE COLUMN `orden_atributos` `ordenAtributos` varchar(500) DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: producto_atributo
ALTER TABLE `producto_atributo` 
CHANGE COLUMN `producto_id` `productoId` int(11) NOT NULL,
CHANGE COLUMN `atributo_id` `atributoId` int(11) NOT NULL,
CHANGE COLUMN `orden_en_grupo` `ordenEnGrupo` int(11) DEFAULT 0,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: producto_campo_dinamico
ALTER TABLE `producto_campo_dinamico` 
CHANGE COLUMN `producto_id` `productoId` int(11) NOT NULL,
CHANGE COLUMN `campo_dinamico_id` `campoDinamicoId` int(11) NOT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: producto_icono
ALTER TABLE `producto_icono` 
CHANGE COLUMN `producto_id` `productoId` int(11) NOT NULL,
CHANGE COLUMN `icono_id` `iconoId` int(11) NOT NULL,
CHANGE COLUMN `texto_asociado` `textoAsociado` varchar(100) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: producto_marketplace
ALTER TABLE `producto_marketplace` 
CHANGE COLUMN `producto_id` `productoId` int(11) NOT NULL,
CHANGE COLUMN `marketplace_id` `marketplaceId` int(11) NOT NULL,
CHANGE COLUMN `titulo_personalizado` `tituloPersonalizado` varchar(200) DEFAULT NULL,
CHANGE COLUMN `descripcion_personalizada` `descripcionPersonalizada` mediumtext DEFAULT NULL,
CHANGE COLUMN `palabras_clave_personalizadas` `palabrasClavePersonalizadas` varchar(500) DEFAULT NULL,
CHANGE COLUMN `activo_en_marketplace` `activoEnMarketplace` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_ultima_sincronizacion` `fechaUltimaSincronizacion` timestamp NULL DEFAULT NULL,
CHANGE COLUMN `estado_sincronizacion` `estadoSincronizacion` enum('pendiente','sincronizado','error') DEFAULT 'pendiente',
CHANGE COLUMN `mensaje_error` `mensajeError` mediumtext DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: producto_multimedia
ALTER TABLE `producto_multimedia` 
CHANGE COLUMN `producto_id` `productoId` int(11) NOT NULL,
CHANGE COLUMN `multimedia_id` `multimediaId` int(11) NOT NULL,
CHANGE COLUMN `tipo_uso` `tipoUso` enum('principal','galeria','ficha_tecnica','manual','otro') DEFAULT 'galeria',
CHANGE COLUMN `es_principal` `esPrincipal` varchar(1) DEFAULT 'N',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: refrescar_token
ALTER TABLE `refrescar_token` 
CHANGE COLUMN `usuario_id` `usuarioId` int(11) DEFAULT NULL;

-- Tabla: rol
ALTER TABLE `rol` 
CHANGE COLUMN `empresa_Id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(10) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(10) DEFAULT NULL,
CHANGE COLUMN `fecha_inactivo` `fechaInactivo` datetime DEFAULT NULL,
CHANGE COLUMN `usuario_inactivo` `usuarioInactivo` int(10) DEFAULT NULL;

-- Tabla: seccion
ALTER TABLE `seccion` 
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(10) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(10) DEFAULT NULL;

-- Tabla: tarea
ALTER TABLE `tarea` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `producto_id` `productoId` int(11) DEFAULT NULL,
CHANGE COLUMN `usuario_asignado_id` `usuarioAsignadoId` int(11) NOT NULL,
CHANGE COLUMN `tipo_tarea` `tipoTarea` varchar(100) DEFAULT NULL,
CHANGE COLUMN `fecha_inicio` `fechaInicio` date DEFAULT NULL,
CHANGE COLUMN `fecha_fin` `fechaFin` date DEFAULT NULL,
CHANGE COLUMN `fecha_completada` `fechaCompletada` datetime DEFAULT NULL,
CHANGE COLUMN `dias_aviso` `diasAviso` int(11) DEFAULT NULL,
CHANGE COLUMN `tipo_notificacion` `tipoNotificacion` enum('dias_desde_inicio','dias_antes_fin','dias_despues_otra_tarea') DEFAULT 'dias_antes_fin',
CHANGE COLUMN `tarea_dependiente_id` `tareaDependienteId` int(11) DEFAULT NULL,
CHANGE COLUMN `notificaciones_enviadas` `notificacionesEnviadas` int(11) DEFAULT 0,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT 'S',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: tipo_archivo
ALTER TABLE `tipo_archivo` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `seccion_id` `seccionId` smallint(6) NOT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(10) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(10) DEFAULT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT NULL;

-- Tabla: traduccion_contenido
ALTER TABLE `traduccion_contenido` 
CHANGE COLUMN `tabla_referencia` `tablaReferencia` varchar(100) NOT NULL,
CHANGE COLUMN `id_referencia` `idReferencia` int(11) NOT NULL,
CHANGE COLUMN `idioma_id` `idiomaId` smallint(6) NOT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: traduccion_literal
ALTER TABLE `traduccion_literal` 
CHANGE COLUMN `idioma_id` `idiomaId` smallint(6) NOT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL;

-- Tabla: usuario
ALTER TABLE `usuario` 
CHANGE COLUMN `empresa_id` `empresaId` smallint(6) NOT NULL,
CHANGE COLUMN `rol_id` `rolId` int(10) NOT NULL,
CHANGE COLUMN `idioma_id` `idiomaId` smallint(6) NOT NULL,
CHANGE COLUMN `activo_sn` `activoSn` varchar(1) DEFAULT NULL COMMENT '(S)i, (N)o',
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(11) DEFAULT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(11) DEFAULT NULL,
CHANGE COLUMN `fecha_inactivo` `fechaInactivo` datetime DEFAULT NULL,
CHANGE COLUMN `usuario_inactivo` `usuarioInactivo` int(10) DEFAULT NULL;

-- Tabla: usuario_credenciales
ALTER TABLE `usuario_credenciales` 
CHANGE COLUMN `usuario_id` `usuarioId` int(11) NOT NULL;

-- Tabla: usuario_password_historico
ALTER TABLE `usuario_password_historico` 
CHANGE COLUMN `usuario_id` `usuarioId` int(10) NOT NULL,
CHANGE COLUMN `fecha_inicio` `fechaInicio` datetime DEFAULT NULL,
CHANGE COLUMN `fecha_fin` `fechaFin` datetime DEFAULT NULL,
CHANGE COLUMN `fecha_creacion` `fechaCreacion` timestamp NULL DEFAULT current_timestamp(),
CHANGE COLUMN `fecha_modificacion` `fechaModificacion` timestamp NULL DEFAULT NULL,
CHANGE COLUMN `usuario_creacion` `usuarioCreacion` int(10) NOT NULL,
CHANGE COLUMN `usuario_modificacion` `usuarioModificacion` int(10) DEFAULT NULL;

-- Actualizar foreign keys que referencian las columnas renombradas
-- Nota: MySQL automáticamente actualiza las foreign keys cuando se renombran las columnas referenciadas

-- Actualizar índices únicos que usan las columnas renombradas
-- Eliminar constraint únicos existentes y recrearlos con los nuevos nombres
ALTER TABLE `catalogo_producto` DROP INDEX `uk_catalogo_producto`;
ALTER TABLE `catalogo_producto` ADD UNIQUE KEY `uk_catalogo_producto` (`catalogoId`,`productoId`);

ALTER TABLE `categoria_grupo_atributo` DROP INDEX `uk_categoria_grupo_atributo`;
ALTER TABLE `categoria_grupo_atributo` ADD UNIQUE KEY `uk_categoria_grupo_atributo` (`categoriaId`,`grupoAtributoId`);

ALTER TABLE `configuracion_diseno` DROP INDEX `uk_configuracion_diseno_empresa`;
ALTER TABLE `configuracion_diseno` ADD UNIQUE KEY `uk_configuracion_diseno_empresa` (`empresaId`);

ALTER TABLE `parametro_global` DROP INDEX `uk_parametro_global_clave`;
ALTER TABLE `parametro_global` ADD UNIQUE KEY `uk_parametro_global_clave` (`clave`);

ALTER TABLE `producto` DROP INDEX `uk_producto_sku`;
ALTER TABLE `producto` ADD UNIQUE KEY `uk_producto_sku` (`empresaId`,`sku`);

ALTER TABLE `producto_atributo` DROP INDEX `uk_producto_atributo`;
ALTER TABLE `producto_atributo` ADD UNIQUE KEY `uk_producto_atributo` (`productoId`,`atributoId`);

ALTER TABLE `producto_campo_dinamico` DROP INDEX `uk_producto_campo_dinamico`;
ALTER TABLE `producto_campo_dinamico` ADD UNIQUE KEY `uk_producto_campo_dinamico` (`productoId`,`campoDinamicoId`);

ALTER TABLE `producto_icono` DROP INDEX `uk_producto_icono`;
ALTER TABLE `producto_icono` ADD UNIQUE KEY `uk_producto_icono` (`productoId`,`iconoId`);

ALTER TABLE `producto_marketplace` DROP INDEX `uk_producto_marketplace`;
ALTER TABLE `producto_marketplace` ADD UNIQUE KEY `uk_producto_marketplace` (`productoId`,`marketplaceId`);

ALTER TABLE `traduccion_contenido` DROP INDEX `uk_traduccion_contenido`;
ALTER TABLE `traduccion_contenido` ADD UNIQUE KEY `uk_traduccion_contenido` (`tablaReferencia`,`idReferencia`,`campo`,`idiomaId`);

ALTER TABLE `traduccion_literal` DROP INDEX `uk_traduccion_literal`;
ALTER TABLE `traduccion_literal` ADD UNIQUE KEY `uk_traduccion_literal` (`clave`,`idiomaId`);

-- Actualizar índices de foreign keys y otros índices
-- MySQL mantiene automáticamente la mayoría de los índices, pero algunos podrían necesitar actualización manual

-- Script completado: Todas las columnas han sido convertidas de snake_case a camelCase
-- Recuerda ejecutar este script en un entorno de prueba antes de aplicarlo en producción
-- También considera hacer backup de la base de datos antes de ejecutar estos cambios