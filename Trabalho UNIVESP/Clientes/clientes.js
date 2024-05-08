document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
    var nome = document.getElementById('inputNome').value;
    console.log('Nome:', nome);
    // Captura outros campos do formulário aqui...

    // Adiciona os dados à tabela
    adicionarNaTabela(nome);

    // Fecha o modal após o envio do formulário
    var modal = new bootstrap.Modal(document.getElementById('modalFormulario'));
    modal.hide();

    // Limpa o formulário após o envio
    document.getElementById('formulario').reset();
});

function adicionarNaTabela(nome) {
    var tbody = document.getElementById('tbody');
    var novaLinha = tbody.insertRow();
    var colunaNome = novaLinha.insertCell(0);
    // Adicione mais colunas conforme necessário
    colunaNome.textContent = nome;
    // Adicione mais dados às colunas conforme necessário

    console.log('Dados adicionados à tabela:', nome);
}
