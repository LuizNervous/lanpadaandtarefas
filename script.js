document.querySelector("#on").addEventListener("click", () => {
  document.getElementById("imagem").src = "imagens/lapon.png";

});

document.querySelector("#off").addEventListener("click", () => {
  document.getElementById("imagem").src = "imagens/lapoff.png";
});



document.querySelector("#botao").addEventListener("click", () => {
  let input = document.getElementById("input");
  value = input.value;
  let mensagem = document.getElementById("mensagem");
  if (value == "") {
    mensagem.textContent = "Ocorreu um erro, escreva sua tarefa!";
    return;
  }
  mensagem.textContent = "Comentario adicionado!";

  let Paitarefas= document.getElementById("paidosli");
  let tarefa = document.createElement("li");

  Paitarefas.appendChild(tarefa);
  tarefa.textContent = value;


  input.value = "";
})

