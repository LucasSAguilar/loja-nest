import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.cotroller';
import { UsuarioRepository } from './usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}
