# Sistema de Mensageria 
Este projeto é uma implementação básica de mensageria, onde um produtor envia mensagens para uma fila e um consumidor as processa de maneira assíncrona. Utiliza o RabbitMQ para gerenciar as filas de mensagens e o Node.js para a lógica de produção e consumo.

## Objetivo
O objetivo é compreender e aplicar conceitos de mensageria, como filas, produtores e consumidores, para criar um sistema de comunicação assíncrona entre componentes. Esse tipo de arquitetura é amplamente utilizado em sistemas distribuídos e microserviços para melhorar a escalabilidade e a eficiência do processamento.

## Tecnologias Utilizadas
- RabbitMQ para a fila de mensagens
- Node.js como linguagem de programação
- Docker para configuração do ambiente de mensageria

## Estrutura do Projeto
producer.js: Script do produtor, que envia mensagens para a fila.
consumidor.js: Script do consumidor, que recebe e processa mensagens da fila.
conceito.txt: Arquivo com um resumo dos conceitos de mensageria.

## Conceitos de Mensageria
Para entender melhor os fundamentos desse projeto, é importante conhecer os conceitos de:

- Filas: Estruturas que armazenam mensagens até que sejam processadas.
- Produtores: Enviam mensagens para uma fila específica.
- Consumidores: Recebem e processam mensagens da fila.
- RabbitMQ, BullMQ e Kafka: Ferramentas de mensageria que se diferenciam por casos de uso e escalabilidade.
- Para mais detalhes, consulte o arquivo conceitos.txt.

## Configuração do Ambiente

### Pré-requisitos
- Docker instalado no seu sistema.
- Node.js e npm instalados.

### Subir o Ambiente de Mensageria (RabbitMQ) com Docker
Execute o seguinte comando no terminal para iniciar o RabbitMQ no Docker:

``` bash
docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

O RabbitMQ estará disponível no painel de controle em: http://localhost:15672

Usuário: guest

Senha: guest

### Instalar Dependências do Projeto
No diretório do projeto, execute:

```bash
npm install
```

## Execução do Projeto

### Consumidor
Primeiro, inicie o consumidor, que ficará aguardando mensagens para processar:

```bash
node consumidor.js
```

### Produtor
Em outra aba do terminal, execute o produtor para enviar uma mensagem para a fila:

```bash
node producer.js
```
Ao executar o produtor, ele enviará uma mensagem simulando uma tarefa (exemplo: "Processar pedido") para a fila. O consumidor a receberá e processará de forma assíncrona.

## Personalização
Você pode personalizar a lógica do produtor e do consumidor para representar diferentes tipos de tarefas, como:

- Envio de e-mails
- Geração de relatórios
- Processamento de pedidos de e-commerce

## Conclusão
Esse projeto demonstra como configurar e utilizar um sistema de mensageria básico com RabbitMQ. Ele pode ser expandido para atender necessidades específicas, como monitoramento de filas, múltiplos consumidores, ou mesmo escalabilidade em uma arquitetura de microserviços.
