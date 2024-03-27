import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { v4 as uuid } from 'uuid';
import { UsuarioEntity } from './usuario.entity';
import { ListarUsuarioDTO } from './dto/ListarUsuario.dto';
import { EditaUsuarioDTO } from './dto/EditaUsuario.dto';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  inserirUsuario(@Body() usuarioRecebido: CriaUsuarioDTO) {

    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.id = uuid();
    usuarioEntity.nome = usuarioRecebido.nome;
    usuarioEntity.senha = usuarioRecebido.senha;
    usuarioEntity.email = usuarioRecebido.email;

    
    this.usuarioRepository.salvar(usuarioEntity);

    return {
      usuario: new ListarUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      message: 'Usuário cadastrado com sucesso!',
    };
  }

  @Get()
  coletarUsuarios() {
    const listaUsuarios = this.usuarioRepository.coletar();
    const listaFormatada = listaUsuarios.map(
      (usuario) => new ListarUsuarioDTO(usuario.id, usuario.nome),
    );

    return listaFormatada;
  }

  @Put('/:id')
  editaUsuario(@Param('id') id: string, @Body() novosDados: EditaUsuarioDTO) {
    const usuarioAtualizado = this.usuarioRepository.atualizar(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      message: 'Atualizado com sucesso!',
    };
  }

  @Delete('/:id')
  excluiUsuario(@Param('id') id: string) {
    const usuarioRemovido = this.usuarioRepository.deleta(id);

    return {
      usuario: usuarioRemovido,
      message: 'Removido com sucesso!',
    };
  }
}
