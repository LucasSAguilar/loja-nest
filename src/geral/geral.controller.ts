import { Controller, Get } from '@nestjs/common';

@Controller()
export class Geral {
  @Get('/hello')
  public retornarHello(): string {
    return 'Olá, mundo!';
  }
}
