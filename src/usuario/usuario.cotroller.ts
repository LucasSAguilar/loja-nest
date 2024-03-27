import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { v4 as uuid } from 'uuid';
import { UsuarioEntity } from './usuario.entity';
import { ListarUsuarioDTO } from './dto/ListarUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  inserirUsuario(@Body() usuarioRecebido) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.id = uuid();
    usuarioEntity.nome = usuarioRecebido.nome;
    usuarioEntity.email = usuarioRecebido.email;
    usuarioEntity.senha = usuarioRecebido.senha;

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
}
