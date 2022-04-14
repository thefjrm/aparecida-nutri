const tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", (event) => {
  if (event.target.tagName == "TD") {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
      event.target.parentNode.remove();
    }, 500);
  }
});
