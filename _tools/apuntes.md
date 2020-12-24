---
name: apuntes
description: https://hub.docker.com/weshigbee/manifest-tool inspect mcr.microsoft.com/dotnet/core/runtime:3.1   docker
  run --rm -it -v ${PWD}:"c:\Microservice.Docker.Api" -p 8085:80 mcr.microsoft.com/dotnet/core/aspnet:3.1  docker
  build -t aspnetcore-ea/generator . docker image ls docker run --rm -it -p 8085:80
  aspnetcore/generator  docker login docker build -t erickaspnetcore/generator . docker
  run --rm -it -p 8085:80 erickaspnetcore/generator docker push erickaspnetcore/generator
  docker run --rm -it -p 8085:80 erickaspnetcore/generator  docker ps -a docker build
  -t erickaspnetcore/generator --rm=false --no-cache . docker inspect erickaspnetcore/generator  docker
  run --rm -it -v ${PWD}:"/Microservice.Docker.Api" -p 8085:80 mcr.microsoft.com/dotnet/core/sdk:3.1
  dotnet --info dotnet help rm -rf bin/ obj/ ls -al dotnet restore dotnet build dotnet
  publish dotnet .\Microservice.Docker.Api.dll   (en winodws) dotnet run dotnet run
  & ps curl -L -k localhost:5000/swagger/index.html     (En la ruta del publish)  docker
  run --rm -it -v ${PWD}:"/Microservice.Docker.Api" -p 8085:80 mcr.microsoft.com/dotnet/core/sdk:3.1
  export ASPNETCORE_URLS=http://+:80 dotnet restore dotnet build dotnet Microservice.Docker.Api.dll
  http://localhost:8085/  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  docker events --format "{{json .}}" "Attributes":{"exitCode":"0","image":"nginx","maintainer":"NGINX
  Docker Maintainers <docker-maint@nginx.com>","name":"reverent_ganguly"} docker stop
  reverent_ganguly  ----Build 02.3 docker build --rm=false --no-cache -t test . (Crear
  un docker file de build) docker build -t aspnetcore/generator:build . docker run
  --rm -it -p 8095:80 -p 8096:443 aspnetcore/generator:build   (Si falla el restore
  verificar la tarjeta de red virtual debe ser asignada una tarjeta fisica que tenga
  acceso a internet)  https://localhost:8086/   --------Stages 02.4 docker image ls
  aspnetcore/generator (Vrear un docker file con 2 stage's) docker build -t aspnetcore/generator:Multi
  . docker image ls aspnetcore/generator docker run --rm -it -p 8085:80 aspnetcore/generator:Multi   ----Docker
  compose (Generar un archivo docker-compose.yml) docker-compose h docker-compose
  up docker ps docker-compose up -d docker ps docker-compose logs docker-compose down
  docker ps docker image ls docker image rm aspnetcore/generator:Multi docker image
  ls docker-compose up -d docker image ls (mail solo en contendores linux) docker-compose
  up -d docker ps (agregar llamada de correo) dotnet restore dotnet build dotnet run
  docker-compose ps docker-compose up -d --build (No funcionara pues se necesita asignar
  un ip/nombre de host "mail" al server de correo) docker-compose up -d --build docker-compose
  down
image: ""
specificationVersion: "0.14"
x-rank: "0"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/apuntes/
tags:
- URLs
- Top
- Time
- Swagger
- Store
- Stop
- Stages
- Server
- Run
- REST
- Push
- Multi
- Microsoft
- Me
- Mail
- Logs
- Login
- Local
- JSON
- Index
- HTTPS
- HTTP
- HTML
- Host
- GitHub Swagger Search
- GitHub RAML Search
- Generator
- Export
- Event
- End
- DotNet
- Docker
- cURL
- Compose
- Code
- Cache
- Attributes
- Aspnet
- API
apis: []
x-common:
- type: x-github
  url: https://github.com/arcafu/apuntes/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---