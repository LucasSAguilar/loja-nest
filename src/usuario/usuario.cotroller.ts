import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {

  constructor(private usuarioRepository: UsuarioRepository){}

  @Post()
  novoUsuario(@Body() usuarioEnviado) {
    this.usuarioRepository.salvar(usuarioEnviado);
  }

  @Get()
  listarUsuario(){
    return this.usuarioRepository.listar();
  }

}
