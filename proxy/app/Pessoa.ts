class Pessoa{
    private nome: string;
    private cpf: number;

    constructor(nome: string, cpf: number){
        this.nome = nome;
        this.cpf = cpf;
    }

    getNome(){
        return this.nome;
    }

    getCPF(){
        return this.cpf;
    }
}

export default Pessoa;