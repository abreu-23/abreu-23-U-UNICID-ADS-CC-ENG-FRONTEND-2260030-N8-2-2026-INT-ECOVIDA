# 🌿 Portal EcoVida Urbana — Guia de Sustentabilidade Diária

> **Transforme sua Cidade, Comece por Você.**
> Portal educativo sobre reciclagem, consumo consciente e economia de água e energia, com pontos de coleta em São Paulo e foco em acessibilidade digital.

**Site no ar:** https://ecovida2026.up.railway.app/

| | |
|---|---|
| **Instituição** | UNICID – Universidade Cidade de São Paulo |
| **Curso** | Curso Superior de Informática |
| **Disciplina** | Front-End — Prof. Paulo Fratta |
| **Equipe** | Luccas Abreu, Pedro Henrique Pereira da Silva, Pedro Henrique da Silva Alves, Ruan Ferreira Silva |
| **Entrega** | 09/11/2026, com o site no ar |

---

## 📑 Sumário

1. [Sobre o projeto](#-sobre-o-projeto)
2. [Objetivos](#-objetivos)
3. [Público-alvo](#-público-alvo)
4. [Páginas do site](#-páginas-do-site)
5. [EcoBot e barra de acessibilidade](#-ecobot-e-barra-de-acessibilidade)
6. [Mapa do site e navegação](#-mapa-do-site-e-navegação)
7. [Requisitos não funcionais](#-requisitos-não-funcionais)
8. [Identidade visual](#-identidade-visual)
9. [Tecnologias](#-tecnologias)
10. [Estrutura de pastas](#-estrutura-de-pastas)
11. [Como executar](#-como-executar)
12. [Equipe e responsabilidades](#-equipe-e-responsabilidades)
13. [Fluxo de trabalho e uso de IA](#-fluxo-de-trabalho-e-uso-de-ia)
14. [Cronograma](#-cronograma)
15. [Riscos e restrições](#-riscos-e-restrições)
16. [Critérios de aceitação](#-critérios-de-aceitação)
17. [Aprovação do escopo](#-aprovação-do-escopo)
18. [Créditos](#-créditos)

---

## 🌎 Sobre o projeto

Nas grandes cidades, o descarte incorreto de resíduos, o desperdício de água e o consumo excessivo de energia agravam problemas ambientais e sociais. O quadro piora em regiões com pouca coleta seletiva e pouca educação ambiental. Grande parte da população não sabe onde descartar recicláveis nem como pequenas mudanças de hábito impactam o meio ambiente.

O **Portal EcoVida Urbana** une **educação ambiental, mudança de comportamento e inclusão social**. Ao facilitar o acesso à informação e a pontos de coleta próximos, ele ajuda a reduzir a geração de resíduos e amplia a participação cidadã. Um indicador (ilustrativo) de materiais coletados torna esse impacto mais visível para o usuário.

## 🎯 Objetivos

**Geral:** educar o máximo de pessoas sobre práticas sustentáveis do dia a dia, facilitar o acesso a pontos de coleta de reciclagem e demonstrar o impacto coletivo dessas ações.

**Específicos:**

- Apresentar conteúdo educativo sobre reciclagem, consumo consciente e economia de água e energia.
- Disponibilizar um mapa e uma lista de pontos de coleta de materiais recicláveis.
- Exibir indicadores (ilustrativos) de materiais coletados, para reforçar o senso de impacto coletivo.
- Garantir acessibilidade digital para pessoas com deficiência em todas as páginas.
- Divulgar projetos, notícias e dados de impacto socioambiental.
- Tirar dúvidas rápidas com o assistente **EcoBot**.

## 👥 Público-alvo

- Pessoas interessadas em adotar hábitos mais sustentáveis.
- Crianças, adolescentes e adultos, sem restrição de gênero ou renda.
- Inicialmente, a cidade de **São Paulo**, com possibilidade de expansão.
- **Público prioritário:** pessoas com deficiência visual, motora, auditiva e cognitiva, com navegação por teclado, leitores de tela e contraste adequado.

---

## 🗂 Páginas do site

São **10 páginas HTML5** do escopo, mais 2 páginas de apoio, ligadas por um cabeçalho e um rodapé comuns. Cada uma cumpre uma etapa da jornada do visitante: descobrir o tema, aprender práticas, encontrar onde reciclar, ver o impacto e entrar em contato.

| # | Arquivo | Função | Conteúdo principal |
|---|---|---|---|
| 1 | `index.html` | Porta de entrada | Hero, 3 categorias, destaque da semana, pontos de coleta, estatísticas, newsletter, chamada para impacto |
| 2 | `sobre.html` | Quem somos e por que o projeto existe | História, missão, visão, valores (um cartão por valor) e equipe |
| 3 | `projetos.html` | Iniciativas práticas | Um `article` por projeto: coleta seletiva, hortas comunitárias, mutirões de limpeza, feiras solidárias e mobilidade ativa, com foto, local, acessibilidade e chamada para participar |
| 4 | `impacto.html` | Resultado coletivo em dados | Tabelas com legenda: materiais reciclados por tipo, economia de água e energia, pessoas engajadas por projeto (valores ilustrativos) |
| 5 | `acessibilidade.html` | Medidas de inclusão | Compromisso WCAG, recursos aplicados, atalhos de teclado, pontos de coleta acessíveis, limitações conhecidas e perguntas frequentes |
| 6 | `galeria.html` | Registros visuais das ações | `figure` + `figcaption` por tema, `alt` descritivo, crédito da fonte e carregamento tardio |
| 7 | `midia.html` | Vídeo, áudio e mapa | Transcrição do vídeo e roteiro do podcast (arquivos em produção), mapa do OpenStreetMap e lista dos pontos de coleta em texto |
| 8 | `noticias.html` | Notícias, artigos e dicas | Destaque "Hortas Urbanas", dicas das 3 categorias da home, notícias da rede e newsletter |
| 9 | `contato.html` | Contato e adesão ao movimento | Formulário com validação HTML5 enviado por e-mail, outros canais e equipe |
| 10 | `orcamento_hospedagem.html` | Decisão técnica de publicação | Comparativo de 3 hospedagens e 3 domínios, com tabela e justificativa (acesso pelo rodapé) |
| — | `privacidade.html` | Política de Privacidade (LGPD) | Dados coletados, finalidade, compartilhamento e direitos (acesso pelo rodapé e pelos formulários) |
| — | `obrigado.html` | Confirmação de envio | Página de retorno após enviar um formulário (`noindex`, fora do menu) |

### Destaques da página inicial

| Seção | Como funciona | Objetivo atendido |
|---|---|---|
| **Hero** | Dois botões: "Comece Agora" (→ `#categorias`) e "Explorar Soluções" (→ `projetos.html`). Sobreposição escura garante o contraste. | Apresentar o portal e orientar o primeiro clique |
| **Categorias** | Lar Sustentável (→ `noticias.html#lar-sustentavel`), Transporte Urbano (→ `projetos.html#mobilidade-ativa`) e Reduza e Recicle (→ `#pontos-coleta`). | Conteúdo educativo |
| **Destaque da semana** | "Hortas Urbanas: Como cultivar em pequenos espaços", com botão "Ler Artigo Completo" (→ `noticias.html#hortas-urbanas`). | Divulgar notícias socioambientais |
| **Pontos de coleta** | Lista de pontos em São Paulo com endereço e materiais aceitos. | Indicar onde reciclar |
| **Estatísticas** | +5.000 pessoas engajadas · +200 dicas publicadas · 128.430 kg reciclados (valores fixos e ilustrativos). | Reforçar o impacto coletivo |
| **Newsletter** | Campo `type="email"` com `required` e `label`, enviado ao e-mail da equipe. | Manter o visitante engajado |
| **Chamada final** | Botão "Ver página de impacto" (→ `impacto.html`). | Divulgar os dados de impacto |

### Formulários

A validação usa **somente HTML5**: se algum campo estiver inválido, o navegador bloqueia o envio e mostra o erro no próprio campo. O envio é real: o serviço gratuito **FormSubmit** recebe os dados e os encaminha ao e-mail da equipe (uso aceito pelo professor). O endereço de e-mail não aparece no código; o formulário usa o código secreto gerado na ativação do FormSubmit. Após o envio, a pessoa volta para `obrigado.html`.

| Campo | Tipo | Validação | Finalidade |
|---|---|---|---|
| Nome completo | `text` | `required` | Identificar o contato |
| E-mail | `email` | `required` + formato verificado | Permitir o retorno da equipe |
| Telefone | `tel` | `pattern` `(11) 90000-0000` (opcional) | Contato alternativo |
| Data da ação de interesse | `date` | data válida (opcional) | Indicar quando quer participar |
| Nº de participantes | `number` | `min` e `max` (opcional) | Tamanho do grupo |
| Assunto | `select` | `required` | Dúvida, parceria, participar de ação ou relatar barreira |
| Mensagem | `textarea` | `required` + `minlength` | Detalhar o pedido |
| Aceite de privacidade | `checkbox` | `required` | Registrar o consentimento (LGPD) |

---

## 🤖 EcoBot e barra de acessibilidade

Os dois recursos usam JavaScript, mas o site **funciona igual sem ele**: os botões só aparecem quando o script carrega.

**EcoBot** — assistente de dúvidas presente em todas as páginas (botão "Dúvidas? EcoBot", no canto inferior direito).
- O widget (`public/js/ecobot.js`) envia a pergunta para a rota `POST /api/assistente` do servidor.
- O servidor responde a partir de um FAQ por palavras-chave (`lib/faq.js`): pontos de coleta, separação do lixo, pilhas, óleo, compostagem, água, energia, mobilidade, projetos, impacto, acessibilidade, contato e privacidade. Sem IA e sem custo.
- As perguntas não são guardadas nem registradas.
- Acessível: `aria-expanded` no botão, respostas lidas pelo leitor de tela (`aria-live`), `Esc` fecha e devolve o foco.
- Para usar uma IA no futuro, basta trocar a função `responder()` de `lib/faq.js`, com a chave guardada só no `.env` e nas Variables do Railway.

**Barra de acessibilidade** — faixa no topo de todas as páginas (`public/js/acessibilidade.js`).
- **Ouvir a página:** lê o conteúdo principal em voz alta (API `speechSynthesis`, em português). O botão vira "Parar leitura". Só aparece se o navegador tiver suporte a voz.
- **Alto contraste:** preto, branco e amarelo (contraste acima de 13:1). A escolha fica salva entre as páginas.

---

## 🧭 Mapa do site e navegação

![Mapa do site EcoVida Urbana](docs/mapa_do_site.png)

A estrutura é **plana**: pelo menu, qualquer página está a um clique de todas as outras. Os grupos abaixo são temáticos e não criam níveis de navegação.

```
index.html
├── Conhecer o projeto ──── sobre.html · projetos.html · noticias.html
├── Resultados e inclusão ── impacto.html · acessibilidade.html
├── Imagens e mídia ─────── galeria.html · midia.html
└── Contato e gestão ────── contato.html · orcamento_hospedagem.html · privacidade.html (via rodapé)
```

**Cabeçalho fixo:** logo (→ home), menu com 9 links (Início, Sobre, Projetos, Impacto, Acessibilidade, Galeria, Mídia, Notícias e Contato) e botão "Junte-se ao Movimento" (→ contato). A página atual recebe `aria-current="page"`. Antes do cabeçalho vêm o link "Pular para o conteúdo principal" e a barra de acessibilidade.

**Rodapé:** Mapa do site, Sobre nós, Orçamento de hospedagem, Política de Privacidade, Contato e ícones de Instagram, Facebook e LinkedIn (ilustrativos).

### Fluxo de navegação

| Origem | Elemento | Destino |
|---|---|---|
| Qualquer página | Logo e item "Início" | `index.html` |
| Qualquer página | Menu principal | Página correspondente |
| Qualquer página | Botão "Junte-se ao Movimento" | `contato.html` |
| Qualquer página | Rodapé: "Orçamento de hospedagem" / "Política de Privacidade" | `orcamento_hospedagem.html` / `privacidade.html` |
| Home — hero | "Comece Agora" / "Explorar Soluções" | `#categorias` / `projetos.html` |
| Home — categorias | Lar Sustentável / Transporte Urbano / Reduza e Recicle | `noticias.html#lar-sustentavel` / `projetos.html#mobilidade-ativa` / `#pontos-coleta` |
| Home — destaque | "Ler Artigo Completo" | `noticias.html#hortas-urbanas` |
| Home — chamada final | "Ver página de impacto" | `impacto.html` |
| Formulários | Enviar | FormSubmit → `obrigado.html` |
| Páginas internas | Chamadas para agir | `contato.html` |

---

## ✅ Requisitos não funcionais

As medidas valem para todas as páginas, que compartilham o mesmo CSS, cabeçalho e rodapé. Os resultados dos testes ficam nas evidências, em [`docs/`](docs/).

### ♿ Acessibilidade (meta: WCAG 2.1 AA)
A Lei Brasileira de Inclusão (Lei nº 13.146/2015, art. 63) serve de referência.

- **Semântica:** `header`, `nav`, `main`, `section`, `article` e `footer`; um único `h1` e `h2`/`h3` sem pular níveis.
- **Imagens:** `alt` descritivo nas informativas, `alt=""` nas decorativas e SVGs com `aria-hidden="true"`.
- **Contraste:** `#333333` sobre `#F4F6F0` (11,6:1), botões amarelos com texto escuro (11,2:1) e texto sobre o verde menta em `#0B3322` (5,6:1). O mínimo é 4,5:1, e nenhuma informação depende só da cor. Modo alto contraste opcional.
- **Teclado:** Tab, Shift+Tab e Enter em tudo; ordem de foco igual à visual; foco de 3 px (`:focus-visible`) e sem armadilhas de foco.
- **ARIA:** `lang="pt-BR"`, `aria-label` no `nav` e `aria-labelledby` nas seções. ARIA só entra quando o HTML nativo não resolve.
- **Formulários:** `label for`, "(obrigatório)" escrito no rótulo, `autocomplete` em nome, e-mail e telefone.
- **Multimídia:** sem autoplay, com `controls`, legenda (`track`) ou transcrição; `iframe` com `title`.
- **Leitura:** fontes em `rem` (zoom até 200%), corpo de 16 px, linhas de ~60 caracteres, respeito a `prefers-reduced-motion` e leitura por voz opcional.

### 🌱 Sustentabilidade digital
O próprio site segue o que ensina.

- `loading="lazy"` abaixo da dobra e ícones em SVG embutido.
- CSS único, sem frameworks; JavaScript pequeno e só onde agrega (EcoBot e barra de acessibilidade), carregado com `defer`.
- Conteúdo aberto, sem cadastro obrigatório, que funciona em celulares simples e conexões lentas.
- Comparativo de hospedagem verde (energia renovável, compensação de carbono, localização do data center), com apoio do Green Web Check.
- **Pendente:** baixar as fotos do Pixabay para `img/` em WebP de até 200 KB (issue #8). Hoje elas vêm do CDN do Pixabay.

### 📱 Responsividade
- `meta viewport`, contêiner de até 1160 px, Grid e Flexbox, medidas em `rem`, `%` e `fr`, títulos com `clamp()`.
- **Até 960 px:** o menu desce para uma linha própria e os blocos de dois lados viram uma coluna.
- **Até 860 px:** cartões, estatísticas e rodapé empilham.
- Imagens com `max-width: 100%` e `object-fit: cover`; vídeo e iframe em 16:9.
- Tabelas com `overflow-x` próprio, campos de formulário na largura total e botões com ~44 px de altura.

### ⚡ Desempenho (meta: Lighthouse ≥ 90 em todas as categorias)
- `width` e `height` declarados em cada imagem, para evitar saltos de layout.
- Um único CSS, organizado por seções, com variáveis e sem regras repetidas; HTML indentado e comentado em português.
- Poppins e Inter via Google Fonts, com `preconnect` e `display=swap`.
- Mapa com `loading="lazy"`; vídeo e áudio com `preload` controlado quando forem publicados.

### 🔎 SEO básico
- `title` único por página ("Nome da página — EcoVida Urbana", até ~60 caracteres).
- `meta description` própria, com 120 a 160 caracteres.
- `lang="pt-BR"`, `meta charset`, `meta viewport` e favicon em todas as páginas.
- Textos de link que dizem o destino e nomes de arquivo em minúsculas, sem acento.
- Nenhuma página órfã: todas são alcançáveis pelo menu ou pelo rodapé.

### 🔍 Ferramentas de verificação

| Ferramenta | O que checa |
|---|---|
| W3C Validator | HTML e CSS sem erros |
| Lighthouse | Desempenho, Acessibilidade, Boas práticas e SEO |
| WebAIM Contrast Checker | Contraste dos pares de cor |
| NVDA / leitor do navegador | Leitura por leitor de tela |
| Teclado | Navegação completa sem mouse |
| DevTools (dispositivo e Rede) | Telas de 360, 768 e 1280 px; peso e requisições |
| Green Web Check | Práticas ambientais das hospedagens |

---

## 🎨 Identidade visual

**Tom de voz:** moderno, limpo, acolhedor e inspirador. Transmite esperança e ação, não pessimismo climático.

| Cor | Hex | Uso |
|---|---|---|
| 🟢 Verde Floresta (primária) | `#2D6A4F` | Header, botões de destaque, rodapé |
| 🟩 Verde Menta (secundária) | `#52B788` | Estatísticas, ícones e detalhes |
| 🟡 Amarelo Solar (CTA) | `#FFD60A` | Botões de ação principal |
| 🍏 Lima (acento) | `#B7EF53` | Tags e pequenos destaques |
| ⬜ Off-white (fundo) | `#F4F6F0` | Fundo geral |
| ⬛ Cinza-escuro (texto) | `#333333` | Texto de corpo |

- **Tipografia:** Poppins (títulos, geométrica e robusta) e Inter (corpo, alta legibilidade), via Google Fonts.
- **Elementos:** cantos arredondados, ícones de linha fina e espaçamento generoso.
- **Logotipo:** folha estilizada em círculo verde + "EcoVida Urbana" em Poppins (também usado como favicon).

---

## 🛠 Tecnologias

| Ferramenta | Uso |
|---|---|
| **HTML5 + CSS3** | Estrutura e visual de todas as páginas, sem frameworks |
| **JavaScript** | EcoBot e barra de acessibilidade (sem bibliotecas, com `defer`) |
| **Node.js + Express** | Servidor que entrega o site e responde ao EcoBot (`/api/assistente`) |
| **Railway** | Hospedagem, com deploy automático a cada merge na `main` |
| **FormSubmit** | Envio dos formulários por e-mail, sem back-end próprio |
| **Git + GitHub** | Versionamento com issues, uma branch por tarefa e pull requests |
| **W3C Validator + Lighthouse** | Validação e auditoria |

## 📁 Estrutura de pastas

```
ecovida-urbana/
├── .cursor/rules/      # regras para a IA (.mdc)
├── .github/            # modelos de issue e de pull request
├── docs/               # plano de contexto, escopo, diário de bordo e evidências
├── lib/
│   └── faq.js          # respostas do EcoBot
├── public/             # o site, servido pelo Express
│   ├── *.html          # as 12 páginas
│   ├── css/style.css   # folha de estilo única
│   ├── js/             # ecobot.js e acessibilidade.js
│   ├── assets/         # legendas (.vtt); vídeo e áudio quando publicados
│   └── favicon.svg
├── server.js           # servidor Node.js + Express
├── package.json        # dependências e script "npm start"
├── .gitignore          # ignora .env e node_modules/
└── .gitattributes      # quebras de linha padronizadas (LF)
```

## ▶️ Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou mais recente.

```bash
git clone https://github.com/abreu-23/abreu-23-U-UNICID-ADS-CC-ENG-FRONTEND-2260030-N8-2-2026-INT-ECOVIDA.git
cd abreu-23-U-UNICID-ADS-CC-ENG-FRONTEND-2260030-N8-2-2026-INT-ECOVIDA
npm install
npm start
```

Abra http://localhost:3000 no navegador. Para mudar a porta, defina a variável `PORT`.

Abrir os arquivos `.html` direto no navegador também funciona para ver as páginas, mas o EcoBot e o envio dos formulários só funcionam com o servidor rodando (ou no site publicado).

---

## 👨‍💻 Equipe e responsabilidades

| Integrante | Páginas | Funções gerais |
|---|---|---|
| **Luccas Abreu** | `index.html` | Coordenação, escopo, CSS compartilhado, cabeçalho e rodapé, repositório Git e README |
| **Pedro Henrique Pereira da Silva** | `sobre.html`, `projetos.html`, `noticias.html` | Textos do portal, créditos das imagens e revisão de português |
| **Pedro Henrique da Silva Alves** | `impacto.html`, `acessibilidade.html`, `galeria.html` | Tabela de impacto, conferência de acessibilidade e evidências de testes |
| **Ruan Ferreira Silva** | `midia.html`, `contato.html`, `orcamento_hospedagem.html` | Formulário e validação, vídeo, áudio e iframe, orçamento de hospedagem e domínio |

## 🔀 Fluxo de trabalho e uso de IA

**Fluxo no GitHub:** issue → branch → commits → pull request → revisão → merge → deploy automático no Railway.

- Uma branch por tarefa: `feat/`, `fix/`, `docs/`, `style/` ou `refactor/` (ex.: `feat/ecobot`).
- Commits em português, no imperativo, com prefixo (`feat: adiciona ...`).
- Todo PR usa o modelo com checklist (W3C, teclado, contraste, telas) e `Closes #N` para fechar a issue.
- Ninguém aprova o próprio PR: outro integrante revisa antes do merge.

**Uso de IA:** a equipe usa assistentes de IA (Claude Code) para gerar e revisar código e textos. Todo resultado é revisado e validado pela equipe antes do merge. A IA trabalha com contexto organizado:

- [`docs/plano-contexto.md`](docs/plano-contexto.md): o que é o projeto (11 seções do modelo da aula).
- [`.cursor/rules/`](.cursor/rules/): como o código deve ser feito (HTML semântico, CSS, acessibilidade, commits).

## 📅 Cronograma

| Etapa | Situação |
|---|---|
| Escopo, README e mapa do site | ✅ Concluído |
| Home (`index.html`) e CSS compartilhado | ✅ Concluído |
| As outras 9 páginas + privacidade e obrigado | ✅ Concluído |
| Publicação no Railway | ✅ Concluído |
| Plano de contexto, regras, issues e PRs (Aula 06) | ✅ Concluído |
| Servidor Express, EcoBot e barra de acessibilidade | ✅ Concluído |
| Imagens locais, menu no celular, mídia real, orçamento (issues #8 a #11) | 🔄 Em andamento |
| **Entrega final** | **09/11/2026** |

---

## ⚠️ Riscos e restrições

### Principais riscos

| Risco | Prevenção |
|---|---|
| Atraso de um integrante | Issues com responsável, aviso antecipado e redistribuição das tarefas |
| Falta de tempo na reta final | Cronograma termina antes do prazo; documentação feita junto com as páginas |
| Páginas diferentes entre si | CSS único com variáveis; cabeçalho e rodapé copiados de um modelo; regras para a IA |
| Links quebrados | Nomes de arquivo fixos e conferência de todos os links antes de cada merge |
| Erros no W3C ou na acessibilidade | Validar cada página ao terminá-la, e não só no final |
| Conflito ou perda de arquivos | Uma branch por tarefa, PR revisado e cópia no GitHub |
| Deploy quebrado | Teste local com `npm start` antes do PR; o Railway só troca a versão se o build der certo |
| Chave ou segredo vazado | `.env` no `.gitignore`; chaves só nas Variables do Railway |
| Imagens indisponíveis ou pesadas | Baixar para `img/` e comprimir (issue #8) |

### Restrições desta entrega

- Sem frameworks de UI (Bootstrap, Tailwind, React etc.).
- JavaScript só como melhoria: todo o conteúdo funciona sem ele.
- Dados de impacto **ilustrativos** e sinalizados como tal; imagens apenas do Pixabay, com crédito.
- EcoBot por FAQ, sem IA paga; a integração com IA fica como evolução opcional.

### 🔮 Próximas etapas
- Fotos locais em WebP (issue #8) e menu recolhível no celular (issue #9).
- Vídeo e episódio do podcast reais na página de Mídia (issue #10).
- Alinhar a página de orçamento com a hospedagem no Railway (issue #11).
- EcoBot com IA e contador de impacto em tempo real.

---

## 🏁 Critérios de aceitação

O site está **pronto** quando todos os itens abaixo forem atendidos e registrados nas evidências de testes.

- [ ] **Páginas e navegação:** todas as páginas abrem sem erro e se ligam pelo menu e pelo rodapé.
- [ ] **Estrutura e semântica:** `header`, `nav`, `main` e `footer`, um único `h1` e títulos em ordem.
- [ ] **Formulários validados:** contato e newsletter com `label`, `required` e `type="email"`, testados com envio vazio, e-mail inválido e preenchimento correto, e recebidos no e-mail da equipe.
- [ ] **Multimídia:** imagens com `alt` e legenda; vídeo, áudio e iframe com controles e alternativa em texto.
- [ ] **Tabelas:** impacto e orçamento com cabeçalho e dados corretos.
- [ ] **EcoBot e barra:** funcionam com teclado e leitor de tela; o site continua completo sem JavaScript.
- [ ] **Acessibilidade:** contraste ≥ 4,5:1, navegação completa por teclado e Lighthouse ≥ 90.
- [ ] **Validação W3C:** todas as páginas HTML e o CSS sem erros.
- [ ] **Responsividade:** sem rolagem horizontal em 360, 768 e 1280 px, com prints e teste em celular real.
- [ ] **Desempenho e SEO:** imagens otimizadas, `title` e `meta description` próprios e Lighthouse ≥ 90.
- [ ] **Documentação:** `/docs` com plano de contexto, diário de bordo, orçamento (3 hospedagens + 3 domínios) e evidências de testes.
- [ ] **Pacote de entrega:** `.zip`, `.txt` com os integrantes, escopo em `.doc`/`.pdf` e print `.png`, conferidos por dois integrantes.

> **Regra de "pronto":** uma tarefa só é mergeada depois de validada no W3C, revisada por outro integrante no PR e testada com o teclado e em tela pequena. O projeto só é enviado quando todas as páginas estiverem nesse estado e a documentação estiver completa.

---

## 📝 Aprovação do escopo

A aprovação acontece em duas etapas. Primeiro, a equipe revisa e concorda com o documento. Depois, o **Prof. Paulo Fratta** valida o que será desenvolvido. Se houver pedido de mudança, o escopo é ajustado e uma nova versão é registrada com a data em [`docs/`](docs/).

| Responsável | Papel |
|---|---|
| Prof. Paulo Fratta | Validação do escopo |
| Luccas Abreu, Pedro Henrique Pereira da Silva, Pedro Henrique da Silva Alves, Ruan Ferreira Silva | Elaboração |

---

## 📸 Créditos

- **Textos:** autorais da equipe EcoVida Urbana, com apoio de IA e revisão da equipe.
- **Imagens:** banco gratuito [Pixabay](https://pixabay.com/), com crédito do autor abaixo de cada foto.
- **Fontes:** [Poppins](https://fonts.google.com/specimen/Poppins) e [Inter](https://fonts.google.com/specimen/Inter), via Google Fonts.
- **Mapa:** © colaboradores do [OpenStreetMap](https://www.openstreetmap.org/copyright).
- **Envio de formulários:** [FormSubmit](https://formsubmit.co/).

---

<p align="center">Feito com 💚 por estudantes da UNICID · Front-End · 2026</p>
