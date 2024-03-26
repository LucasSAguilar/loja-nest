export class UsuarioRepository {
  private listaUsuarios = [];

  salvar(usuario: object) {
    this.listaUsuarios.push(usuario);
  }

  listar() {
    return this.listaUsuarios;
  }
}
