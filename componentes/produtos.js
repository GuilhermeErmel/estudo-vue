import Produto from './../componentes/produto.js'

export default {
    props: {
      produtos: {
        type: Array,
        required: true,
      },
    },
    components: { Produto },
    emits: [
      'selecionar-produto'
    ],
    methods: {
      selecionarProduto(produto) {
        this.$emit('selecionar-produto', produto);
      }
    },
    template: `
      <div id="listaDeProdutos" class="d-flex justify-content-around p-5">
        <Produto v-for="produto in produtos"
          :produto="produto"
          @selecionar-produto="selecionarProduto(produto)"
        />
      </div>
    `
}