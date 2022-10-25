const input = document.querySelector("input");

const button = document.querySelector("button")

const resultado = document.querySelector("[data-resultado]")

function sorteia() {
    return Math.round(Math.random()*10);
}

function sorteiaNumero(quantidade) {

    var segredos = [];
    var n = 1;

    while(n <= quantidade) {
        var achou = false;
        var numeroAleatorio = sorteia();

        for(var x = 0; x <= segredos.length; x++) {
            if(segredos[x] == numeroAleatorio){
                achou = true;
                break;
            }
        }
        if(achou == false) {
            segredos.push(numeroAleatorio);
            n++
        }
    }
    return segredos
}

var segredo = sorteiaNumero(1);

function verificar() {

    var achou = false;

    for(var x = 0; x <= segredo.length; x++) {
        if(input.value == segredo[x]){
            resultado.innerHTML = "Você acertou!";
            achou = true;
            break;
        }
    }
    if(achou == false) {
        resultado.innerHTML = "Errou!";
    }
    input.value = "";
    input.focus();
}

button.onclick = verificar;