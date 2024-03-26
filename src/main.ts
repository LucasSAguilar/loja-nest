import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, 
      forbidNonWhitelisted: true, 
    }),
  );

  /* 
  whitelist: true: Imagine que você tem uma lista de convidados para o evento. Quando alguém chega, você verifica se o nome deles está na lista. Se estiver, você permite que eles entrem sem problemas. No entanto, se o nome não estiver na lista, você não os deixa entrar.
  forbidNonWhitelisted: true: Além de verificar se o nome da pessoa está na lista de convidados, você também está observando atentamente para garantir que ninguém tente entrar usando um nome que não está na lista. Se alguém tenta se esgueirar sem ser detectado, você os pega imediatamente e os impede de entrar, mesmo que saibam o nome de alguém na lista. 
  */

  await app.listen(3000);
}
bootstrap();
