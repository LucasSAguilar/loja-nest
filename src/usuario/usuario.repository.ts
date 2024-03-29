import { UsuarioEntity } from './usuario.entity';

export class UsuarioRepository {
  private usuariosCadastrados: UsuarioEntity[] = [];

  salvar(usuario: UsuarioEntity) {
    this.usuariosCadastrados.push(usuario);
    
  }

  coletar() {
    return this.usuariosCadastrados;
  }

  buscaPorId(id: string) {
    const possivelUsuario = this.usuariosCadastrados.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );
    if (!possivelUsuario) {
      throw new Error('Usuário não existe');
    };
    return possivelUsuario
  };

  atualizar(id: string, dadosUsuario: Partial<UsuarioEntity>) {

    const usuario = this.buscaPorId(id)

    Object.entries(dadosUsuario).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      usuario[chave] = valor;
    });
    return usuario;
  };

  deleta(id: string) {
    const usuario = this.buscaPorId(id)

    this.usuariosCadastrados = this.usuariosCadastrados.filter(
      usuarioSalvo => usuarioSalvo.id !== id
    );

    return usuario
  };

  emailExiste(email: string) {
    const possivelUsuario = this.usuariosCadastrados.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario;
  };
};
