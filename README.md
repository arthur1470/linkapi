# LinkAPI Desafio Integração Pipedrive e Bling
Este projeto é a resolução do desafio proposto pela LinkAPI.

## Começando
Para executar o projeto, será necessário instalar os seguintes programas:

- [(Obrigatório) Node.js: Necessário para executar o projeto](https://nodejs.org/)
- [(Opcional) Yarn: Gerênciador de pacotes.](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- [(Opcional) Insomnia.](https://insomnia.rest/)

### Requisitos adicionais
- [MongoDB: Cadastrar no Mongodb, para configurar a variável de URL](https://www.mongodb.com/cloud/atlas)
- [Bling: Cadastrar no Bling, e registrar um usuário API](https://www.bling.com.br/)
- [PipeDrive: Cadastrar no PipeDrive e gerar um token de API pessoal](https://www.pipedrive.com/pt)

## Construção (Build)
Na pasta do projeto, executar o comando para baixar as dependencias.
```
npm i
```
Ou caso tenha o Yarn instalado
```
yarn
```

## Configurando variáveis de ambiente
Na pasta do projeto, crie o arquivo .env, copie as propriedades do arquivo .env.example e preencha os dados corretamente de acordo com suas credenciais.

![image](https://user-images.githubusercontent.com/33288190/153795588-97dd1245-4855-49c6-8f09-269734ec1b15.png)

Caso você não tenha esses dados, volte aos "Requisitos adicionais".

## Iniciando o servidor

Agora execute o seguinte comando, para iniciar o servidor.
```
npm run dev
```
Ou
```
yarn dev
```

## Utilizando o serviço
Após cadastrar no PipeDrive algumas oportunidades com status ganho, a aplicação estará pronta pra fazer a integração.
Oportunidade cadastrada no [pipedrive:](https://www.pipedrive.com/pt) 

![image](https://user-images.githubusercontent.com/33288190/153803687-79339a25-abf7-479a-8bfa-752e6d44e607.png)

O serviço dispõe de dois endpoints:

```
POST: _baseURL/integration
```
e
```
GET: _baseURL/integration
```
obs: _baseURL é o endereço onde a aplicação está implantada, na sua máquina será http://localhost:sua-porta

### Utilizando o POST
No [insomnia](https://insomnia.rest/), selecione o método de requisição POST, e faça a requisição clicando no "SEND".
O retorno deverá ser conforme a imagem: 

![image](https://user-images.githubusercontent.com/33288190/153802797-4ff6dd03-bf46-42c9-b6e1-3f887fb65e17.png)

Caso o serviço retorne sucesso, a integração ocorreu com sucesso. Neste caso, os dados já aparecerão no Bling como pedido, e também 
estão salvos no banco de dados, agregados por data e valor total.

#### Bling:
![image](https://user-images.githubusercontent.com/33288190/153803778-6b2db1f7-bb2e-42f6-bd91-caceb3bff1c6.png)

#### MongoDB: 
![image](https://user-images.githubusercontent.com/33288190/153803826-5aeffd2c-5331-42d8-b210-a95af5e4bdc9.png)

![image](https://user-images.githubusercontent.com/33288190/153803853-b986270d-883a-4751-aedc-80bce4fba39c.png) 

![image](https://user-images.githubusercontent.com/33288190/153803950-62151127-b1e7-4281-967c-f44a60ef4ee4.png)


### Consumindo o GET
No [insomnia](https://insomnia.rest/), selecione o método de requisição GET, e faça a requisição clicando no "SEND".
O retorno deverá ser conforme a imagem: 

![image](https://user-images.githubusercontent.com/33288190/153804308-853b3f6b-17c0-4239-8ef5-344314e98c60.png)

## Dependências utilizadas
Todas dependências utilizadas para desenvolver o projeto:

#### Dependências principais
```
"axios": "^0.25.0"
"dotenv": "^16.0.0"
"express": "^4.17.2"
"mongodb": "3"
"reflect-metadata": "^0.1.13"
"swagger-ui-express": "^4.3.0"
"tsyringe": "^4.6.0"
"typeorm": "^0.2.41"
```

#### Dependências de desenvolvimento
```
"@types/axios": "^0.14.0"
"@types/express": "^4.17.13"
"@types/node": "^17.0.17"
"@types/soap": "^0.21.0"
"@types/swagger-ui-express": "^4.1.3"
"@typescript-eslint/eslint-plugin": "^5.11.0"
"@typescript-eslint/parser": "^5.11.0"
"eslint": "^8.8.0"
"eslint-config-airbnb-base": "^15.0.0"
"eslint-config-prettier": "^8.3.0"
"eslint-import-resolver-typescript": "^2.5.0"
"eslint-plugin-import": "2.25.2"
"eslint-plugin-import-helpers": "^1.2.1"
"eslint-plugin-prettier": "^4.0.0"
"prettier": "^2.5.1"
"ts-node-dev": "^1.1.8"
"typescript": "^4.5.5"
```

## Licença
Não se aplica.
