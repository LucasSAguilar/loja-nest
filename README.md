<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## NestJS - API Cadastro de usuário


Faça o clone do repositório:
```bash
$ git clone https://github.com/LucasSAguilar/loja-nest.git
```
Faça as intalações
```bash
$ npm install
```

## Inicie a API

```bash
# Desenvolvimento:
$ npm run start

# Comum:
$ npm run start:dev
```
Teste: GET, POST, PUT, DELETE.

O formato esperado é algo como:
```bash
{
    "nome": "Lucas",
    "email": "lucas@email.com",
    "senha": "12345adsasdasd67" 
}
```
Nenhum pode ser uma string vazia e o mínimo aceitado para a senha são 6 caracteres

#Rotas

As rotas são:

GET:
  http://localhost:3000/usuarios
  Colote todos os usuarios

POST:
  http://localhost:3000/usuarios
  *Necessário inserir o objeto com os novos dados

DELETE:
  http://localhost:3000/usuarios/id_da_pessoa

PUT:
  http://localhost:3000/usuarios/id_da_pessoa
  *Necessário inserir o objeto com os novos dados
