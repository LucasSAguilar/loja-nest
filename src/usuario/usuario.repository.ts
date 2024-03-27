import { UsuarioEntity } from "./usuario.entity";

export class UsuarioRepository {
  private usuariosCadastrados: UsuarioEntity[] = [];

  salvar(usuario: UsuarioEntity) {
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
