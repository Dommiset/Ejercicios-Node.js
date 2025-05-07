const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa un nombre: ", (nombre) => {
  nombre = nombre.trim().toLowerCase();
  const esElegante = nombre.startsWith("a") && nombre.endsWith("a");
  console.log(esElegante);
  rl.close();
});
