# Projeto individual módulo 3 - Api Imobiliária

Uma api feita com json-server e cors, que simula uma imobiliária

### Versão
1.0.0

## Utilizando

- Clone esse repositório para um diretório no seu computador
```bash
$ git clone https://github.com/vlwgaby/api-imobiliaria.git
```

- Abra o projeto na IDE de sua preferência (utilizei o VS Code)

- Instale as dependências

```bash
$ npm install
```

- Execute o comando para iniciar o servidor

```bash
$ npm start
```
obs.: para saber mais como esse comando funciona, visite o arquivo `package.json` na linha 7 e veja o script "start"

- Abra a seguinte url no navegador:

```link
http://localhost:3013/
```

- Essa api funciona com três entidades, sendo elas:

>- Funcionario
>- Inquilino
>- Imovel

- A rota de cada uma delas está personalizada, seguindo o padrão conforme o arquivo `routes.json` 

<hr>

## Métodos HTTP

- GET

Busca todos os dados da entidade escolhida. Exemplo:

```
http://localhost:3013/funcionario/list
```

E então ele irá te retornar os dados de `funcionario`:

```json
[
  {
    "id": 1,
    "nome": "Gaby França",
    "cpf": "123.321.456-13",
    "salario": "4000"
  },
  {
    "id": 2,
    "nome": "Gustavo Aquino",
    "cpf": "321.132.321-13",
    "salario": "4000"
  },
  {
    "id": 3,
    "nome": "Isabelle Araujo",
    "cpf": "421.123.543-14",
    "salario": "3500"
  },
  {
    "id": 4,
    "nome": "Beatriz Poncio",
    "cpf": "897.435.321-15",
    "salario": "3500"
  }
]
```

obs.: lembrando que existem 3 entidades (funcionario, inquilino, imovel)

Também existe a possibilidade de buscar dados por ID, alterando a url para:

```
http://localhost:3013/funcionario/get/ID_DO_ITEM
```

Se usássemos o ID 1 no lugar de  `ID_DO_ITEM`, por exemplo, teriamos esse retorno:

```json
{
  "id": 1,
  "nome": "Gaby França",
  "cpf": "123.321.456-13",
  "salario": "4000"
}
```

## Observação

Os navegadores conseguem utilizar o método get por padrão, porém para o restante, é necessário usar uma plataforma de API (Insomnia, Postman, etc).

Caso não queira instalar alguma delas, utilize o site [Hoppscoth](https://hoppscotch.io/) para mediar as requisições

<br>

- POST

Método para criar entradas no banco de dados. Exemplo:

Abra o hoppscoth e então selecione o método `POST` e utilize a seguinte url:
```
http://localhost:3013/funcionario/create
```

Clique em `CORPO` e então selecione `application/json` e siga o padrão da entidade escolhida. No caso de funcionário, seria:

```json
{
  "id": 6,
  "nome": "Fulano",
  "cpf": "111.111.111-11",
  "salario": "1111"
}
```
E então clique em enviar para salvar o dado.


- PUT

Método para atualizar os dados de um item.


Abra o hoppscoth e então selecione o método `PUT`  e utilize a seguinte url substituindo `ID_DO_ITEM` pelo identificador do item escolhido:
```
http://localhost:3013/funcionario/update/ID_DO_ITEM
```
Clique em `CORPO` e então selecione `application/json` e siga o padrão da entidade escolhida. No caso de funcionário, seria:

```json
{
  "id": 1,
  "nome": "Gaby França",
  "cpf": "123.321.456-13",
  "salario": "4000"
}
```

Altere seu nome, cpf ou salario e então clique em enviar para salvar o dado.


- DELETE

Método para deletar um item.

Abra o hoppscoth e então selecione o método  `DELETE` e utilize a seguinte url substituindo `ID_DO_ITEM` pelo identificador do item escolhido:
```
http://localhost:3013/funcionario/delete/ID_DO_ITEM
```

em seguida, clique em enviar para que o item seja deletado do seu banco.