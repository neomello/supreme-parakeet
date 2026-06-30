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
  lista?: string[];
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
  titulo: "O momento não é de “recomeçar”, mas de organizar a camada que sustenta aquisição, dados, mensuração e continuidade operacional.",
  // a palavra abaixo recebe destaque no Hero
  destaque: "organizar",
  lede:
    "Mari Amaral já é uma operação digital relevante. A marca possui e-commerce ativo, audiência consolidada, operação comercial estruturada e faturamento mensal acima de R$ 1M.",
};

export const leituraInicial = {
  titulo: "Leitura inicial",
  pontos: [
    { label: "Domínio", valor: "usemariamaral.com.br" },
    { label: "Plataforma atual", valor: "Olist / VNDA" },
    { label: "Borda técnica", valor: "Cloudflare no www + Fly.io no domínio raiz" },
    { label: "Cenário", valor: "Possível migração de plataforma em avaliação" },
    { label: "Risco central", valor: "Perder histórico, sinal e desempenho durante a troca" },
  ]
};

export const visaoGeralNota =
  "A estrutura do projeto já parte dessa premissa: fechar uma operação de 24 meses com a Mari Amaral, evitando o erro de apresentar soluções demais e separando a proposta em duas camadas — a que fecha agora e a que sustenta a visão de longo prazo.";

export const teseOperacao = {
  eyebrow:
    "A CAMADA QUE SOBREVIVE // propriedade operacional, não dependência da loja atual",
  titulo: "O site é a vitrine. O sinal é a memória da operação.",
  lede:
    "A loja atual pode mudar.\\nA plataforma pode mudar.\\nO layout pode mudar.\\nO checkout pode mudar.\\n\\n" +
    "Mas a camada de sinal precisa continuar reconhecendo quem chega, quem demonstra intenção, quem adiciona ao carrinho, quem compra e quais campanhas geram resultado.",
  tesePrincipal:
    "A tese de continuidade é o eixo principal do projeto: a camada de sinal de conversão deve atravessar uma eventual migração de plataforma sem reset, justificando uma operação de longo prazo.",
};

export const diagrama = {
  label: "a camada que sobrevive a migracao",
  fontes: ["Google Ads", "Meta Ads", "Tráfego orgânico", "WhatsApp"],
  camada: {
    titulo: "Camada de sinal",
    posse: "propriedade do operador",
    linhas: [
      { t: "Fundação", s: "Pixel + Conversions API" },
      { t: "Precisão", s: "Deduplicação de eventos / EMQ" },
      { t: "Eventos", s: "Produto, carrinho, checkout, compra e contato" },
      { t: "Histórico", s: "Organizado e preparado para nova plataforma" },
    ],
  },
  fronteira: "fronteira de plataforma",
  destinos: [
    { nome: "Loja atual / Olist", nota: "estado hoje" },
    { nome: "Plataforma futura", nota: "se a migração ocorrer" },
    { nome: "Dashboard / decisão", nota: "inteligência preservada" },
  ],
  resultado: [
    "Menos dependência do navegador",
    "Menos perda de sinal",
    "Mais consistência para mídia",
    "Continuidade para decisão comercial",
  ],
};

export const diagnostico: DiagItem[] = [
  {
    titulo: "Borda / CDN",
    descricao:
      "Cloudflare no domínio com www. Boa camada de performance e proteção.",
    status: "ok",
    statusLabel: "saudável",
  },
  {
    titulo: "Roteamento",
    descricao:
      "Fly.io no domínio raiz/apex. Camada intermediária de redirecionamento.",
    status: "ok",
    statusLabel: "saudável",
  },
  {
    titulo: "Segurança",
    descricao:
      "HSTS, X-Frame-Options, nosniff, CSP básica. Boa higiene de frontend.",
    status: "ok",
    statusLabel: "saudável",
  },
  {
    titulo: "Tags",
    descricao:
      "Google Tag Manager ativo. Existe camada de rastreamento e pixels.",
    status: "ok",
    statusLabel: "saudável",
  },
  {
    titulo: "Plataforma",
    descricao:
      "Sinais compatíveis com e-commerce gerenciado. Operação não parece artesanal ou frágil.",
    status: "ok",
    statusLabel: "saudável",
  },
];

export const diagnosticoNota =
  "Sinais detectados: Cloudflare, cookie __cf_bm, Google Tag Manager, HTML5, assinatura PoweredBy[Californio], HSTS, X-Frame-Options e X-XSS-Protection no domínio canônico com www.";

export const operacaoIntro = {
  titulo: "O QUE FECHA AGORA — camada 1 / primeiros 90 dias",
  deck: "Primeiro, corrigir a base que alimenta mídia e decisão. A primeira etapa não vende um pacote de soluções futuras. Ela organiza o que precisa funcionar agora para que aquisição, mensuração e tráfego operem com mais segurança.",
  nota: "A arquitetura de venda definida separa claramente a camada que fecha contrato agora — tráfego, fundação de dados, CAPI, deduplicação, EMQ e auditoria.",
};

export const operacao: OpItem[] = [
  {
    ordem: "01",
    titulo: "Auditoria de acessos e tags",
    descricao: "Mapear quem controla as contas críticas da operação:",
    lista: [
      "GTM",
      "Meta Business Manager",
      "Google Ads",
      "GA4",
      "Domínio e plataforma",
      "Ferramentas de atribuição",
    ],
    dependeDe: null,
  },
  {
    ordem: "02",
    titulo: "Fundação de dados",
    descricao:
      "Validar eventos críticos, corrigir duplicidades, organizar UTMs e estruturar a base de mensuração.",
    dependeDe: "01",
  },
  {
    ordem: "03",
    titulo: "Conversions API + deduplicação",
    descricao:
      "Enviar eventos também pelo servidor, reduzindo dependência de cookie de navegador e aumentando consistência entre pixel e servidor.",
    dependeDe: "02",
  },
  {
    ordem: "04",
    titulo: "Gestão de tráfego Google e Meta",
    descricao:
      "Operar campanhas sobre uma base de sinal mais limpa, para que o algoritmo otimize com dados mais confiáveis.",
    dependeDe: "03",
  },
  {
    ordem: "05",
    titulo: "Continuidade técnica durante eventual migração",
    descricao:
      "Caso a troca de plataforma avance, preservar a camada de sinal e orientar a reconexão sem perda operacional.",
    dependeDe: "03",
  },
];

export const roadmapIntro = {
  titulo: "03 — evolução por maturidade",
  deck: "Depois da fundação, a operação evolui por camadas. A proposta começa pela base: dados, eventos, acessos e mídia. Depois, a operação pode avançar conforme maturidade, sem depender da plataforma atual e sem vender tudo de uma vez.",
};

export const roadmap: RoadmapItem[] = [
  {
    fase: "ativo",
    faseLabel: "AGORA",
    periodo: "Fase 1",
    titulo: "Fundação de dados",
    descricao:
      "Auditoria de acessos, GTM, eventos, CAPI, deduplicação e qualidade de sinal",
  },
  {
    fase: "proximo",
    faseLabel: "PRÓXIMO",
    periodo: "Fase 2",
    titulo: "Aquisição mais inteligente",
    descricao:
      "Google e Meta operando sobre dados mais confiáveis, com leitura clara de campanha, canal e conversão",
  },
  {
    fase: "roadmap",
    faseLabel: "ROADMAP",
    periodo: "Fase 3",
    titulo: "Captação inteligente",
    descricao:
      "Identificação de intenção de compra, registro de contatos e organização de follow-up",
  },
  {
    fase: "roadmap",
    faseLabel: "ROADMAP",
    periodo: "Fase 4",
    titulo: "Relacionamento e recompra",
    descricao:
      "Ativações por comportamento, histórico de compra, cashback, indicação e recompra",
  },
  {
    fase: "roadmap",
    faseLabel: "ROADMAP",
    periodo: "Fase 5",
    titulo: "Continuidade de plataforma",
    descricao:
      "Reconexão da camada de sinal caso a loja migre, reduzindo perda de histórico e desempenho",
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
    "O que pertence à plataforma atual e o que pode sobreviver a uma migração.",
  ],
};
