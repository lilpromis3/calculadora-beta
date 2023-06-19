var n1 = parseFloat(prompt("Digite um número"));
escreve();

function escreve(){
    var output = document.querySelector("#output");
    output.innerHTML = n1;
}
        
function soma(){
    var n2 = prompt("Digite outro número:");
    n2 = parseFloat(n2);
    n1 = (n1+n2);
    escreve();
}

function subtracao(){
    var n2 = prompt("Digite outro número:");
    n2 = parseFloat(n2);
    n1 = (n1-n2);
    escreve();
}

function multiplicacao(){
    var n2 = prompt("Digite outro número:");
    n2 = parseFloat(n2);
    n1 = (n1*n2);
    escreve();
}

function divisao(){
    var n2 = prompt("Digite outro número:");
    n2 = parseFloat(n2);
    n1 = (n1/n2);
    escreve();
}

function limparVisor(){
    n1 = 0;
    n1 = parseFloat(prompt("Digite um número:"));
    escreve();
}