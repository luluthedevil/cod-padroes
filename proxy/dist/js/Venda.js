import ItemVenda from './ItemVenda.js';
class Venda {
    //private cupomDesconto: number;
    //private pagamento: Pagamento;
    constructor() {
        this.listaItemVenda = [];
    }
    adicionar(quantidade, produto) {
        const itemVenda = new ItemVenda(produto, quantidade);
        if (!this.listaItemVenda.find(item => item.getProduto().getDescricao() === itemVenda.getProduto().getDescricao())) {
            this.listaItemVenda.push(itemVenda);
        }
    }
    valorTotal() {
        var soma = 0;
        this.listaItemVenda.forEach(item => {
            soma = soma + item.subTotal();
        });
        return soma;
    }
}
export default Venda;
