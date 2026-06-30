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
  papel: "Arquitetura de Aquisicao e Dados",
  horizonte: "operacao continua / 24 meses",
};

export const cliente: Cliente = {
  nome: "Mari Amaral",
  dominio: "usemariamaral.com.br",
  faturamento: "R$ 1M+/mes",
  plataforma: "Olist",
  migracao: "em avaliacao",
};

export const tese = {
  eyebrow: "diagnostico tecnico / proposta de operacao",
  titulo: "A loja muda de plataforma. O sinal de quem compra, nao.",
  // a palavra abaixo recebe destaque no Hero
  destaque: "sinal",
  lede:
    "Leitura da infraestrutura publica de " +
    "usemariamaral.com.br e plano de operacao de aquisicao " +
    "e dados desenhado para atravessar uma eventual troca " +
    "de plataforma sem perda de historico ou desempenho.",
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
    titulo: "Borda e cache",
    descricao:
      "Dominio canonico atras de Cloudflare, com cabecalhos " +
      "de seguranca bem configurados.",
    status: "ok",
    statusLabel: "saudavel",
  },
  {
    titulo: "Roteamento do dominio",
    descricao:
      "Camada propria conduz o redirecionamento ate o " +
      "endereco final com www.",
    status: "ok",
    statusLabel: "saudavel",
  },
  {
    titulo: "Tags e rastreamento",
    descricao:
      "Google Tag Manager ativo. De fora nao se ve se ha " +
      "duplicidade de eventos ou perda de sinal.",
    status: "watch",
    statusLabel: "auditar",
  },
  {
    titulo: "Governanca de acesso",
    descricao:
      "Assinatura de fornecedor visivel no site, sem indicar " +
      "quem detem controle tecnico hoje.",
    status: "watch",
    statusLabel: "auditar",
  },
];

export const diagnosticoNota =
  "leitura baseada em varredura publica de cabecalhos HTTP. " +
  "nao substitui auditoria interna de plataforma, checkout " +
  "e acessos.";

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
