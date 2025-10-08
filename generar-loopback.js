#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Lista de modelos para los que quieres generar controladores y repositorios
const modelos = [
  'campoDinamico','catalogo',
'catalogoProducto', 'categoria', 'categoriaGrupoAtributo',
'configuracionDiseno', 'grupoAtributo', 'producto','marca',
'marketplace', 'multimedia', 'notificacion', 'parametroGlobal',
'tarea', 'traduccionContenido', 'traduccionLiteral', 'productoAtributo',
'productoCampoDinamico', 'productoIcono', 'productoMarketplace',
'productoMultimedia', 'logAcceso', 'logExportacion', 'logImportacion',
'logSincronizacion'
  // Añade aquí más modelos según necesites
];

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  yellow: '\x1b[33m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function ejecutarComando(comando, descripcion) {
  try {
    log(`\n${descripcion}...`, 'blue');
    execSync(comando, { stdio: 'inherit' });
    log(`✓ ${descripcion} completado`, 'green');
    return true;
  } catch (error) {
    log(`✗ Error en: ${descripcion}`, 'red');
    log(error.message, 'red');
    return false;
  }
}

function verificarDirectorio() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    log('Error: No se encuentra package.json. Asegúrate de estar en el directorio raíz del proyecto LoopBack.', 'red');
    process.exit(1);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  if (!packageJson.dependencies || !packageJson.dependencies['@loopback/core']) {
    log('Advertencia: No parece ser un proyecto LoopBack.', 'yellow');
  }
}

function generarRepositorio(modelo) {
  const modeloLower = modelo.toLowerCase();
  const comando = `lb4 repository --model ${modelo} --datasource db --repositoryBaseClass DefaultCrudRepository`;
  return ejecutarComando(comando, `Generando repositorio para ${modelo}`);
}

function generarControlador(modelo) {
  const comando = `lb4 controller ${modelo} --type rest --crud --datasource db --model ${modelo} --repositoryClass ${modelo}Repository`;
  return ejecutarComando(comando, `Generando controlador REST para ${modelo}`);
}

function main() {
  log('==============================================', 'blue');
  log('  Generador de Controladores y Repositorios', 'blue');
  log('  para LoopBack 4', 'blue');
  log('==============================================', 'blue');

  // Verificar que estamos en un proyecto LoopBack
  verificarDirectorio();

  log(`\nModelos a procesar: ${modelos.join(', ')}`, 'yellow');
  log(`Total: ${modelos.length} modelos\n`, 'yellow');

  const resultados = {
    exitosos: [],
    fallidos: []
  };

  // Procesar cada modelo
  modelos.forEach((modelo, index) => {
    log(`\n[${index + 1}/${modelos.length}] Procesando: ${modelo}`, 'blue');
    log('─'.repeat(50), 'blue');

    // Generar repositorio
    const repoExito = generarRepositorio(modelo);
    
    // Generar controlador
    const controladorExito = generarControlador(modelo);

    if (repoExito && controladorExito) {
      resultados.exitosos.push(modelo);
    } else {
      resultados.fallidos.push(modelo);
    }
  });

  // Resumen final
  log('\n==============================================', 'blue');
  log('  RESUMEN', 'blue');
  log('==============================================', 'blue');
  
  log(`\n✓ Exitosos: ${resultados.exitosos.length}`, 'green');
  resultados.exitosos.forEach(m => log(`  - ${m}`, 'green'));
  
  if (resultados.fallidos.length > 0) {
    log(`\n✗ Fallidos: ${resultados.fallidos.length}`, 'red');
    resultados.fallidos.forEach(m => log(`  - ${m}`, 'red'));
  }

  log('\n==============================================\n', 'blue');
  
  if (resultados.fallidos.length === 0) {
    log('¡Proceso completado exitosamente! 🎉', 'green');
  } else {
    log('Proceso completado con algunos errores. Revisa los mensajes anteriores.', 'yellow');
  }
}

// Ejecutar el script
main();