export default {
    props: {
      produto: {
        type: Object,
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
        <div class="card" style="width: 18rem;">
            <img :src="'./../imagens/' + produto.imagem"
                class="card-img-top"
                style="height: 250px; width: auto; margin: auto;"
                :alt="produto.nome"
            >
            <div class="card-body border-top">
                <h5 class="card-title">R$ {{ produto.preco }}</h5>
                <p class="card-text">
                    {{ produto.nome }}
                </p>
                <a
                    class="btn btn-primary float-end"
                    @click="selecionarProduto(produto)"
                >
                    Adicionar ao carrinho
                </a>
            </div>
        </div>
    `
}