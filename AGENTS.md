# AGENTS.md

Regras de comportamento e fronteiras para qualquer agente
de IA que opere neste workspace.

---

## 1. Natureza do artefato

Este repositorio produz UM documento: a proposta de
operacao para o cliente Mari Amaral. Nao e um sistema,
nao e um produto, nao e um protocolo. E uma peca
comercial estatica.

Implicacao direta: nenhum agente deve sugerir backend,
banco de dados, autenticacao, token ou qualquer camada
de runtime. Se a sugestao nao couber em saida estatica
do Astro, ela esta fora de escopo.

---

## 2. Fronteira conteudo / apresentacao

O conteudo vive em `src/data/proposta.ts` e em lugar
nenhum mais. As secoes `.astro` consomem esse dado.

Regra inviolavel:
  ◆ texto de copy NUNCA e escrito direto no markup
  ◆ markup NUNCA carrega dado de negocio hardcoded
  ◆ alterar uma frase = editar apenas proposta.ts

Quebrar essa fronteira e o unico erro que justifica
reverter um commit inteiro.

---

## 3. O que o agente pode fazer sem perguntar

  ▸ ajustar estilo dentro do `<style>` de uma secao
  ▸ refinar copy em proposta.ts mantendo o sentido
  ▸ corrigir acessibilidade, contraste, foco, motion
  ▸ adicionar uma secao nova co-locada e tipada

## 4. O que exige confirmacao explicita

  ▸ mudar a tese central (sinal sobrevive a migracao)
  ▸ alterar escopo comercial das camadas 1 ou 2
  ▸ expor nomes internos de stack ao cliente
  ▸ tornar visivel o status de migracao de plataforma
  ▸ adicionar dependencia externa ao build

---

## 5. Limite de revelacao tecnica

O publico-alvo e decisor NAO tecnico. Toda saida
visivel ao cliente descreve CAPACIDADE, nunca
implementacao.

Proibido na saida final:
  ◆ nomes de modulos internos do ecossistema NEØ
  ◆ a palavra "chatbot" para descrever o agente SDR
  ◆ jargao de infra (Railway, Cloudflare Workers, IPFS)
    exceto quando ja exposto no diagnostico publico
  ◆ adjetivos de hype: revolucionario, disruptivo, etc

---

## 6. Tom

Direto, tecnico, sobrio. O artefato deve parecer
relatorio de engenharia, nao pitch de startup. Se um
trecho soa como marketing generico, reescreva ou corte.

---

## 7. Falha segura

Em duvida sobre escopo, o agente para e pergunta. Nunca
inventa numero, nunca afirma certeza sobre a plataforma
futura do cliente, nunca preenche lacuna comercial com
suposicao. Estado de incerteza declarado supera
confianca fabricada.
