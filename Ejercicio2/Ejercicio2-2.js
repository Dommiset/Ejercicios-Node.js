const os = require("os");

function b_A_mb(b) {
  return b / (1024 * 1024) + " MB";
}

console.log("Espacio libre inicial:", b_A_mb(os.freemem()));

let vector = [];
for (let i = 0; i < 1000000; i++) {
  vector.push(i);
}

console.log("Espacio libre después de crear el vector:", b_A_mb(os.freemem()));
