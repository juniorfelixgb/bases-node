const { crearMultiplicacion } = require('./helpers/multiplicar.helper');
const { fileManager } = require('./helpers/fileManager.helper');
const argv = require('./config/yargs.config');

console.clear();
const data = crearMultiplicacion(argv.b, argv.h, argv.l);
fileManager(argv.b, data);