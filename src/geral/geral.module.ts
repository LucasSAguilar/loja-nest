import { Module } from '@nestjs/common';
import { Geral } from './geral.controller';

@Module({
  controllers: [Geral],
})
export class GeralModule {}
