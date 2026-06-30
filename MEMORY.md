# MEMORY.md

Decisoes persistidas e continuidade operacional. Registro
append-only: nao reescrever historia, apenas adicionar.

---

## D-001 ▸ Formato do artefato

One-pager web, nao slide nem documento Word. Construido em
Astro, saida estatica, portavel. Decisao do operador.

## D-002 ▸ Stack

Astro 4, output static, zero runtime de servidor. Sem
framework de UI adicional. Conteudo separado em arquivo
de dados tipado. Justificativa: soberania e portabilidade,
o documento nao depende de host vivo para existir.

## D-003 ▸ Aesthetic

Rejeitadas duas iteracoes em dark neon por nao refletirem
o gosto do operador nem servirem ao decisor nao tecnico.
Direcao final: terminal cinza inicio dos anos 90,
documento tecnico, monoespacado, sem cyberpunk.

## D-004 ▸ Arquitetura de venda em duas camadas

Camada 1 fecha contrato. Camada 2 e visao de 24 meses.
Motivo: o operador perdeu um fechamento anterior por
apresentar solucoes demais de uma vez. A separacao em
camadas e a correcao direta desse erro.

## D-005 ▸ Tese de continuidade

A camada de sinal de conversao e propriedade do operador
e sobrevive a migracao de plataforma. Esta e a carta de
venda principal e o elemento visual de assinatura. Vale
mais que qualquer feature isolada para justificar
contrato longo.

## D-006 ▸ Linguagem do agente SDR

Descrito como captacao inteligente, identificacao de
intencao, registro e follow-up. Proibida a palavra
chatbot na saida ao cliente. Motivo: o termo barateia a
solucao na percepcao de decisor nao tecnico.

## D-007 ▸ Nomes internos fora da saida

Modulos do ecossistema NEØ nao aparecem no documento.
O cliente ve capacidade, nao implementacao. Nomes de
stack interno sao IP e ruido para o publico-alvo.

---

## Pendencias herdadas

  P-001  decisao sobre exibir status de migracao ao
         cliente, ainda em aberto, default atual e
         manter visivel em ambar

  P-002  acesso ao ecosystem.json local foi necessario
         e fornecido por upload. O agente nao tem acesso
         ao filesystem da maquina do operador.

---

## Invariantes que nao mudam sem nova decisao

  ◆ contrato alvo de 24 meses
  ◆ fonte unica de verdade em src/data/proposta.ts
  ◆ saida estatica, sem backend
  ◆ tese de continuidade como eixo do documento
