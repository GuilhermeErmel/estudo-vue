export default {
    props: {
      pedido: {
        type: Object,
        required: true,
      },
    },
    template: `
      <div>Itens no carrinho</div>
      <ul>
        <li v-for="produto in pedido.produtosSelecionados">
          {{ produto.nome }}
        </li>
        <li v-if="pedido.produtosSelecionados.length > 0"
            style="list-style: none; font-weight: bold"
        >
          Total R$ {{ pedido.obterTotal() }}
        </li>
      </ul>
    `
}