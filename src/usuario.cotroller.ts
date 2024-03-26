import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    private listaUsuarios = new UsuarioRepository;

    @Post()
    criarUsuario(@Body() usuarioRecebido){
        this.listaUsuarios.salvar(usuarioRecebido)

        return {usuario: usuarioRecebido, lista: this.listaUsuarios}
    }

}