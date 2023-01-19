# AnaAPI
 A.N.A. API is a project for attendance on WhatsApp with IA

## Arquitetura do projeto

![image](https://user-images.githubusercontent.com/64012825/213498708-e675267f-dc36-4999-a189-03b73826a109.png)

# Indice
<ul>
    <li><strong><a href="#requisitos_ancora">Requisitos Minimos</a></strong></li>
    <li><strong><a href="#executar">Como executar o projeto</a></strong></li>
    <li><strong><a href="#Funcionalidades">Funcionalidades</a></strong></li>
</ul>

---

<p id="requisitos_ancora"></p>

# Requisitos minimos
- ...


<p id="executar"></p>

## Como executar o projeto??

Na pasta /AnaAPI execute o seguinte comando para executar o projeto no ``docker``:
```
docker-compose up --build
```
<p id="Funcionalidades"></p>

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
