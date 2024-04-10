import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';
import { CriaUsuarioDTO } from './dto/CriaProduto.dto';
import { v4 as uuid } from 'uuid';
import { EditaUsuarioDTO } from './dto/EditaProduto.sto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  inserirProduto(@Body() produtoRecebido: CriaUsuarioDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.id = uuid();
    produtoEntity.nome = produtoRecebido.nome;
    produtoEntity.tipo = produtoRecebido.tipo;

    this.produtoRepository.salvar(produtoEntity);
    return {
      message: 'Inserido com sucesso!',
      produto: produtoEntity,
    };
  }

  @Get()
  coletarProdutos() {
    const produtos = this.produtoRepository.coletar();
    return produtos;
  }

  @Put('/:id')
  EditarProdutos(@Param('id') id: string, @Body() novosDados: EditaUsuarioDTO) {
    const produtoEditado = this.produtoRepository.atualizar(id, novosDados);
    return {
      message: 'Atualizado com sucesso',
      produto: produtoEditado,
    };
  }

  @Delete('/:id')
  excluiProduto(@Param('id') id: string) {
    const produtoRemovido = this.produtoRepository.deletar(id);
    return {
      usuario: produtoRemovido,
      message: 'Removido com sucesso!',
    };
  }
}
