import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';
import { CriaUsuarioDTO } from './dto/CriaProduto.dto';
import { v4 as uuid } from 'uuid';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  inserirProduto(@Body() produtoRecebido: CriaUsuarioDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.id = uuid()
    produtoEntity.nome = produtoRecebido.nome;
    produtoEntity.tipo = produtoRecebido.tipo;


    this.produtoRepository.salvar(produtoEntity);
  }

  @Get()
  coletarProdutos() {
    const produtos = this.produtoRepository.coletar();
    return produtos;
  }
}
