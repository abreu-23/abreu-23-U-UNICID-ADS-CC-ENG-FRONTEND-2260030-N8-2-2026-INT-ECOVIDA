// Respostas do EcoBot por palavras-chave (sem IA e sem custo).
// Para ligar uma IA no futuro, basta trocar a função responder()
// mantendo o mesmo formato de retorno: { texto, links }.

const RESPOSTAS = [
  {
    palavras: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "eae", "hello"],
    texto:
      "Olá! Eu sou o EcoBot. Posso ajudar com pontos de coleta, separação do lixo, economia de água e energia e os projetos do portal. O que você quer saber?",
    links: [],
  },
  {
    palavras: ["ponto", "pontos", "coleta", "ecoponto", "onde descartar", "onde levar", "onde jogar", "descartar", "mapa"],
    texto:
      "Temos 4 pontos de coleta em São Paulo: Ecoponto Vila Mariana (plástico, papel, vidro e metal), Cooperativa Reviver — Tatuapé (eletrônicos e óleo), Ponto Verde Pinheiros (pilhas, baterias e lâmpadas) e Feira Consciente Ipiranga (orgânicos, aos sábados).",
    links: [{ href: "midia.html#mapa", rotulo: "Ver o mapa e os endereços" }],
  },
  {
    palavras: ["separar", "separacao", "reciclar", "reciclavel", "reciclaveis", "reciclagem", "lixo", "residuo", "residuos"],
    texto:
      "Use três recipientes: recicláveis secos (papel, plástico, vidro e metal), orgânicos (cascas e restos de comida) e rejeito (papel higiênico, fraldas). Tire o excesso de comida das embalagens: uma passada de água basta.",
    links: [{ href: "noticias.html#reduza-e-recicle", rotulo: "Ver as dicas de reciclagem" }],
  },
  {
    palavras: ["pilha", "pilhas", "bateria", "baterias", "lampada", "lampadas", "eletronico", "eletronicos", "celular", "computador"],
    texto:
      "Pilhas, baterias e lâmpadas não vão no lixo comum: leve ao Ponto Verde Pinheiros (Av. Faria Lima, 2100). Eletrônicos podem ir para a Cooperativa Reviver — Tatuapé (Rua Cesário Galero, 300).",
    links: [{ href: "midia.html#mapa", rotulo: "Ver todos os pontos de coleta" }],
  },
  {
    palavras: ["oleo", "gordura", "fritura"],
    texto:
      "Guarde o óleo de cozinha usado em uma garrafa PET bem fechada e leve à Cooperativa Reviver — Tatuapé. Nunca jogue na pia: um litro de óleo contamina milhares de litros de água.",
    links: [{ href: "midia.html#mapa", rotulo: "Ver os pontos de coleta" }],
  },
  {
    palavras: ["organico", "organicos", "compostagem", "composteira", "adubo", "casca", "cascas"],
    texto:
      "Restos de comida viram adubo na compostagem. Você pode montar uma composteira em casa ou levar os orgânicos à Feira Consciente Ipiranga, aos sábados.",
    links: [{ href: "projetos.html#hortas-comunitarias", rotulo: "Conhecer as hortas comunitárias" }],
  },
  {
    palavras: ["agua", "banho", "torneira", "chuva", "conta de agua"],
    texto:
      "Para economizar água: banho de até 5 minutos, torneira fechada ao escovar os dentes e ao ensaboar a louça, e água da chuva guardada para regar plantas e limpar o quintal.",
    links: [{ href: "noticias.html#lar-sustentavel", rotulo: "Ver as dicas para o lar" }],
  },
  {
    palavras: ["energia", "luz", "conta de luz", "lampada led", "led", "stand-by", "standby", "tomada"],
    texto:
      "Para economizar energia: troque lâmpadas por LED, tire da tomada aparelhos em stand-by e lave roupa só com a máquina cheia.",
    links: [{ href: "noticias.html#lar-sustentavel", rotulo: "Ver as dicas para o lar" }],
  },
  {
    palavras: ["bicicleta", "bike", "pedalar", "transporte", "onibus", "metro", "carona", "mobilidade"],
    texto:
      "Para trajetos curtos, experimente a bicicleta; nos longos, combine com metrô ou trem. O projeto Mobilidade Ativa faz pedaladas em grupo para quem está começando.",
    links: [{ href: "projetos.html#mobilidade-ativa", rotulo: "Conhecer a Mobilidade Ativa" }],
  },
  {
    palavras: ["projeto", "projetos", "participar", "voluntario", "voluntaria", "voluntariado", "mutirao", "horta", "feira", "ajudar"],
    texto:
      "Temos 5 projetos abertos a qualquer pessoa: Coleta Seletiva de Bairro, Hortas Comunitárias, Mutirões de Limpeza, Feiras de Economia Solidária e Mobilidade Ativa. Todos são gratuitos.",
    links: [
      { href: "projetos.html", rotulo: "Ver os projetos" },
      { href: "contato.html", rotulo: "Quero participar" },
    ],
  },
  {
    palavras: ["impacto", "numeros", "resultado", "resultados", "quantos", "kg", "quilos"],
    texto:
      "A rede EcoVida soma +5.000 pessoas engajadas e 128.430 kg de materiais reciclados. Esses números são ilustrativos nesta versão do projeto.",
    links: [{ href: "impacto.html", rotulo: "Ver os dados de impacto" }],
  },
  {
    palavras: ["acessibilidade", "barreira", "leitor de tela", "teclado", "deficiencia", "contraste"],
    texto:
      "O portal busca o nível AA da WCAG 2.1: funciona com teclado, leitor de tela e zoom. Se encontrar alguma barreira, conte para a gente pelo formulário de contato.",
    links: [
      { href: "acessibilidade.html", rotulo: "Ver os recursos de acessibilidade" },
      { href: "contato.html#formulario-contato", rotulo: "Relatar uma barreira" },
    ],
  },
  {
    palavras: ["contato", "falar", "email", "e-mail", "mensagem", "telefone", "parceria"],
    texto: "Você pode falar com a equipe pelo formulário de contato. Respondemos pelo e-mail que você informar.",
    links: [{ href: "contato.html#formulario-contato", rotulo: "Ir para o formulário de contato" }],
  },
  {
    palavras: ["privacidade", "dados", "lgpd", "cookie", "cookies"],
    texto:
      "Só recebemos os dados que você digita nos formulários, e eles servem apenas para responder você. As perguntas feitas ao EcoBot não são guardadas.",
    links: [{ href: "privacidade.html", rotulo: "Ler a Política de Privacidade" }],
  },
  {
    palavras: ["sobre", "quem", "equipe", "unicid", "missao", "objetivo"],
    texto:
      "O EcoVida Urbana é um projeto de estudantes da UNICID que une educação ambiental, mudança de hábitos e inclusão nas grandes cidades.",
    links: [{ href: "sobre.html", rotulo: "Conhecer o projeto e a equipe" }],
  },
];

const NAO_ENTENDI = {
  texto:
    "Ainda não sei responder isso. Tente perguntar sobre pontos de coleta, separação do lixo, água, energia ou os projetos. Se preferir, fale com a equipe.",
  links: [{ href: "contato.html#formulario-contato", rotulo: "Falar com a equipe" }],
};

// Minúsculas e sem acentos, para "Óleo" e "oleo" serem iguais
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ");
}

// Escolhe a resposta com mais palavras-chave presentes na pergunta
export function responder(pergunta) {
  const texto = ` ${normalizar(pergunta)} `;
  let melhor = null;
  let maiorPontuacao = 0;

  for (const item of RESPOSTAS) {
    const pontos = item.palavras.filter((palavra) => texto.includes(` ${palavra} `)).length;
    if (pontos > maiorPontuacao) {
      maiorPontuacao = pontos;
      melhor = item;
    }
  }

  const resposta = melhor || NAO_ENTENDI;
  return { texto: resposta.texto, links: resposta.links };
}
