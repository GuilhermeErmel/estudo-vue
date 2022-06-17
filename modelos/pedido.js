export class Pedido {
    produtosSelecionados = [];

    adicionarProduto(produto) {
        this.produtosSelecionados.push(produto);
    }

    obterTotal() {
        return this.produtosSelecionados.reduce((total, p) => total + p.preco, 0).toFixed(2);
    }
}