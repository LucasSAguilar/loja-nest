import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';
import { GeralModule } from './geral/geral.module';

@Module({
  imports: [UsuarioModule, ProdutoModule, GeralModule],
})
export class AppModule {}
