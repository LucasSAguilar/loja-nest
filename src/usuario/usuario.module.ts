import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.cotroller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailExisteValidator } from "./validacao/email-existe.validator";

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailExisteValidator]
})

export class UsuarioModule {}