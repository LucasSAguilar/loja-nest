import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {
  
  constructor(private usuarioRepository: UsuarioRepository){}
  
  @Post()
  inserirUsuario(@Body() usuarioRecebido){
    this.usuarioRepository.salvar(usuarioRecebido);
  }

  @Get()
  coletarUsuarios(){
    return this.usuarioRepository.coletar()
  }
}