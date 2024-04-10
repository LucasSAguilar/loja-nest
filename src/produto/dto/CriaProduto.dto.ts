import { IsNotEmpty } from 'class-validator';

export class CriaUsuarioDTO {

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  tipo: string;
}
