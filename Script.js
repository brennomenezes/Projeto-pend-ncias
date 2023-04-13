//SELECAO DE ELEMENTOS

const formulario = document.querySelector('#formulario')
const input = document.querySelector('#input')
const editarFormulario = document.querySelector('#editar-formulario')
const editaInput = document.querySelector('#editar-input')
const cancelarEdicao = document.querySelector('#cancelar-edicao')
const toolbar = document.querySelector('#toolbar')
const pesquisa = document.querySelector('#pesquisa')
const filtrar = document.querySelector('#filtrar')
const tarefasLista = document.querySelector('#tarefas-lista')
const listas = document.querySelector('#listas')


//FUNCOES

function salvarTarefa(texto){
    const tarefas = document.createElement("div")
    tarefas.classList.add("tarefas")

    const tarefasTitulo = document.createElement("h3")
    tarefasTitulo.innerText = texto
    tarefas.appendChild(tarefasTitulo)

    const botaoFecha = document.createElement("button")
    botaoFecha.classList.add("finalizar-tarefa")
    botaoFecha.innerHTML = '<i class="fa-solid fa-check"></i>';
    tarefas.appendChild(botaoFecha)

    const botaoEditar = document.createElement("button")
    botaoEditar.classList.add("editar-tarefa")
    botaoEditar.innerHTML = '<i class="fa-solid fa-pen"></i>';
    tarefas.appendChild(botaoEditar)

    const botaoDeletar = document.createElement("button")
    botaoDeletar.classList.add("remover-tarefa")
    botaoDeletar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    tarefas.appendChild(botaoDeletar)

    tarefasLista.appendChild(tarefas)

    input.value = "";

}

toggleForms = () =>{
    editarFormulario.classList.toggle('hide')
    formulario.classList.toggle('hide')
    tarefasLista.classList.toggle('hide')

}

//EVENTOS

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

   const valorInput = input.value;
   
   if(input.value){
        salvarTarefa(valorInput)
   }
})

editarFormulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    const valorInput = input.value;

      if(input.value){
        salvarTarefa(valorInput)
   }
})





document.addEventListener("click", (e)=>{
    const eventoTarget = e.target
    const parentePai = eventoTarget.closest("div")

    if(eventoTarget.classList.contains("finalizar-tarefa")){
        parentePai.classList.toggle("done")
    }

    if(eventoTarget.classList.contains("remover-tarefa")){
        parentePai.remove()
    }

    if(eventoTarget.classList.contains("editar-tarefa")){
        toggleForms();
    }
})



cancelarEdicao.addEventListener('click', (e)=>{
    toggleForms()
})



