import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.cotroller";

@Module({
    controllers: [UsuarioController]
})


export class UsuarioModule {}