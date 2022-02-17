# Nodejs_Docker_Docker-Compose

Vídeo [Ambiente de desenvolvimento NodeJS com Docker e Docker Compose](https://www.youtube.com/watch?v=AVNADGzXrrQ) da Rocketseat

## Dockerfile

Indica qual versão e de qual máquina quer utilizar
não definir qual a versão do node(16, por exemplo) indica que a última versão será baixada
alpine é uma versão mais reduzida

Indica qual o diretório dentro da máquina em que quer trabalhar

Copia todos os arquivos iniciados com "package" e terminados em ".json" para dentro da máquina(./
)

Os dois arquivos são suficientes para rodar o `npm install` e instalar as dependências

Copia todos os arquivos(.) restantes para dentro da máquina(.) - Porém, como já foi criado um `node_modules` dentro da máquina, não precisa passar também, então indica-se isso no arquivo `.dockerignore`

Indica ao servidor qual a porta deve expôr para a máquina poder acessar.

Esse comando deve ser único por dockerfile e indica qual o comando o servidor deve executar para dar start na aplicação. Esse comando pode ser definido no arquivo `package.json` e deve ser separado como um array de strings.

## Criando imagem a partir do Dockerfile

```
docker build -t node .
```

- `-t` -> tag da imagem
- `.` -> indica onde está o Dockerfile. Como está no mesmo diretório onde o comando está sendo executado, é possível indicar por `.`

## Rodando aplicação

```
docker run -p 3000:3000 -d node
```

- `-p` -> indica qual porta será acessada no navegador para acessar a porta em que o docker está rodando o node(porta_local:porta_docker)
- `node` -> indica qual imagem será utilizada

## Docker Compose

```
docker-compose up
```

OBS: Na pasta do arquivo

Indica qual a versão do docker compose será utilizada

Indica quais os serviços da aplicação(containers)

Pode ser definido qualquer nome para o serviço(app, node, etc)

Indica onde está o arquivo dockerfile para a aplicação. Como está na mesma pasta do docker-compose: `.`

Indica qual comando quer executar assim que a aplicação subir

Indica qual o redirecionamento de portas

Indica qual pasta deve ser refletida para dentro do docker e onde ela será refletida, ou seja, o docker acompanhará as mudanças dos arquivos da pasta onde está o docker-compose e colocará na pasta /usr/app no docker
