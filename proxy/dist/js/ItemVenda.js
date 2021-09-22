class ItemVenda {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
    getProduto() {
        return this.produto;
    }
    getQuantidade() {
        return this.quantidade;
    }
    subTotal() {
        return (this.quantidade * this.produto.getValor());
    }
}
export default ItemVenda;
