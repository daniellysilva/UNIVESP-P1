document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
    var nome = document.getElementById('inputNome').value;
    var cidade = document.getElementById('selectSeguro').value;
    adicionarNaTabela(nome, cidade);
    document.getElementById('formulario').reset(); // Limpa o formulário após o envio
});

function adicionarNaTabela(nome, cidade) {
    var tbody = document.getElementById('tbody');
    var novaLinha = tbody.insertRow();
    var colunaNome = novaLinha.insertCell(0);
    var colunaCidade = novaLinha.insertCell(1);
    colunaNome.textContent = nome;
    colunaCidade.textContent = cidade;
}
