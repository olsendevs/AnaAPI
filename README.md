# AnaAPI
 A.N.A. API is a project for attendance on WhatsApp with IA

## Arquitetura do projeto

<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/6dXeUirwywUpiZugpCGfmy"></iframe>

## Indice
- Requisitos minimos 
- Como executar o projeto
- Funcionalidades

# Requisitos minimos
- ...

## Como executar o projeto??

Na pasta /AnaAPI execute o seguinte comando para executar o projeto no ``docker``:
```
docker-compose up --build
```

## Funcionalidades
- Escutar mensagens que são enviadas no WhatsApp
- Enviar respostar prontas para apresentações 
- Verificar se existem palavras-chave relacionadas ao pedido do usuário
- Verificar se existem palavras banidas nas mensagens dos usuários
- Envia os numeros dos usuários que não responderam as mensagens para a ``VenomAPI`` 
- Envia os dados dos usuários que não responderam as mensagens para a ``Mautic``
- Envia as mensagens filtradas para a ``iAna``
- Escuta as respostas da ``iAna`` sobre as mensagens enviadas
- Salva os pedidos e conversas no ``MariaDB`` 