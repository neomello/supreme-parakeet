# =====================================================
# Makefile  -  Proposta Mari Amaral
# Interface unica de operacao. pnpm por baixo.
# Rode `make` ou `make help` para ver os alvos.
# =====================================================

PNPM := pnpm
PORT := 4321

# nao sao arquivos, sao acoes
.PHONY: help install dev build preview check clean \
        pdf verify reset

# alvo padrao
.DEFAULT_GOAL := help

# -----------------------------------------------------
help: ## lista os alvos disponiveis
	@echo ""
	@echo "  Proposta Mari Amaral  /  alvos make"
	@echo "  ----------------------------------------"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "} \
		{printf "  %-12s %s\n", $$1, $$2}'
	@echo ""

# -----------------------------------------------------
# ciclo de desenvolvimento
# -----------------------------------------------------
install: ## instala dependencias
	$(PNPM) install

dev: ## servidor local com hot reload
	$(PNPM) dev --port $(PORT)

build: ## gera o dist estatico
	$(PNPM) build

preview: build ## serve o build local para conferencia
	$(PNPM) preview --port $(PORT)

check: ## checagem de tipos astro
	$(PNPM) check

# -----------------------------------------------------
# entrega
# -----------------------------------------------------
pdf: build ## instrucao de export PDF para envio
	@echo ""
	@echo "  build pronto em ./dist"
	@echo "  passo manual:"
	@echo "    1. make preview"
	@echo "    2. abra http://localhost:$(PORT)"
	@echo "    3. imprima a pagina para PDF"
	@echo ""
	@echo "  sem lib de PDF de proposito."
	@echo "  arvore de dependencias minima."
	@echo ""

verify: check build ## checklist de qualidade antes de entregar
	@echo ""
	@echo "  verificacao automatica:"
	@echo "    [ok] tipos checados"
	@echo "    [ok] build limpo"
	@echo ""
	@echo "  conferir a mao:"
	@echo "    [ ] responsivo ate 360px"
	@echo "    [ ] foco de teclado visivel"
	@echo "    [ ] reduced-motion respeitado"
	@echo "    [ ] nenhuma palavra de hype"
	@echo "    [ ] nenhum nome interno de stack"
	@echo "    [ ] tese legivel em 5 segundos"
	@echo ""

# -----------------------------------------------------
# limpeza
# -----------------------------------------------------
clean: ## remove dist e cache de build
	rm -rf dist .astro

reset: clean ## limpeza total, inclui node_modules
	rm -rf node_modules
	@echo "  reset completo. rode: make install"