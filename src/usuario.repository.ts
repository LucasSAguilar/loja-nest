export class UsuarioRepository {

    private listaUsuarios = [];

    async salvar(usuario: object){
        this.listaUsuarios.push(usuario)
    }

}