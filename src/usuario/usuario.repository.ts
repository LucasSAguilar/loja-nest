export class UsuarioRepository {
  private usuariosCadastrados = [];

  salvar(usuario: object) {
    this.usuariosCadastrados.push(usuario);
  }

  coletar() {
    return this.usuariosCadastrados;
  }

  emailExiste(email: string) {
    const possivelUsuario = this.usuariosCadastrados.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario;
  }
}
