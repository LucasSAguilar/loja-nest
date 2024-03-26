import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.cotroller';

@Module({
  imports: [],
  controllers: [UsuarioController]
})
export class AppModule {}
