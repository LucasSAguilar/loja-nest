import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-existe.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({message: "O nome não pode estar vazio"})
  nome: string;

  @IsEmail(undefined, {message: "Precisa estar no formato de e-mail"})
  @EmailEhUnico({message: "Existe um usuário com esse e-mail"})
  email: string;

  @MinLength(6, {message: "O minímo esperado são 6 caracteres"})
  senha: string;
}
