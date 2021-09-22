import Pessoa from './Pessoa.js';

class PessoaMetodos{

    private listaPessoas: Array<Pessoa> = [];

    adicionarPessoa(nome: string, cpf: number){
        if(this.procurarCPF(cpf) != false){
            return false;
        } else{
            const pessoa = new Pessoa(nome, cpf);
            this.listaPessoas.push(pessoa);
            return true;
        }
    }
    
    listarPessoas(){
        console.log(this.listaPessoas);
        return true;
    }

    consultarPessoa(cpf: number){
        const existe = this.procurarCPF(cpf);
        if(existe === false){
            console.log('Essa pessoa não existe');
            return false;
        } else{
            console.log(this.listaPessoas[existe]);
        }
    }

    deletarPessoa(cpf: number){
        const existe = this.procurarCPF(cpf);
        if(existe === false){
            console.log('Essa pessoa não existe');
            return false;
        } else{
            this.listaPessoas.splice(existe,1);
            return true;
        }
    }

    procurarCPF(cpf: number){
        var x = 0;
        while(x < this.listaPessoas.length){
            if(this.listaPessoas[x].getCPF() === cpf){
                return x;
            }
            x++;
        }
        return false;
    }
}

export default PessoaMetodos;