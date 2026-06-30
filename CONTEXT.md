# CONTEXT.md

Mapa mental atual do workspace. Quem ler isto deve
entender o terreno em menos de dois minutos.

---

## Objetivo

Fechar contrato de operacao de 24 meses com a marca de
confeccao Mari Amaral. Este repositorio gera o artefato
de apresentacao que sustenta essa conversa.

O erro a evitar e o ja cometido: apresentar solucoes
demais e deixar o decisor perdido. A correcao e
estrutural, duas camadas:

  Camada 1  fecha contrato hoje
            gestao de trafego Google e Meta
            fundacao de dados (CAPI, dedup, EMQ)
            desacoplada da plataforma de e-commerce

  Camada 2  mantem o contrato vivo por 24 meses
            captacao inteligente, automacao de
            relacionamento, continuidade na migracao
            visivel como visao, nao vendida agora

---

## Tese central

A loja pode migrar de plataforma. A camada de sinal de
conversao e propriedade do operador e atravessa essa
migracao sem reset. Isso justifica contrato longo melhor
que qualquer feature isolada.

Essa tese e o diagrama de assinatura em SignalLayer.astro.
Tudo no documento serve a ela ou e ruido.

---

## Estado do cliente

  dominio       usemariamaral.com.br
  faturamento   acima de R$ 1M por mes
  plataforma    Olist com template padrao
  borda         Cloudflare no www, Fly.io no apex
  migracao      proposta externa em avaliacao
                operador supervisionara quando ocorrer

Risco operacional: qualquer entrega acoplada a Olist
vira trabalho descartavel apos a migracao. Por isso a
fundacao de dados nasce agnostica de plataforma.

---

## Estrutura do repositorio

  src/data/proposta.ts        fonte unica de verdade
  src/layouts/Base.astro      casca, fontes, tokens
  src/components/ui/          primitivos reutilizaveis
  src/components/sections/    seis secoes do documento
  src/pages/index.astro       composicao final
  src/styles/                 tokens + global

Ordem de leitura das secoes:
  Hero ▸ SignalLayer ▸ Diagnostico ▸ Operacao
       ▸ Roadmap ▸ Cta

---

## Decisoes de design fixadas

  ◆ aesthetic terminal cinza, inicio dos anos 90
  ◆ nao cyberpunk, sem neon, sem glow
  ◆ IBM Plex Mono e Sans, hairlines, status quadrado
  ◆ um unico acento: verde fosforo dessaturado
  ◆ status de migracao em ambar, decisao pendente
    sobre torna-lo visivel ao cliente

---

## Pontos abertos

  ▸ confirmar se o card de migracao fica visivel
  ▸ definir se Camada 2 cita o agente SDR por nome
  ▸ exportar versao PDF para envio offline
