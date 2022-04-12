const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];
  const tdPeso = paciente.querySelector(".info-peso");
  const peso = tdPeso.textContent;

  const tdAltura = paciente.querySelector(".info-altura");
  const altura = tdAltura.textContent;

  const tdImc = paciente.querySelector(".info-imc");

  let alturaEhValida = true;
  let pesoEhValido = true;

  if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3) {
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    const imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  } else {
    tdImc.textContent = "Peso e altura inválidos";
  }
}

const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  const form = document.querySelector("#form-adiciona");
  const nome = form.nome.value;
  const peso = form.peso.value;
  const altura = form.altura.value;
  const gordura = form.gordura.value;

  const pacienteTr = document.createElement("tr");
  const nomeTd = document.createElement("td");
  const pesoTd = document.createElement("td");
  const alturaTd = document.createElement("td");
  const gorduraTd = document.createElement("td");
  const imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  const tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});
