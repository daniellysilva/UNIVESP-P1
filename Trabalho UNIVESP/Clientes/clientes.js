class Cliente {

    constructor() {
        this.id = 1;
        this.arrayClientes = [];
    }

    adicionar() {
      let cliente =  this.lerDados();

     if (this.validaCampo(cliente)){
        alert('salvar');
     }
        console.log(cliente);
    }

    lerDados() {
        let cliente = {}

        cliente.id = this.id;
        cliente.nome = document.getElementById('nome').value;

        return;
    }

    validaCampo(cliente){
        let  msg = '', nome= String;

        if (cliente.nome == ''){
            msg +- '- Informe o nome completo \n';
        }

        if (msg != ''){
           alert(msg);
           return false
        }

        return true;
    }
}

var cliente = new Cliente();