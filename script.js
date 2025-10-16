document.querySelector("#on").addEventListener("click", () => {
  const img =document.getElementById("imagem")
if (img.src.includes("imagens/lapon.png")) {
  alert("a lampada ja esta acessa")
}else{
  img.src = "imagens/lapon.png";
}
});


document.querySelector("#off").addEventListener("click", () => {
  const img =document.getElementById("imagem")
  if(img.src.includes("imagens/lapoff.png")){
    alert("a lampada ja esta apagada")
  }else{
    img.src="imagens/lapoff.png";
  }
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
const titulosite = document.querySelector("#titulo")
const nome = document.querySelector("#buu");
const secretImg = document.querySelector("#secret");
const secretBtn = document.querySelector(".secret");
let ameaca=document.getElementById("odio");
secretBtn.addEventListener( "click", ()=>{
  secretImg.src="imagens/image.png";
  secretImg.classList.add("show");
  document.body.classList.add("olavo-mode");
  titulosite.textContent="Seriedade";
  nome.textContent="Site do Olavo";
  ameaca.textContent="Agora vc vai Morre, por ter visto esta atrocidade! Muehehehhehehehaaaaaaaaaaaaaaaaaaaaaau";
})
