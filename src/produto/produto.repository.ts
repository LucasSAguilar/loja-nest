import { ProdutoEntity } from './produto.entity';

export class ProdutoRepository {
  private produtosCadastrados: ProdutoEntity[] = [];

  salvar(produto: ProdutoEntity) {
    this.produtosCadastrados.push(produto);
  }

  coletar(){
    return this.produtosCadastrados
  }

}
