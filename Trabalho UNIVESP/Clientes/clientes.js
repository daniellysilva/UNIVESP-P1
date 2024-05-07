class Cliente {

    constructor() {
        this.id = 1;
        this.arrayClientes = [];
    }

    adicionar() {
      let cliente =  this.lerDados();

     if (this.validaCampos(cliente)){
        alert('salvar')
     }
        console.log(cliente);
    }

    lerDados() {
        let cliente = {}

        cliente.id = this.id;
        cliente.nomeCompleto = document.getElementById('nomecompleto').value;
        cliente.andamento = document.getElementById('andamento').value;

        return
    }

    validaCampos(cliente){
        let  msg = '';

        if (cliente.nomeCompleto == ''){
            msg +- '- Informe o nome completo \n';
        }

        if (cliente.andamento == ''){
            msg +- '- Informe o andamento \n';
        }

        if (msg != ''){
           alert(msg);
           return false
        }

        return true;
    }
}

var cliente = new Cliente();