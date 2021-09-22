import Pessoa from './Pessoa.js';
class PessoaProxy {
    constructor() {
        this.senhaAdmin = 654123;
        this.listaPessoas = [];
    }
    adicionarPessoa(nome, cpf, senha) {
        if (this.senhaAdmin != senha || this.procurarCPF(cpf) != false) {
            return false;
        }
        else {
            const pessoa = new Pessoa(nome, cpf);
            this.listaPessoas.push(pessoa);
            return true;
        }
    }
    listarPessoas(senha) {
        if (this.senhaAdmin != senha) {
            return false;
        }
        else {
            console.log(this.listaPessoas);
            return true;
        }
    }
    consultarPessoa(cpf, senha) {
        if (this.senhaAdmin != senha) {
            return false;
        }
        else {
            const existe = this.procurarCPF(cpf);
            if (existe === false) {
                console.log('Essa pessoa não existe');
                return false;
            }
            else {
                console.log(this.listaPessoas[existe]);
            }
        }
    }
    deletarPessoa(cpf, senha) {
        if (this.senhaAdmin != senha) {
            return false;
        }
        else {
            const existe = this.procurarCPF(cpf);
            if (existe === false) {
                console.log('Essa pessoa não existe');
                return false;
            }
            else {
                this.listaPessoas.splice(existe, 1);
                return true;
            }
        }
    }
    procurarCPF(cpf) {
        var x = 0;
        while (x < this.listaPessoas.length) {
            if (this.listaPessoas[x].getCPF() === cpf) {
                return x;
            }
            x++;
        }
        return false;
    }
}
export default PessoaProxy;
