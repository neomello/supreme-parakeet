// =====================================================
// FONTE UNICA DE VERDADE
// Todo o conteudo do artefato vive aqui. As secoes .astro
// apenas consomem. Editar copy nunca exige tocar markup.
// =====================================================

export type Status = "ok" | "watch";
export type Fase = "ativo" | "proximo" | "roadmap";

export interface Cliente {
  nome: string;
  dominio: string;
  faturamento: string;
  plataforma: string;
  migracao: string;
}

export interface DiagItem {
  titulo: string;
  descricao: string;
  status: Status;
  statusLabel: string;
}

export interface OpItem {
  ordem: string;
  titulo: string;
  descricao: string;
  dependeDe: string | null;
}

export interface RoadmapItem {
  periodo: string;
  titulo: string;
  descricao: string;
  fase: Fase;
  faseLabel: string;
}

// -----------------------------------------------------

export const autor = {
  nome: "NEØ MELLØ",
  papel: "Arquitetura de Aquisição e Dados",
  horizonte: "operação contínua / 24 meses",
};

export const cliente: Cliente = {
  nome: "Mari Amaral",
  dominio: "usemariamaral.com.br",
  faturamento: "R$ 1M+/mes",
  plataforma: "Olist",
  migracao: "em avaliacao",
};

export const tese = {
  eyebrow: "leitura preliminar do ecossistema digital",
  titulo: "Mari Amaral já é uma operação digital relevante.",
  // a palavra abaixo recebe destaque no Hero
  destaque: "relevante",
  lede:
    "A marca possui e-commerce ativo, audiência consolidada, operação comercial estruturada e faturamento mensal acima de R$ 1M.\n\n" +
    "O momento não parece ser de “começar do zero”, mas de organizar a camada que sustenta aquisição, dados, mensuração e continuidade operacional.",
};

export const teseOperacao = {
  eyebrow: "tese da operação",
  titulo: "A loja pode mudar. A inteligência de aquisição não pode resetar.",
  lede:
    "Quando uma empresa migra de plataforma, muita coisa muda:\n" +
    "front; checkout; integrações; tags; eventos; pixels; histórico; forma de medir resultado.\n\n" +
    "O problema não é mudar de plataforma.\n" +
    "O problema é mudar sem proteger a camada que alimenta mídia, mensuração e decisão.",
  tesePrincipal:
    "Construir uma fundação de dados e aquisição desacoplada da plataforma atual, capaz de sustentar Google, Meta, eventos, CAPI, deduplicação e mensuração antes, durante e depois de uma eventual migração.",
};

// Diagrama central: a camada de sinal e propriedade do
// operador, fica antes da fronteira de plataforma, e
// reconecta a qualquer plataforma (atual ou futura).
export const diagrama = {
  label: "a camada que sobrevive a migracao",
  fontes: ["Google Ads", "Meta Ads", "Trafego organico"],
  camada: {
    titulo: "Camada de sinal",
    posse: "propriedade do operador",
    linhas: [
      { t: "Tracking server-side", s: "CAPI + Pixel / deduplicacao / EMQ" },
      { t: "Historico de conversao", s: "portavel entre plataformas" },
    ],
  },
  fronteira: "fronteira de plataforma",
  plataformaAtual: { nome: "Olist / loja atual", nota: "estado hoje" },
  plataformaFutura: {
    nome: "Plataforma futura",
    nota: "se a migracao ocorrer",
  },
  resultado: ["Operacao", "continua", "sem reset"],
};

export const diagnostico: DiagItem[] = [
  {
    titulo: "Borda / CDN",
    descricao: "Cloudflare no domínio com www. Boa camada de performance e proteção.",
    status: "ok",
    statusLabel: "saudável",
  },
  {
    titulo: "Roteamento",
    descricao: "Fly.io no domínio raiz/apex. Camada intermediária de redirecionamento.",
    status: "ok",
    statusLabel: "saudável",
  },
  {
    titulo: "Segurança",
    descricao: "HSTS, X-Frame-Options, nosniff, CSP básica. Boa higiene de frontend.",
    status: "ok",
    statusLabel: "saudável",
  },
  {
    titulo: "Tags",
    descricao: "Google Tag Manager ativo. Existe camada de rastreamento e pixels.",
    status: "ok",
    statusLabel: "saudável",
  },
  {
    titulo: "Plataforma",
    descricao: "Sinais compatíveis com e-commerce gerenciado. Operação não parece artesanal ou frágil.",
    status: "ok",
    statusLabel: "saudável",
  },
];

export const diagnosticoNota =
  "Sinais detectados: Cloudflare, cookie __cf_bm, Google Tag Manager, HTML5, assinatura PoweredBy[Californio], HSTS, X-Frame-Options e X-XSS-Protection no domínio canônico com www.";

export const operacao: OpItem[] = [
  {
    ordem: "01",
    titulo: "Auditoria de tags e acesso",
    descricao:
      "Mapeamento de quem controla GTM, Business Manager e " +
      "contas de midia hoje. Clareza antes de qualquer mudanca.",
    dependeDe: null,
  },
  {
    ordem: "02",
    titulo: "Conversions API + deduplicacao",
    descricao:
      "Eventos de conversao passam a ser enviados tambem pelo " +
      "servidor, reduzindo dependencia de cookie de navegador " +
      "e unificando o mesmo evento reportado por pixel e servidor.",
    dependeDe: "01",
  },
  {
    ordem: "03",
    titulo: "Gestao de trafego Google e Meta",
    descricao:
      "Campanhas operadas sobre a base de sinal ja corrigida. " +
      "O algoritmo otimiza com dado real, nao estimado.",
    dependeDe: "02",
  },
  {
    ordem: "04",
    titulo: "Supervisao tecnica da migracao",
    descricao:
      "Se a troca de plataforma se concretizar, a camada de " +
      "sinal ja esta pronta para ser reconectada sem perda de " +
      "historico.",
    dependeDe: "02",
  },
];

export const roadmap: RoadmapItem[] = [
  {
    periodo: "mes 1 a 3",
    titulo: "Fundacao de dados",
    descricao: "CAPI, deduplicacao e auditoria de tags em producao.",
    fase: "ativo",
    faseLabel: "em operacao",
  },
  {
    periodo: "mes 4 a 9",
    titulo: "Captacao inteligente",
    descricao:
      "Identificacao de intencao de compra, registro e " +
      "organizacao de follow-up. Sem caracter de chatbot generico.",
    fase: "proximo",
    faseLabel: "proxima etapa",
  },
  {
    periodo: "mes 10 a 16",
    titulo: "Automacao de relacionamento",
    descricao:
      "Confirmacoes e reativacao de contatos rodando de forma " +
      "automatica, com supervisao humana nos pontos criticos.",
    fase: "roadmap",
    faseLabel: "roadmap",
  },
  {
    periodo: "mes 17 a 24",
    titulo: "Continuidade na migracao",
    descricao:
      "Caso a troca de plataforma ocorra, a operacao migra " +
      "junto. Sem perda de historico ou desempenho.",
    fase: "roadmap",
    faseLabel: "roadmap",
  },
];

export const cta = {
  titulo: "Proximo passo",
  descricao: "Alinhamento de escopo e inicio da fundacao de dados, etapa 01.",
};

export const planoAuditoria = {
  titulo: "O que precisa ser auditado:",
  itens: [
    "Quem controla GTM, Meta Business Manager, Google Ads, GA4 e acessos críticos.",
    "Se eventos estão duplicados, ausentes ou divergentes.",
    "Quais scripts e widgets estão ativos por necessidade real.",
    "Qual ferramenta é a fonte confiável de conversão, receita e recompra.",
    "O que pertence à plataforma atual e o que pode sobreviver a uma migração."
  ]
};
