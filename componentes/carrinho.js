export default {
    props: {
      pedido: {
        type: Object,
        required: true,
      },
    },
    methods: {
      removerProduto(produto) {
        console.log(produto);
      }
    },
    template: `
      <div class="card my-5">
          <div class="card-header text-center">
              Itens no carrinho
          </div>
          <ul id="carrinhoDeCompras" class="list-group list-group-flush">
            <template v-if="pedido.produtosSelecionados.length > 0">
              <li v-for="produto in pedido.produtosSelecionados"
                  class="list-group-item d-flex align-items-center justify-content-between"
              >
                {{ produto.nome }} (R$ {{ produto.preco }})
                <button class="btn btn-danger btn-sm"
                        @click="removerProduto(produto)"
                >
                  Remover
                </button>
              </li>
            </template>
            <li v-else>Nenhum item adicionado ao carrinho</li>
          </ul>
          <div class="card-footer text-end">
              Total R$ {{ pedido.obterTotal() }}
          </div>
      </div>
    `
}