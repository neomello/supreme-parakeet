# SKILL.md

Rotinas tecnicas e limites de execucao neste workspace.

---

## Ambiente

  runtime    Node 18 ou superior
  gerenciador pnpm preferido, npm aceito
  framework  Astro 4, output static
  ts         strict, paths com alias @

---

## Comandos

  pnpm install        instala dependencias
  pnpm dev            servidor local em :4321
  pnpm build          gera dist estatico
  pnpm preview        serve o build local
  pnpm check          checagem de tipos astro

---

## Rotina ▸ editar conteudo

  1. abrir src/data/proposta.ts
  2. alterar apenas o campo desejado
  3. salvar, o dev server recarrega
  4. nunca tocar markup para mudar texto

## Rotina ▸ adicionar secao

  1. criar src/components/sections/Nome.astro
  2. estilo co-locado em <style> dentro do arquivo
  3. dado correspondente entra em proposta.ts tipado
  4. importar e posicionar em src/pages/index.astro
  5. respeitar a ordem de leitura existente

## Rotina ▸ exportar PDF

  1. pnpm build
  2. pnpm preview
  3. imprimir a pagina para PDF pelo navegador
  4. nao adicionar dependencia de PDF ao projeto
     sem nova decisao registrada em MEMORY.md

---

## Limites de execucao

Permitido:
  ▸ alterar estilo, copy, estrutura de secao
  ▸ refatorar componentes mantendo a fronteira
    conteudo / apresentacao
  ▸ melhorar acessibilidade e responsividade

Proibido sem confirmacao:
  ◆ instalar dependencia nova
  ◆ adicionar integracao, script de terceiro, analytics
  ◆ introduzir backend, API ou estado de servidor
  ◆ expor stack interno ou jargao ao cliente

---

## Checklist antes de entregar

  [ ] pnpm check sem erro de tipo
  [ ] pnpm build conclui limpo
  [ ] responsivo ate 360px de largura
  [ ] foco de teclado visivel
  [ ] prefers-reduced-motion respeitado
  [ ] nenhuma palavra de hype na saida
  [ ] nenhum nome interno de stack visivel
  [ ] tese de continuidade legivel em 5 segundos
