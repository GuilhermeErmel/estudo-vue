import Carrinho from './componentes/carrinho.js'
import Produtos from './componentes/produtos.js'
import { Pedido } from "./modelos/pedido.js"
import { Produto } from "./modelos/produto.js"

export default {
    data() {
      return {
        pedido: new Pedido(),
        produtos: [
          new Produto('Moletom', 149.90),
          new Produto('Jaqueta', 199.90),
        ]
      }
    },
    methods: {
      adicionarAoPedido(produto) {
        this.pedido.adicionarProduto(produto);
      }
    },
    components: { Carrinho, Produtos },
    template: `
        <Carrinho
          :pedido="pedido"
        />
        <Produtos
          :produtos="produtos"
          @selecionar-produto="adicionarAoPedido"
        />
    `
}