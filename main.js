const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src ="./images/reprovado.png" alt="Eomji decepcionado" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultadoAprovado">Aprovado</span>'
const spanReprovado = '<span class="resultadoReprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima: "))

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividade.includes(inputNomeAtividade.value)) {
        alert (`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
    } else {
        atividade.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>';
        linha +=`<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal;
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}       

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return  somaDasNotas / notas.length;

}  