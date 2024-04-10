import { ProdutoEntity } from './produto.entity';

export class ProdutoRepository {
  private produtosCadastrados: ProdutoEntity[] = [];

  salvar(produto: ProdutoEntity) {
    this.produtosCadastrados.push(produto);
  }

  coletar() {
    return this.produtosCadastrados;
  }

  buscaPorId(id: string) {
    const possivelProduto = this.produtosCadastrados.find(
      (produtoSalvo) => produtoSalvo.id === id,
    );
    if (!possivelProduto) {
      throw new Error('Produto não existe');
    }
    return possivelProduto;
  }

  atualizar(id: string, dadosProduto: Partial<ProdutoEntity>) {
    const produto = this.buscaPorId(id);

    Object.entries(dadosProduto).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      produto[chave] = valor;
    });
    return produto;
  }

  deletar(id: string) {
    const produto = this.buscaPorId(id);

    this.produtosCadastrados = this.produtosCadastrados.filter(
      (produtoCadastrado) => produtoCadastrado.id !== id,
    );

    return produto;
  }
}
