document.querySelector("#on").addEventListener("click", () => {
  document.getElementById("imagem").src = "imagens/lapon.png";

});

document.querySelector("#off").addEventListener("click", () => {
  document.getElementById("imagem").src = "imagens/lapoff.png";
});


let tarefas = []
document.querySelector("#botao").addEventListener("click", () => {
  let input = document.getElementById("input");
  value = input.value;
  let mensagem = document.getElementById("mensagem");
  if (value == "") {
    mensagem.textContent = "Ocorreu um erro, escreva sua tarefa!";
    return;
  }
  mensagem.textContent = "Comentario adicionado!";
  tarefas.push(value)
  renderizarli()

  input.value = "";
})

function renderizarli() {
  let Paitarefas = document.getElementById("paidosli");
  Paitarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let tarefa = document.createElement("li");
    tarefa.textContent = tarefas[i];
    Paitarefas.appendChild(tarefa);
  }
}

