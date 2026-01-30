let contador = 1
document.querySelector("#bola1").checked = true

setInterval(function(){
    proxima();
},5000)

function proxima(){
    contador = contador + 1
    if(contador > 2){
        contador = 1
    }
    document.querySelector("#bola" + contador).checked = true
}


let sanduiche = document.querySelector("#sanduiche")

let valor = 0

sanduiche.addEventListener("change",comer)

function comer(){
    let escolha = sanduiche.value

    if(escolha == "Sanduiche1"){
        valor = 0
        valor = valor + 25
    }
     if(escolha == "Sanduiche2"){
        valor = 0
        valor = valor + 30
    }
     if(escolha == "Sanduiche3"){
        valor = 0
        valor = valor + 35
    }
     if(escolha == "Sanduiche4"){
        valor = 0
        valor = valor + 29.50
    }
     if(escolha == "Sanduiche5"){
        valor = 0
        valor = valor + 33.50
    }
     if(escolha == "Sanduiche6"){
        valor = 0
        valor = valor + 40
    }

    document.querySelector("#resposta").innerHTML = `O valor do seu pedido é ${valor}`
}

