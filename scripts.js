
//variaveis 
let input = document.getElementById("input-principal") // comando para buscar os id no html e atribuir a variavel   
let botão = document.getElementById("botao-adicionar")
let listacompleta = document.getElementById("tarefas")

let arraydetarefas = []    //array que vai guarda os itens das tarefas 



function mostrarnatela(){
      let novalista = ""
      arraydetarefas.forEach(tarefa =>{    //comando para buscar os itens dentro da array 
        novalista = novalista +`
        <li class='item-tarefa'>
            <p>${tarefa}</p>
        </li>
        ` 
      })

       listacompleta.innerHTML = novalista //comando para mandar informaçao para o html 
}

//para pegar os parametros digitados vamos precisar criar um função
function cliqueinobotao(){                      // função que vai enviar os dados da tarefas para dentro da array e dps exibir na tela 
    arraydetarefas.push(input.value)
    mostrarnatela()                             
}



botão.addEventListener("click", cliqueinobotao); //comando para acionar a função 
