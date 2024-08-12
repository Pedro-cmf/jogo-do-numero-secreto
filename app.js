let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : `tentativa`;
        let mensagemTentativas = `Você acertou o numero com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('iniciar').setAttribute('disabled',true)
    }else if(chute < numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é maior');
    }else{
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }
    tentativas ++;
    limparCampo();
}

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
        
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('iniciar').removeAttribute('disabled');
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo ao jogo');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
