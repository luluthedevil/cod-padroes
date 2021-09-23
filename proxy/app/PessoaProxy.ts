import ListaDePessoas from './ListaDePessoas.js'

class PessoaProxy{

    private pessoa: ListaDePessoas = new ListaDePessoas();
    private senhaAdmin: number = 654123;

    adicionarPessoaProxy(nome: string, cpf: number, senha: number){
        if(this.senhaAdmin != senha){
            return false;
        } else{
            this.pessoa.adicionarPessoa(nome,cpf);
            return true;
        }
    }
   listarPessoas(senha: number){
        if(this.senhaAdmin != senha){
            return false;
        } else{
            this.pessoa.listarPessoas();
            return true;
        }
    }

    consultarPessoa(cpf: number, senha: number){
        if(this.senhaAdmin != senha){
            return false;
        } else{
            this.pessoa.consultarPessoa(cpf);
        }
    }

    deletarPessoa(cpf: number, senha: number){
        if(this.senhaAdmin != senha){
            return false;
        } else{
            this.pessoa.deletarPessoa(cpf);
        }
    }
}

export default PessoaProxy;