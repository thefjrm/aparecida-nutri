const pacientes = document.querySelectorAll(".paciente");

function calculaIMC(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];
  const tdPeso = paciente.querySelector(".info-peso");
  const peso = tdPeso.textContent;

  const tdAltura = paciente.querySelector(".info-altura");
  const altura = tdAltura.textContent;

  const tdImc = paciente.querySelector(".info-imc");

  let alturaEhValida = validaAltura(altura);
  let pesoEhValido = validaPeso(peso);

  if (!pesoEhValido) {
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    let imc = calculaIMC(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Peso e altura inválidos";
  }
}
