let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function verificarChute(){
     console.log('Botão foi criado!');
}

function verificarAlerta(){
    alert('Eu amo JS!');
}

function verificarPrompt(){
    let cidade = prompt('Digite o nome da cidade que você visitou:');

    alert(`Estive em ${cidade} e lembrei de você`);
}

function somandoDoisNumeros(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}