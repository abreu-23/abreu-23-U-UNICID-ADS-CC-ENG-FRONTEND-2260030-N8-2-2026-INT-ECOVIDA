# 🌿 Portal EcoVida Urbana — Guia de Sustentabilidade Diária

> **Transforme sua Cidade, Comece por Você.**
> Portal educativo sobre reciclagem, consumo consciente e economia de água e energia, com pontos de coleta em São Paulo e foco em acessibilidade digital.
link:https://abreu-23-u-unicid-ads-cc-eng-frontend-2260030-n8-production.up.railway.app/

| **Instituição** | UNICID – Universidade Cidade de São Paulo |
| **Curso** | Curso Superior de Informática |
| **Disciplina** | Front-End — Prof. Paulo Fratta |
| **Equipe** | Luccas Abreu, Pedro Henrique Pereira da Silva, Pedro Henrique da Silva Alves, Ruan Ferreira Silva |




---

## 📑 Sumário

1. [Sobre o projeto](#-sobre-o-projeto)
2. [Objetivos](#-objetivos)
3. [Público-alvo](#-público-alvo)
4. [Páginas do site](#-páginas-do-site)
5. [Mapa do site e navegação](#-mapa-do-site-e-navegação)
6. [Requisitos não funcionais](#-requisitos-não-funcionais)
7. [Identidade visual](#-identidade-visual)
8. [Tecnologias](#-tecnologias)
9. [Estrutura de pastas](#-estrutura-de-pastas)
10. [Como executar](#-como-executar)
11. [Equipe e responsabilidades](#-equipe-e-responsabilidades)
12. [Cronograma](#-cronograma)
13. [Fluxo de trabalho](#-fluxo-de-trabalho)
14. [Riscos e restrições](#-riscos-e-restrições)
15. [Critérios de aceitação](#-critérios-de-aceitação)
16. [Aprovação do escopo](#-aprovação-do-escopo)
17. [Créditos](#-créditos)

---

## 🌎 Sobre o projeto

Nas grandes cidades, o descarte incorreto de resíduos, o desperdício de água e o consumo excessivo de energia agravam problemas ambientais e sociais. O quadro piora em regiões com pouca coleta seletiva e pouca educação ambiental. Grande parte da população não sabe onde descartar recicláveis nem como pequenas mudanças de hábito impactam o meio ambiente.

O **Portal EcoVida Urbana** une **educação ambiental, mudança de comportamento e inclusão social**. Ao facilitar o acesso à informação e a pontos de coleta próximos, ele ajuda a reduzir a geração de resíduos e amplia a participação cidadã. Um indicador (ilustrativo) de materiais coletados torna esse impacto mais visível para o usuário.

## 🎯 Objetivos

**Geral:** educar o máximo de pessoas sobre práticas sustentáveis do dia a dia, facilitar o acesso a pontos de coleta de reciclagem e demonstrar o impacto coletivo dessas ações.

**Específicos:**

- Apresentar conteúdo educativo sobre reciclagem, consumo consciente e economia de água e energia.
- Disponibilizar um mapa e uma lista de pontos de coleta de materiais recicláveis.
- Exibir um contador (ilustrativo) de materiais coletados, para reforçar o senso de impacto coletivo.
- Garantir acessibilidade digital para pessoas com deficiência em todas as páginas.
- Divulgar projetos, notícias e dados de impacto socioambiental.

## 👥 Público-alvo

- Pessoas interessadas em adotar hábitos mais sustentáveis.
- Crianças, adolescentes e adultos, sem restrição de gênero ou renda.
- Inicialmente, a cidade de **São Paulo**, com possibilidade de expansão.
- **Público prioritário:** pessoas com deficiência visual, motora, auditiva e cognitiva, com navegação por teclado, leitores de tela e contraste adequado.

---

## 🗂 Páginas do site

São **10 páginas HTML5** ligadas por um cabeçalho e um rodapé comuns. Cada uma cumpre uma etapa da jornada do visitante: descobrir o tema, aprender práticas, encontrar onde reciclar, ver o impacto e entrar em contato.

| # | Arquivo | Função | Conteúdo principal |
|---|---|---|---|
| 1 | `index.html` | Porta de entrada | Hero, 3 categorias, destaque da semana, pontos de coleta, estatísticas e contador, newsletter, chamada para impacto |
| 2 | `sobre.html` | Quem somos e por que o projeto existe | História, missão, visão e valores (um cartão por valor) |
| 3 | `projetos.html` | Iniciativas práticas | Um `article` por projeto: coleta seletiva de bairro, hortas comunitárias, mutirões de limpeza e feiras de economia solidária, com foto, local e chamada para participar |
| 4 | `impacto.html` | Resultado coletivo em dados | Tabelas com legenda: materiais reciclados por tipo, economia de água e energia, pessoas engajadas (valores ilustrativos) |
| 5 | `acessibilidade.html` | Medidas de inclusão | Recursos aplicados, práticas sustentáveis inclusivas (como pontos de coleta acessíveis) e canal para relatar barreiras |
| 6 | `galeria.html` | Registros visuais das ações | `figure` + `figcaption`, `alt` descritivo, crédito da fonte e carregamento tardio |
| 7 | `midia.html` | Conteúdo em vídeo, áudio e mapa | `<video controls poster>`, `<audio controls>` com podcast de dicas, `<iframe>` com o mapa dos pontos de coleta, além de legenda ou transcrição |
| 8 | `noticias.html` | Notícias, artigos e dicas | Lista de `article` com data, categoria e resumo, incluindo "Hortas Urbanas" e as dicas das 3 categorias da home |
| 9 | `contato.html` | Contato e adesão ao movimento | Dados de contato fictícios, formulário com validação HTML5 e apresentação da equipe |
| 10 | `orcamento_hospedagem.html` | Decisão técnica de publicação | Comparativo de 3 hospedagens e 3 domínios, com tabela e justificativa, priorizando hospedagem verde (acesso pelo rodapé) |

### Destaques da página inicial

| Seção | Como funciona | Objetivo atendido |
|---|---|---|
| **Hero** | Dois botões: "Comece Agora" (→ `#categorias`) e "Explorar Soluções" (→ `projetos.html`). Sobreposição escura garante o contraste. | Apresentar o portal e orientar o primeiro clique |
| **Categorias** | Lar Sustentável (→ notícias), Transporte Urbano (→ projetos) e Reduza e Recicle (→ `#pontos-coleta`). Cartões se elevam ao passar o mouse. | Conteúdo educativo |
| **Destaque da semana** | "Hortas Urbanas: Como cultivar em pequenos espaços", com botão "Ler Artigo Completo" e crédito da foto. | Divulgar notícias socioambientais |
| **Pontos de coleta** | Lista de pontos em São Paulo com endereço e materiais aceitos (plástico, papel, vidro, metal, eletrônicos, óleo, pilhas, lâmpadas e orgânicos). | Indicar onde reciclar |
| **Estatísticas** | +5.000 pessoas engajadas · +200 dicas publicadas · 128.430 kg reciclados (valores fixos e ilustrativos). | Reforçar o impacto coletivo |
| **Newsletter** | Campo `type="email"` com `required` e `label` (envio demonstrativo). | Manter o visitante engajado |
| **Chamada final** | Botão "Ver página de impacto" (→ `impacto.html`). | Divulgar os dados de impacto |

### Formulário de contato

A validação usa **somente HTML5**, sem JavaScript, e todo campo tem `label for`. Se algum campo estiver inválido, o navegador bloqueia o envio e mostra o erro no próprio campo. O envio é demonstrativo, sem servidor.

| Campo | Tipo | Validação | Finalidade |
|---|---|---|---|
| Nome completo | `text` | `required` | Identificar o contato |
| E-mail | `email` | `required` + formato verificado | Permitir o retorno da equipe |
| Telefone | `tel` | `pattern` `(11) 90000-0000` (opcional) | Contato alternativo |
| Data da ação de interesse | `date` | data válida (opcional) | Indicar quando quer participar |
| Nº de participantes | `number` | `min` e `max` (opcional) | Tamanho do grupo |
| Assunto | `select` | `required` | Dúvida, parceria, participar de ação ou relatar barreira |
| Mensagem | `textarea` | `required` + `minlength` | Detalhar o pedido |
| Aceite de privacidade | `checkbox` | `required` | Registrar o consentimento |

---

## 🧭 Mapa do site e navegação

![Mapa do site EcoVida Urbana](docs/mapa_do_site.png)

A estrutura é **plana**: pelo menu, qualquer página está a um clique de todas as outras. Os grupos abaixo são temáticos e não criam níveis de navegação.

```
index.html
├── Conhecer o projeto ──── sobre.html · projetos.html · noticias.html
├── Resultados e inclusão ── impacto.html · acessibilidade.html
├── Imagens e mídia ─────── galeria.html · midia.html
└── Contato e gestão ────── contato.html · orcamento_hospedagem.html (via rodapé)
```

**Cabeçalho fixo:** logo (→ home), menu com 9 links (Início, Sobre, Projetos, Impacto, Acessibilidade, Galeria, Mídia, Notícias e Contato) e botão "Junte-se ao Movimento" (→ contato). A página atual recebe `aria-current="page"`, e o primeiro elemento da página é o link "Pular para o conteúdo principal".

**Rodapé:** links rápidos (Mapa do site, Sobre nós, Orçamento de hospedagem, Contato), Política de Privacidade e ícones de Instagram, Facebook e LinkedIn (ilustrativos nesta entrega).

### Fluxo de navegação

| Origem | Elemento | Destino |
|---|---|---|
| Qualquer página | Logo e item "Início" | `index.html` |
| Qualquer página | Menu principal | Página correspondente |
| Qualquer página | Botão "Junte-se ao Movimento" | `contato.html` |
| Qualquer página | Rodapé: "Orçamento de hospedagem" | `orcamento_hospedagem.html` |
| Home — hero | "Comece Agora" / "Explorar Soluções" | `#categorias` / `projetos.html` |
| Home — categorias | Lar Sustentável / Transporte Urbano / Reduza e Recicle | `noticias.html` / `projetos.html` / `#pontos-coleta` |
| Home — destaque | "Ler Artigo Completo" | `noticias.html` |
| Home — chamada final | "Ver página de impacto" | `impacto.html` |
| Páginas internas | Chamadas para agir | `contato.html` |

---

## ✅ Requisitos não funcionais

As medidas valem para as 10 páginas, que compartilham o mesmo CSS, cabeçalho e rodapé. Os resultados dos testes ficam nas evidências, em [`docs/`](docs/).

### ♿ Acessibilidade (meta: WCAG 2.1 AA)
A Lei Brasileira de Inclusão (Lei nº 13.146/2015, art. 63) serve de referência.

- **Semântica:** `header`, `nav`, `main`, `section`, `article` e `footer`; um único `h1` e `h2`/`h3` sem pular níveis.
- **Imagens:** `alt` descritivo nas informativas, `alt=""` nas decorativas e SVGs com `aria-hidden="true"`.
- **Contraste:** `#333333` sobre `#F4F6F0` (11,6:1) e botões amarelos com texto escuro (11,2:1). O mínimo é 4,5:1, e nenhuma informação depende só da cor.
- **Teclado:** Tab, Shift+Tab e Enter em tudo; ordem de foco igual à visual; foco de 3 px (`:focus-visible`) e sem armadilhas de foco.
- **ARIA:** `lang="pt-BR"`, `aria-label` no `nav` e `aria-labelledby` nas seções. ARIA só entra quando o HTML nativo não resolve.
- **Formulários:** `label for`, `required` com indicação em texto, `autocomplete` em nome, e-mail e telefone.
- **Multimídia:** sem autoplay, com `controls`, legenda (`track`) ou transcrição; `iframe` com `title`.
- **Leitura:** fontes em `rem` (zoom até 200%), corpo de 16 px, linhas de ~60 caracteres e respeito a `prefers-reduced-motion`.

### 🌱 Sustentabilidade digital
O próprio site segue o que ensina.

- Fotos do Pixabay salvas em `img/`, redimensionadas (≈1280 px no hero e ≈800 px nos cartões), em JPEG/WebP de até **200 KB**.
- `loading="lazy"` abaixo da dobra e ícones em SVG embutido.
- CSS único, sem frameworks, sem JavaScript e com duas famílias de fonte. **Meta: home abaixo de ~1,5 MB.**
- Comparativo de hospedagem verde (energia renovável, compensação de carbono, localização do data center), com apoio do Green Web Check.
- Conteúdo aberto, sem cadastro obrigatório, que funciona em celulares simples e conexões lentas.

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
- Mídia sob demanda: `preload="metadata"` no vídeo, `preload="none"` no áudio e `loading="lazy"` no iframe.

### 🔎 SEO básico
- `title` único por página ("Nome da página — EcoVida Urbana", até ~60 caracteres).
- `meta description` própria, com 120 a 160 caracteres.
- `lang="pt-BR"`, `meta charset` e `meta viewport` em todas as páginas.
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
- **Logotipo:** folha estilizada em círculo verde + "EcoVida Urbana" em Poppins.

---

## 🛠 Tecnologias

| Ferramenta | Uso |
|---|---|
| **HTML5 + CSS3** | Únicas tecnologias desta entrega |
| **Git + GitHub** | Versionamento, com uma branch por integrante |
| **W3C Validator + Lighthouse** | Validação e auditoria |
| **Trello / Notion** | Quadro com as colunas A fazer, Fazendo, Em revisão e Pronto |
| **JavaScript** | Previsto apenas para entregas futuras (contador em tempo real) |

## 📁 Estrutura de pastas

```
ecovida-urbana/
├── index.html
├── sobre.html
├── projetos.html
├── impacto.html
├── acessibilidade.html
├── galeria.html
├── midia.html
├── noticias.html
├── contato.html
├── orcamento_hospedagem.html
├── css/        # folha de estilo única e compartilhada
├── js/         # reservado para entregas futuras
├── img/        # imagens otimizadas (Pixabay e autorais)
├── assets/     # vídeo, áudio e outros recursos
└── docs/       # escopo, diário de bordo, orçamento, evidências de testes e mapa do site
```

## ▶️ Como executar

Não há dependências nem etapa de build.

```bash
git clone <url-do-repositorio>
cd ecovida-urbana
```

Abra o `index.html` no navegador. Se preferir, use a extensão **Live Server** do VS Code, que recarrega a página automaticamente.

---

## 👨‍💻 Equipe e responsabilidades

| Integrante | Páginas | Funções gerais |
|---|---|---|
| **Luccas Abreu** | `index.html` | Coordenação, escopo, CSS compartilhado, cabeçalho e rodapé, repositório Git e README |
| **Pedro Henrique Pereira da Silva** | `sobre.html`, `projetos.html`, `noticias.html` | Textos do portal, créditos das imagens e revisão de português |
| **Pedro Henrique da Silva Alves** | `impacto.html`, `acessibilidade.html`, `galeria.html` | Tabela de impacto, conferência de acessibilidade e evidências de testes |
| **Ruan Ferreira Silva** | `midia.html`, `contato.html`, `orcamento_hospedagem.html` | Formulário e validação, vídeo, áudio e iframe, orçamento de hospedagem e domínio |



## ⚠️ Riscos e restrições

### Principais riscos

| Risco | Prevenção |
|---|---|
| Atraso de um integrante | Quadro visível, aviso antecipado e redistribuição das páginas |
| Falta de tempo na reta final | Cronograma termina cerca de uma semana antes do prazo; documentação feita junto com as páginas |
| Páginas diferentes entre si | CSS único com variáveis; cabeçalho e rodapé copiados da home sem alteração |
| Links quebrados | Nomes de arquivo fixos e conferência de todos os links antes do envio |
| Erros no W3C ou na acessibilidade | Validar cada página ao terminá-la, e não só no final |
| Conflito ou perda de arquivos | Uma branch por integrante e cópia no GitHub |
| Imagens indisponíveis ou pesadas | Baixar para `img/`, comprimir e nunca depender do link externo |
| Aumento do escopo | Entrega 01 só em HTML e CSS; o que exige JavaScript fica para depois |
| Erro no formato de envio | Checklist de `.zip`, `.txt`, `.doc` e `.png` antes de enviar |

### Restrições desta entrega

- **Somente HTML e CSS**, sem JavaScript e sem back-end.
- Contador de materiais **fixo e ilustrativo**; pontos de coleta em lista **estática**.
- Formulários **demonstrativos**, sem envio a servidor.
- Dados de impacto **ilustrativos**; imagens apenas do Pixabay, com crédito.
- O site **não será publicado** nesta entrega; o orçamento de hospedagem é um estudo comparativo.

### 🔮 Próximas etapas
- Contador em tempo real com JavaScript (arquivo único, carregado com `defer` e sem bibliotecas).
- Pontos de coleta dinâmicos com geolocalização.
- Publicação em hospedagem verde, conforme o comparativo.

---

## 🏁 Critérios de aceitação

O site está **pronto** quando todos os itens abaixo forem atendidos e registrados nas evidências de testes.

- [ ] **Páginas e navegação:** as 10 páginas abrem sem erro e se ligam pelo menu e pelo rodapé.
- [ ] **Estrutura e semântica:** `header`, `nav`, `main` e `footer`, um único `h1` e títulos em ordem.
- [ ] **Formulários validados:** contato e newsletter com `label`, `required` e `type="email"`, testados com envio vazio, e-mail inválido e preenchimento correto.
- [ ] **Multimídia:** imagens com `alt` e legenda; vídeo, áudio e iframe com controles e alternativa em texto.
- [ ] **Tabelas:** impacto e orçamento com cabeçalho e dados corretos.
- [ ] **Acessibilidade:** contraste ≥ 4,5:1, navegação completa por teclado e Lighthouse ≥ 90.
- [ ] **Validação W3C:** todas as páginas HTML e o CSS sem erros.
- [ ] **Responsividade:** sem rolagem horizontal em 360, 768 e 1280 px, com prints e teste em celular real.
- [ ] **Desempenho e SEO:** imagens otimizadas, `title` e `meta description` próprios e Lighthouse ≥ 90.
- [ ] **Documentação:** `/docs` com README, diário de bordo, orçamento (3 hospedagens + 3 domínios) e evidências de testes.
- [ ] **Pacote de entrega:** `.zip`, `.txt` com os integrantes, escopo em `.doc`/`.pdf` e print `.png`, conferidos por dois integrantes.

> **Regra de "pronto":** uma página só vai para **Pronto** depois de validada no W3C, revisada por outro integrante e testada com o teclado e em tela pequena. O projeto só é enviado quando as 10 páginas estiverem nessa coluna e a documentação estiver completa.

---

## 📝 Aprovação do escopo

A aprovação acontece em duas etapas. Primeiro, a equipe revisa e concorda com o documento. Depois, o **Prof. Paulo Fratta** valida o que será desenvolvido. Se houver pedido de mudança, o escopo é ajustado e uma nova versão é registrada com a data em [`docs/`](docs/).

| Responsável | Papel |
|---|---|
| Prof. Paulo Fratta | Validação do escopo |
| Luccas Abreu, Pedro Henrique Pereira da Silva, Pedro Henrique da Silva Alves, Ruan Ferreira Silva | Elaboração |

---

## 📸 Créditos

- **Textos:** autorais da equipe EcoVida Urbana.
- **Imagens:** banco gratuito [Pixabay](https://pixabay.com/), com crédito do autor abaixo de cada foto.
- **Fontes:** [Poppins](https://fonts.google.com/specimen/Poppins) e [Inter](https://fonts.google.com/specimen/Inter), via Google Fonts.

---

<p align="center">Feito com 💚 por estudantes da UNICID · Front-End · 2026</p>
