import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-existe.validator';

export class EditaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'Precisa estar no formato de e-mail' })
  @EmailEhUnico({ message: 'Existe um usuário com esse e-mail' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'O minímo esperado são 6 caracteres' })
  @IsOptional()
  senha: string;
}
