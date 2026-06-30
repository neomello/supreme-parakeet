# Proposta Mari Amaral

One-pager de diagnostico tecnico e proposta de operacao
de aquisicao e dados. Saida estatica em Astro, portavel,
sem dependencia de servidor.

```
proposta ▸ continuidade de dados ▸ 24 meses
```

---

## Inicio rapido

```
pnpm install
pnpm dev
```

Abre em `http://localhost:4321`.

---

## Mapa do projeto

```
mari-amaral-proposta/
  AGENTS.md      regras para agentes de IA
  CONTEXT.md     mapa mental do workspace
  MEMORY.md      decisoes persistidas
  SKILL.md       rotinas e limites tecnicos
  README.md      este guia
  astro.config.mjs
  src/
    data/
      proposta.ts        fonte unica de verdade
    layouts/
      Base.astro         casca, fontes, tokens
    components/
      ui/                primitivos reutilizaveis
        SectionHead.astro
        StatusDot.astro
      sections/          as seis secoes
        Hero.astro
        SignalLayer.astro
        Diagnostico.astro
        Operacao.astro
        Roadmap.astro
        Cta.astro
    pages/
      index.astro        composicao final
    styles/
      tokens.css         design tokens
      global.css         base
```

---

## Como editar

Todo o texto da proposta vive em `src/data/proposta.ts`.
Para mudar uma frase, um numero ou um item, edite la.
As secoes apenas consomem esse dado. Nunca escreva copy
direto no markup.

Para mudar o visual de uma secao, edite o bloco `<style>`
dentro do proprio arquivo `.astro` da secao. Tokens
globais de cor e tipografia ficam em `src/styles/tokens.css`.

---

## Estrutura da proposta

A peca segue uma ordem de leitura deliberada:

  1. Hero          a tese em uma frase
  2. SignalLayer   o diagrama que prova a tese
  3. Diagnostico   o que a infra publica revela
  4. Operacao      ordem de ativacao em 90 dias
  5. Roadmap       evolucao em 24 meses
  6. Cta           proximo passo

O eixo de tudo: a camada de sinal de conversao e
propriedade do operador e sobrevive a uma eventual troca
de plataforma do cliente. Sem reset, sem perda de
historico.

---

## Exportar para envio

Para gerar um PDF de envio offline:

```
pnpm build
pnpm preview
```

Depois imprima a pagina para PDF pelo navegador. O projeto
nao carrega biblioteca de PDF de proposito, para manter a
arvore de dependencias minima.

---

## Governanca

Antes de qualquer alteracao assistida por IA, leia
`AGENTS.md`. As fronteiras de escopo e de revelacao
tecnica nao sao sugestoes, sao contrato de trabalho
deste repositorio.
