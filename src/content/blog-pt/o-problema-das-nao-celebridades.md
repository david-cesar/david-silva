---
title: "O 'Problema da não celebridade': como definir um fluxo de trabalho"
description: 'Por que os workflows mais avançados de agentes de IA dependem de fundamentos, controles e estruturas que muitas empresas ainda precisam construir.'
pubDate: 2026-11-17
tags: ['ia', 'engenharia de software', 'agentes', 'desenvolvimento de software']
translationKey: 'the-non-celebrity-problem'
draft: false
---

Recentemente, assumi um time como tech lead. Nas primeiras conversas,
começamos a discutir a stack do próximo projeto, as tecnologias que vamos usar
e como organizar nosso desenvolvimento com IAs. Este artigo faz parte das reflexões que
surgiram durante esses preparativos.

Novos workflows de desenvolvimento com IA surgem toda
semana, e a capacidade dos modelos evolui em um ritmo inebriante. É difícil não
se impressionar e querer testar essas ferramentas e fazer parte
desse movimento. Em algumas demonstrações, dezenas de agentes trabalham por
horas, dividem tarefas, escrevem código, verificam os próprios resultados e
entregam "tudo pronto".

Diante disso, se os agentes podem fazer tanto sozinhos, qual passa a ser o
trabalho de quem desenvolve software? Parte da resposta está escondida nas
próprias demonstrações.

## O problema

Para chegar nesses workflows demonstrados foi preciso configurar
permissões, isolar o ambiente, garantir testes e verificações automáticas,
manter a integração contínua e tudo isso fica "subentendido" ou vem acompanhado
da frase "agora tem que revisar, mas vou pular essa etapa aqui por cause de ...".

A autonomia não surge do nada. Para delegar, precisamos conceder liberdade
dentro de limites claros. Um modelo melhor ainda depende de um ambiente
estruturado e de contexto suficiente. Muitas empresas têm regras rígidas de
conformidade, fluxos de aprovação, dados sensíveis, sistemas legados e
documentação incompleta ou inexistente.

Não é que essas equipes não possam adotar workflows com IA. É que não podemos
assumir que o fluxo que funciona para uma celebridade cabe no contexto diário 
de todo mundo.

## A autonomia desloca o custo

Uma analogia que achei útil vem de um problema de arquitetura que não envolve IA. 
No "Problema da Celebridade" imagine o sistema de uma rede social quando uma conta 
com milhões de seguidores faz uma publicação, se o sistem tentar copiar o post 
imediatamente para o feed de cada seguidor da celebridade isso pode sobrecarregar o sistema.

Como solução, a publicação fica armazenada uma única vez e parte do
trabalho é deslocada para quando os seguidores consultam o feed, com limites
bem definidos para controlar esse fluxo.

O custo não desaparece. Ele muda de lugar.

Quando uma pessoa deixa de aprovar cada comando que o agente executa, o esforço
reaparece na preparação do contexto, na configuração das permissões e no
isolamento do ambiente. Quando ninguém revisa todas as linhas, são os testes,
os critérios de aceitação e os processos de revisão que precisam capturar os
problemas. O fluxo fica mais autônomo porque essas outras partes passam a
carregar mais responsabilidade.

Demonstrações de workflows geralmente partem de times que possuem essas camadas 
bem definidas ou simplemente estão iniciando um projeto do zero. Em outros lugares, 
elas ainda precisam ser construídas. Uma equipe que mantém um sistema antigo talvez 
não tenha testes confiáveis nem saiba ao certo por que algumas regras existem. 
Colocar mais agentes em paralelo não resolve essas lacunas e pode, inclusive, apenas 
aumentar a quantidade de mudanças que alguém precisará entender depois.

## Gerar código não é o mesmo que evoluir um sistema

Na palestra [“Software Fundamentals Matter More Than Ever”](https://www.youtube.com/watch?v=v4F1gFy-hqg),
Matt Pocock argumenta que gerar código com rapidez não torna barato manter um
sistema difícil de compreender e modificar. Ele relata que, ao experimentar
uma abordagem baseada em gerar código a partir de especificações sem acompanhar
a implementação, viu as mudanças sucessivas degradarem a base. A especificação
pode orientar a implementação, mas não torna a estrutura do software
irrelevante.

Por isso, Pocock volta a práticas conhecidas: alinhar o entendimento do
problema, criar uma linguagem comum entre o domínio e a equipe, testar em
passos menores e desenhar módulos com interfaces claras. Esses fundamentos
ajudam tanto as pessoas quanto a IA a entender o que pode mudar e como
verificar se a mudança está correta.

Com agentes, também precisamos prestar atenção à dívida de compreensão e à
dívida de intenção. A primeira é a distância entre o código existente e o que a equipe consegue
entender. A segunda aparece quando o sistema não registra por que uma regra ou
decisão foi tomada.

Em um sistema legado, a intenção pode existir apenas na experiência de quem o
opera. Uma mudança tecnicamente coerente pode contrariar uma exigência
regulatória ou remover uma exceção que o negócio precisa preservar. Não é
razoável esperar que um agente infira com segurança um contexto que não foi
registrado. Antes de delegar mais, talvez seja necessário tornar esse
conhecimento visível para toda a equipe, não apenas no contexto de uma sessão
específica.

## O trabalho humano é entender o que não está no teste

Isso não significa que toda ideia precise passar por meses de planejamento.

Prototipar cedo e receber feedback são formas úteis de descobrir o que os
usuários realmente esperam. Essa é uma das ideias do [Rapid Application
Development](https://www.atlassian.com/agile/software-development/rapid-application-development).

O cuidado está em não confundir o protótipo com um produto pronto para
produção. O que aprendemos durante a prototipagem precisa virar regra de
negócio, critérios de aceitação e testes antes de a aplicação chegar à produção.

A IA reduz o esforço para começar, mas ainda precisamos integrar, proteger,
manter e dar suporte ao que foi criado. Se a equipe não tem tempo para concluir
essas etapas, a velocidade pode gerar um acúmulo de MVPs sem uso e com decisões
pendentes.

A pergunta, então, não deveria ser apenas "quanto código conseguimos gerar?",
mas "que parte desse trabalho conseguimos verificar e manter?".

O problema não é deixar de usar as ferramentas das celebridades. É comparar
nosso trabalho diário com workflows que dependem de estruturas que ainda não
temos. 

A IA pode ampliar o que conseguimos fazer, mas não substitui a decisão sobre o que deve ser feito
nem o entendimento necessário para sustentar o resultado. Adiar a adoção até
entendermos os limites de uma ferramenta não é sinal de atraso; muitas vezes,
é o primeiro passo para usá-la melhor.

## Material Complementar

- [The Celebrity Problem: How X Builds Your Feed](https://www.youtube.com/watch?v=miCXLs0CFwQ), The Freshers.
- [Comprehension Debt — the hidden cost of AI generated code](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code-285a25dac57e), Addy Osmani
- [The Intent Debt](https://addyosmani.com/blog/intent-debt/), Addy Osmani
- [What Is Loop Engineering? Building Better AI Agents](https://www.youtube.com/watch?v=DQBqh6gcx7U), IBM
- [Software Fundamentals Matter More Than Ever](https://www.youtube.com/watch?v=v4F1gFy-hqg), Matt Pocock, AI Engineer.
- [What is Rapid application development (RAD) and how does it work?](https://www.atlassian.com/agile/software-development/rapid-application-development), Atlasian
- [What is rapid application development?](https://www.ibm.com/think/topics/rapid-application-development), Cole Stryker, IBM
- [What Is RAD? Why It Matters in the Age of AI Coding](https://www.youtube.com/watch?v=J0zbWsutyA8), IBM