const pi = 3.14;

function Suma(n1, n2) {
  return n1 + n2;
}

function Resta(n1, n2) {
  return n1 - n2;
}

function Dividir(n1, n2) {
  if (n2 == 0) {
    ErrorDivision();
  } else {
    return n1 / n2;
  }
}

function ErrorDivision() {
  console.log("No se puede dividir por cero");
}

export { Suma, Resta, Dividir, pi };
