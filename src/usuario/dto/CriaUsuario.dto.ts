import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({message: "O nome não pode estar vazio"})
  nome: string;

  @IsEmail(undefined, {message: "Precisa estar no formato de e-mail"})
  email: string;

  @MinLength(6, {message: "O minímo esperado são 6 caracteres"})
  senha: string;
}
