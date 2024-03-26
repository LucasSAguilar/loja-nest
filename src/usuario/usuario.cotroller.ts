import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuariosCadastrados = new UsuarioRepository();

  @Post()
  novoUsuario(@Body() usuarioEnviado) {
    this.usuariosCadastrados.salvar(usuarioEnviado);
  }

  @Get()
  listarUsuario(){
    return this.usuariosCadastrados.listar();
  }

}
