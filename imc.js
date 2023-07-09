// Função para calcular o IMC
function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

// Função para determinar a categoria com base no IMC
function determinarCategoria(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade Grau I";
  } else if (imc >= 35 && imc < 40) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
}

// Exemplo de uso
var peso = 70; // Peso em kg
var altura = 1.75; // Altura em metros

var imc = calcularIMC(peso, altura);
var categoria = determinarCategoria(imc);

console.log("Seu IMC é: " + imc);
console.log("Categoria: " + categoria);
