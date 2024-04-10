import { IsNotEmpty, IsOptional } from 'class-validator';

export class EditaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  @IsOptional()
  nome: string;

  @IsNotEmpty({ message: 'O tipo não pode estar vazio' })
  @IsOptional()
  tipo: string;
}
