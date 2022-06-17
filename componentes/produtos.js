export default {
    props: {
      produtos: {
        type: Array,
        required: true,
      },
    },
    emits: [
      'selecionar-produto'
    ],
    methods: {
      selecionarProduto(produto) {
        this.$emit('selecionar-produto', produto);
      }
    },
    template: `
      <div>Produtos</div>
      <ul>
        <li v-for="produto in produtos"
            @click="selecionarProduto(produto)"
        >
          {{ produto.nome }}
        </li>
      </ul>
    `
}