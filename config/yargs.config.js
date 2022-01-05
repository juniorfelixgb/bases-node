const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: 'Ingresa la base a utilizar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description: 'Lista la tabla de multiplicar'
  })
  .option('h', {
      alias: 'hasta',
      type: 'number',
      default: 10,
      description: 'Limite de la tabla a multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
