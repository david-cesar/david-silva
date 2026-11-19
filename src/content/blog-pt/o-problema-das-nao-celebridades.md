---
title: "O 'problema da não celebridade' com fluxos de trabalho"
description: 'Por que os workflows mais avançados de agentes de IA dependem de fundamentos, controles e estruturas que muitas empresas ainda precisam construir.'
pubDate: 2026-11-17
tags: ['ia', 'engenharia de software', 'agentes', 'desenvolvimento de software']
translationKey: 'the-non-celebrity-problem'
draft: false
---

Recentemente, assumi um time como tech lead. Nas primeiras conversas,
começamos a discutir assuntos como a stack do projeto, as tecnologias que vamos usar e como organizar nosso desenvolvimento com IA.

Este artigo faz parte das minhas reflexões durante esses preparativos.

## O problema

Novos workflows de desenvolvimento com IA surgem toda
semana, e a capacidade dos modelos evolui em um ritmo inebriante. É difícil não
se impressionar e querer testar essas ferramentas e fazer parte
desse movimento. 

Em algumas [demonstrações](https://www.youtube.com/watch?v=vlfCjWuv4es), dezenas de sessões trabalham por horas, dividem agentes em tarefas, escrevem código, verificam os próprios resultados e entregam "tudo pronto", e, para que fique claro: isso é ótimo! Não gastei meu tempo escrevendo aqui para falar mal disso.

Mas se os agentes podem fazer tanto sozinhos, qual passa a ser o
trabalho de quem desenvolve software? Parte da resposta está escondida nas
próprias demonstrações.

Para chegar nesses workflows demonstrados foi preciso configurar
permissões, isolar o ambiente, garantir testes e verificações automáticas,
manter a integração contínua e tudo isso fica "subentendido" ou vem acompanhado
da frase "agora tem que revisar, mas vou pular essa etapa aqui por causa de A, B, C...".

A autonomia de um fluxo com IA não surge do nada. 

Ao delegar nosso trabalho precisamos conceder liberdade dentro de limites claros. 

Um modelo melhor ainda depende de um ambiente
estruturado e de contexto suficiente. Muitas empresas têm regras rígidas de
conformidade, fluxos de aprovação, dados sensíveis, sistemas legados e
documentação incompleta ou inexistente.

Não é que essas equipes não possam adotar workflows com IA. É que não podemos
assumir que o workflow que funciona para uma pessoa ou empresa cabe no contexto diário de todo mundo.

## A autonomia desloca o esforço

Tomei a liberdade de usar o nome de um problema de arquitetura de software conhecido que não envolve IA para fazer uma analogia com IA (clássico?). 

No "Problema da Celebridade" somos levados a imaginar o sistema de uma rede social quando uma conta com milhões de seguidores faz uma publicação. Se o sistema tentar copiar o post imediatamente para o feed de cada seguidor da celebridade isso pode sobrecarregar o sistema e sempre que alguém famoso publicar algo temos um "incidente" para resolver.

Como solução possível: armazenamos a publicação uma única vez e deslocamos o trabalho pesado para quando os seguidores consultam o feed, com limites
bem definidos para controlar esse trabalho.

O esforço não desaparece. Ele muda de lugar.

Trazendo para nosso dia a dia, quando um desenvolvedor deixa de aprovar cada comando que o agente executa, o esforço vai
reaparecer na preparação do contexto, na configuração das permissões e no
isolamento do ambiente. 

Quando ninguém revisa toda linha de código gerado, são os testes,
os critérios de aceitação e os processos de revisão que precisam capturar os
problemas. O fluxo fica mais autônomo porque essas outras partes passam a
carregar mais responsabilidade.

Demonstrações de workflows poderosos geralmente partem de times que possuem essas camadas bem definidas ou simplemente estão iniciando um projeto do zero. Uma equipe que mantém um sistema antigo talvez 
não tenha testes confiáveis nem saiba ao certo por que algumas regras existem. 

Colocar mais agentes em paralelo não resolve essas lacunas e pode, inclusive, apenas 
aumentar a quantidade de mudanças que alguém precisará entender depois.

## Gerar código não é o mesmo que evoluir um sistema

Na palestra [“Fundamentos de Software Importam Mais Do Que Nunca”](https://www.youtube.com/watch?v=v4F1gFy-hqg),
Matt Pocock argumenta que gerar código com rapidez não torna barato manter um
sistema já que do outro lado da balança isso pode tornar o sistema mais difícil de compreender e modificar. 

Ele relata que mesmo ao usar uma abordagem baseada em gerar código a partir de especificações claras, mas sem acompanhar a implementação, viu as mudanças sucessivas degradarem a base ou seja, as especificações
podem orientar a implementação, mas não tornam a estrutura do software
irrelevante.

Por isso ele volta a práticas conhecidas: alinhar o entendimento do
problema, criar uma linguagem comum entre o domínio e a equipe, testar em
passos menores e desenhar módulos com interfaces claras. Esses fundamentos
ajudam tanto as pessoas quanto a IA a entender o que pode mudar e como
verificar se a mudança está correta.

A compreensão de um sistema legado, por exemplo, pode existir apenas na experiência de quem o opera. Uma mudança feita por um agente pode parecer tecnicamente coerente, mas contrariar uma exigência regulatória não documentada ou remover uma exceção que o negócio precisa intencionalmente preservar.

Addy Osmani chama isso de [dívida de compreensão](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code-285a25dac57e): a distância entre o código existente e o que a equipe consegue entender; e [dívida de intenção](https://addyosmani.com/blog/intent-debt/): quando o sistema não registra por que uma regra ou decisão foi tomada.

Não é razoável esperar que um agente infira com segurança um contexto que não foi registrado. Antes de delegar mais, talvez seja necessário tornar esse conhecimento visível para a equipe e para as IAs. Usar o próprio repositório como fonte da verdade é um dos caminhos e que particularmente gosto de usar quando possível. 

Mesmo quando for obrigatório separar a fonte das regras de negócio mantenha-as estruturadas e não apenas despeje trechos soltos no contexto de uma sessão qualquer que depois você vai ter que voltar e procurar.

Isso não significa que toda ideia precise passar por meses de planejamento.

Prototipar cedo e receber feedback são formas úteis de descobrir o que os
usuários realmente esperam. Essa é uma das ideias do [Desenvolvimento Rápido de Aplicações - RAD](https://www.atlassian.com/agile/software-development/rapid-application-development), uma metodologia descrita por James Martin em seu livro [Desenvolvimento de Aplicações Sem Programadores](https://books.google.com.br/books/about/Application_development_without_programm.html?id=QnO4AAAAIAAJ). Com esse nome tive que começar a ler.

O cuidado está em não confundir o protótipo ou MVP com um produto pronto para
produção. O que aprendemos durante a prototipagem podemos transformar em requisitos, critérios de aceitação e testes antes da aplicação chegar à produção.

A IA reduz o esforço para começar, mas ainda precisamos integrar, proteger,
manter e dar suporte ao que foi criado. Se a equipe não tem tempo para concluir
essas etapas, a velocidade em gerar código pode gerar um acúmulo de MVPs sem uso e com decisões pendentes.

## O trabalho humano é entender

Então, ao lado da famosa pergunta "em quanto tempo conseguimos entregar essa solução?" temos que ter "que parte desse trabalho nós e outros times conseguimos verificar e manter?".

O problema não são as ferramentas usadas pelas celebridades. É tentar encaixar em nosso trabalho diário workflows que dependem de estruturas que ainda não temos. 

A IA pode ampliar o que conseguimos fazer, mas não substitui a decisão sobre o que deve ser feito nem o entendimento necessário para sustentar o resultado. 

Adiar a adoção até entendermos os limites e como usar essas ferramentas/workflows na minha visão não é sinal de atraso, muitas vezes, é o primeiro passo para usá-las melhor.

Estou construindo um próximo artigo onde quero apresentar um caminho prático para mapear processos, definir como a equipe de desenvolvimento e o produto podem usar IA e avaliar os resultados, em vez de apenas reclamar. Estou quase finalizando e logo mais ele estará por aqui.

## Material Complementar

- [Rethinking Claude Code Best Practices](https://www.youtube.com/watch?v=vlfCjWuv4es), Lydia Hallie, Anthropic
- [The Celebrity Problem: How X Builds Your Feed](https://www.youtube.com/watch?v=miCXLs0CFwQ), The Freshers.
- [Comprehension Debt — the hidden cost of AI generated code](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code-285a25dac57e), Addy Osmani
- [The Intent Debt](https://addyosmani.com/blog/intent-debt/), Addy Osmani
- [Software Fundamentals Matter More Than Ever](https://www.youtube.com/watch?v=v4F1gFy-hqg), Matt Pocock, AI Engineer.
- [What is Rapid application development (RAD) and how does it work?](https://www.atlassian.com/agile/software-development/rapid-application-development), Atlassian
- [What is rapid application development?](https://www.ibm.com/think/topics/rapid-application-development), Cole Stryker, IBM
- [What Is RAD? Why It Matters in the Age of AI Coding](https://www.youtube.com/watch?v=J0zbWsutyA8), IBM