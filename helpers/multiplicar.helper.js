const colors = require('colors');
const crearMultiplicacion = (base = 5, hasta = 10, listar = false) => {
  let data = "";
  for (let i = 1; i <= hasta; i++) {
    data += `${base} ${colors.blue("X")} ${i} ${colors.blue("=")} ${base * i} \n`;
  }
  if (listar) {
    console.log(colors.blue("================================="));
    console.log(`${colors.green('TABLA DEL:')} ${base}`);
    console.log(colors.blue("================================="));
    console.log(data);
  }
  return data;
};

module.exports = {
  crearMultiplicacion,
};
