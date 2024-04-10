import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';
import { CriaUsuarioDTO } from './dto/CriaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  inserirProduto(@Body() produtoRecebido: CriaUsuarioDTO) {
    this.produtoRepository.salvar(produtoRecebido)
  }

  @Get()
  coletarProdutos() {
    const produtos = this.produtoRepository.coletar()
    return produtos;
  }
}
