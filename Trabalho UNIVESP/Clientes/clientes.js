document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
    var celular = document.getElementById('celular').value;
    var tiposSeguro = document.querySelectorAll('input[name="tiposeguro"]:checked');
    var fase = document.getElementById('selectSeguro').value;
    var dataInicio = document.getElementById('datainicio').value;

    // Formata os tipos de seguro selecionados em uma string
    var tiposSeguroArray = Array.from(tiposSeguro).map(seguro => seguro.value).join(', ');

    // Cria uma nova linha na tabela com os dados do formulário
    adicionarNaTabela(celular, tiposSeguroArray, fase, dataInicio);

    // Limpa o formulário após o envio
    document.getElementById('formulario').reset();
});

function adicionarNaTabela(celular, tiposSeguro, fase, dataInicio) {
    var tbody = document.getElementById('tbody');
    var novaLinha = tbody.insertRow();
    var colunaCelular = novaLinha.insertCell(0);
    var colunaTiposSeguro = novaLinha.insertCell(1);
    var colunaDocumentacao = novaLinha.insertCell(2);
    var colunaFase = novaLinha.insertCell(3);
    var colunaDataInicio = novaLinha.insertCell(4);
    colunaCelular.textContent = celular;
    colunaTiposSeguro.textContent = tiposSeguro;
    colunaDocumentacao.textContent = documentacao.length > 0 ? 'Anexos: ' + documentacao.length : 'Nenhum';
    colunaFase.textContent = fase;
    colunaDataInicio.textContent = dataInicio;
}

