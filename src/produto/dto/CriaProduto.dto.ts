import { IsNotEmpty } from 'class-validator';

export class CriaUsuarioDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  tipo: string;
}
