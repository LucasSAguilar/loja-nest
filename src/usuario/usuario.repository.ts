export class UsuarioRepository {
  private usuariosCadastrados = [];

  salvar(usuario: object) {
    this.usuariosCadastrados.push(usuario);
  }

  coletar() {
    return this.usuariosCadastrados;
  }
}
