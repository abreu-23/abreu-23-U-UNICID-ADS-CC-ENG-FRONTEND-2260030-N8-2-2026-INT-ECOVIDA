# Diário de bordo — Portal EcoVida Urbana

Registro datado das decisões, do uso de IA e das correções do projeto. As datas e horários vêm do histórico de commits do GitHub. Cada integrante acrescenta as próprias entradas no mesmo formato.

**Site:** https://ecovida2026.up.railway.app/ · **Repositório:** abreu-23/abreu-23-U-UNICID-ADS-CC-ENG-FRONTEND-2260030-N8-2-2026-INT-ECOVIDA

---

## Linha do tempo

### 22/09/2026 — Escopo
- Escopo do projeto (Atividade A2) definido: tema, público com prioridade a PCD, 10 páginas, funcionalidades e critérios de aceitação.
- Decisão: começar pela home e pelo CSS compartilhado e deixar as outras 9 páginas para depois, sobre a mesma base visual.

### 06/10/2026 — Repositório e primeira publicação
- Repositório criado no GitHub, com o código da home e o CSS (`cbc46bd`).
- Primeira publicação no Railway. Os arquivos `Caddyfile` e `Dockerfile` foram removidos depois do primeiro teste, porque o Railway publica o site sem eles.
- README atualizado com a URL do site.

### 20/10/2026 — Página Sobre e criação dos prompts
- Sobre criada com IA a partir de um prompt detalhado (`41836c4`, 23:17).
- **Técnica usada:** em vez de pedir o código direto, a IA leu `@index.html` e `@README.md` e escreveu primeiro o *prompt* de cada página, todos com a mesma base. Depois, cada prompt foi revisado e usado para gerar a página (ver "Uso de IA", prompt 1).

### 21/10/2026 — Projetos e as demais páginas
- Projetos criada com o prompt 2 (`0d3f9a2`, 00:20).
- Links da home corrigidos e orçamento incluído no rodapé (`f3a3795`).
- Páginas restantes (impacto, acessibilidade, galeria, mídia, notícias, contato e orçamento) criadas a partir do prompt-modelo, o prompt 3 (`6938d11`, 00:41).

### 25/10/2026 — Formulários com envio real
- Formulários enviados por e-mail pelo FormSubmit, sem back-end próprio (`d7e2336`).
- O e-mail da equipe foi trocado pelo código secreto do FormSubmit, para não aparecer no código-fonte (`70ab96c`).

### 26/10/2026 — Revisão do que a IA gerou
Revisão manual das páginas, com validação de contraste e conferência do HTML (`fd3c543`). Correções:
- Ícones sociais do rodapé sem `aria-hidden="true"`, em todas as páginas, apesar de o prompt pedir isso.
- Link "Política de Privacidade" apontando para `#`. Foi criada a `privacidade.html` (LGPD).
- Texto das estatísticas com contraste baixo sobre o verde menta. Passou para verde-escuro, com 5,6:1.
- Players de vídeo e áudio apontando para arquivos que ainda não existiam. Saíram até os arquivos ficarem prontos, e as transcrições ficaram abertas.
- Home com `style=""` e links repetidos. Os estilos foram para o CSS e cada link ganhou um texto único.
- Adicionado favicon em SVG.

### 27/10/2026 — Aula 06: IA organizada, GitHub e servidor
- `docs/plano-contexto.md` com as 11 seções do modelo da aula (PR #1).
- 8 regras em `.cursor/rules/` (projeto, HTML, CSS, JavaScript, acessibilidade, commits e as meta-regras) (PR #2).
- Modelos de issue e de pull request (PR #3).
- Site movido para `public/` e servidor Node.js + Express (PR #12).
- EcoBot por FAQ (PR #13), barra de acessibilidade (PR #14), README atualizado (PR #15).
- Orçamento alinhado ao Railway (PR #16), fotos locais em WebP (PR #17), menu recolhível no celular (PR #18) e ajuste do painel do EcoBot (PR #19).

### 28/10/2026 — Revisão das regras
- Regras reescritas no formato de 6 pontos ensinado na aula: objetivo, contexto, regras, exemplos, erros e perguntas (PR #20).

### 03/11/2026 — Mídia real
- Vídeo "Como separar o lixo em casa" (3min23s) e episódio 1 do podcast publicados, gerados com IA a partir de roteiros da equipe, cada um com resumo em texto (PR #21).

### 08/11/2026 — Preparação da 2ª entrega
- `docs/melhorias-mvp.md` com 10 pontos de antes e depois e 9 prints (PR #22).
- Tarefas distribuídas: validação do formulário com JavaScript (Ruan), textos da home (Pedro Pereira) e evidências de testes (Pedro Alves).
- Ruan subiu a validação do formulário em 3 commits na branch `feat/validacao-formulario` (PR #25).
- Pequenos detalhes corrigidos: ícones sociais sem destino retirados do rodapé e aviso do W3C zerado em `noticias.html` (PR #23).
- Área "Como apoiar" (doações e apoio) na página de Contato e seção dos ODS 6, 7, 11, 12 e 13 na página Sobre, com dados reais e fonte: FSP-USP e Abrema (PR #24).
- Slides da apresentação (14) e roteiro de falas, demonstração e perguntas prováveis da banca.

### 09/11/2026 — Merges e revisão cruzada
- Pedro Pereira atualizou os textos da home para a entrega final (`8cb53eb`, `1a577ba`) e fez o merge dos PRs #22, #23, #24 e #25, revisando o trabalho dos colegas.
- O Railway publicou a versão com validação em JavaScript, área de apoio e ODS.

### 10/11/2026 — Evidências e novos testes no site publicado
- Pedro Alves subiu as evidências de testes (PR #27). O upload criou a pasta `evidencias-testes-pedro (1)/` na raiz por engano; os arquivos foram movidos para `docs/` neste PR.
- Lighthouse repetido no site publicado: Início 92/100/100/100 e Contato 90/100/100/100 (desempenho, acessibilidade, boas práticas e SEO). A acessibilidade do Contato subiu de 96 para 100 com a correção de contraste do PR #24, e a meta de 90 do escopo foi batida em todas as categorias.
- Teste com 18 e-mails no formulário: 5 tipos de e-mail inválido passavam, como `ruan@email..com`. A expressão regular foi corrigida no PR #28.
- localStorage conferido no site publicado: o rascunho do formulário volta depois de recarregar, "Apagar rascunho" limpa tudo e o alto contraste continua ativo ao trocar de página.
- O gráfico de contribuidores do GitHub mostra os 4 integrantes. O Claude aparece como coautor nos commits feitos com o Claude Code, o que confirma o uso de IA declarado neste diário.

### 12/11/2026 — Contador simulado na página inicial
- O contador de materiais reciclados era um número fixo no HTML. Para ter dados reais, seria preciso um servidor com banco de dados e um formulário de registro de entregas, o que ficou arriscado para a semana da apresentação.
- Decisão: simular o contador com JavaScript (`public/js/contador.js`). A cada 4 segundos ele soma de 1 a 3 kg ao total e pausa quando a aba não está visível.
- Para não enganar o visitante, o número tem o aviso "Simulação: número fictício que sobe sozinho", e a nota abaixo dos indicadores explica que não são dados reais. A bolinha do aviso não pisca para quem ativou a redução de movimento.

---

## Uso de IA

**Ferramenta:** Claude (modelo Opus 5.5), usado dentro do editor Cursor. O contexto vem de `docs/plano-contexto.md` e das regras em `.cursor/rules/`.

**Regra da equipe:** nada gerado pela IA entra sem revisão. Cada mudança passa por branch, pull request, validação W3C, teste com teclado e conferência em tela pequena.

### Prompt 1 — gerar os prompts das páginas (20/10)

> leia @index.html e @README.md, de acordo com esse último prompt: [prompt da página Sobre]
>
> vamos criar somente os prompts agora, use a mesma base e crie para todas as páginas

- **O que a IA entregou:** um prompt por página, todos com a mesma estrutura, e uma lista do que mudava em relação ao prompt da Sobre.
- **O que aceitamos:**
  - reaproveitar as classes que já existiam no CSS em vez de criar novas;
  - um `id` estável em cada projeto, para os links da home apontarem para o projeto certo;
  - um texto diferente em cada botão de "participar", porque o Lighthouse reclama de links com o mesmo texto;
  - o 5º projeto, "Mobilidade Ativa", para dar sentido ao cartão "Transporte Urbano" da home.
- **Por que funcionou:** como todas as páginas saíram da mesma base, ficaram consistentes no cabeçalho, no rodapé, nas classes e no tom de voz.

### Prompt 2 — página Projetos (21/10)

Prompt completo no fim deste arquivo. A estrutura dele segue os princípios de um bom prompt vistos na aula:

| Parte do prompt | Para que serve |
|---|---|
| Papel ("Você é um desenvolvedor front-end…") | Dá à IA o ponto de vista certo |
| Tarefa e restrições (só HTML5 e CSS3, sem frameworks) | Evita que a IA invente tecnologia |
| Contexto, público e tom de voz | Mantém o texto alinhado ao escopo |
| Ligações que já apontam para a página | Garante que os links da home funcionem |
| Estrutura semântica e SEO obrigatórios | Cobre os critérios de W3C e acessibilidade |
| Conteúdo seção por seção | Diz o que vai em cada parte |
| CSS: reaproveitar, não duplicar, bloco no final | Mantém um único CSS organizado |
| "Use URLs reais… se não for possível conferir, deixe um comentário TROCAR" | Impede a IA de inventar endereço de imagem |
| O que entregar e o que validar | Já termina com o checklist de revisão |

- **O que aceitamos:** a estrutura com 5 `article` e os `id` (`coleta-seletiva`, `hortas-comunitarias`, `mutiroes-limpeza`, `feiras-solidarias`, `mobilidade-ativa`), a lista de definição para local e horário, e os textos de link únicos ("Participar da coleta seletiva"…).
- **O que corrigimos depois (na revisão de 26/10):** a IA esqueceu o `aria-hidden` dos ícones sociais, mesmo com o prompt pedindo. Deixou o link de privacidade em `#` e errou o contraste das estatísticas.
- **O que recusamos depois:** o prompt pedia fotos direto do CDN do Pixabay. Em 27/10 a equipe trocou por cópias locais em WebP, porque o CDN deixava o site 3 vezes mais pesado (6,4 MB contra 2,1 MB) e dependia de um servidor de fora.

### Prompt 3 — modelo para as demais páginas (21/10)

Depois da Sobre e da Projetos, a parte comum dos prompts virou um **modelo** com campos para preencher (`[NOME DA PÁGINA]`, `[arquivo].html`, `.hero-[pagina]`). Prompt completo no fim deste arquivo.

- **Como foi usado:** em cada página (impacto, acessibilidade, galeria, mídia, notícias, contato e orçamento), a equipe preenchia os campos e acrescentava só a função e o conteúdo específicos daquela página. O restante (cabeçalho, rodapé, semântica, SEO, CSS, acessibilidade e restrições) era igual para todas.
- **O que aprendemos com os prompts 1 e 2 e entrou no modelo:**
  - um padrão de hero interno, igual para todas as páginas e sem `style=""`;
  - a lista de classes do CSS para reaproveitar, incluindo as que surgiram na Sobre e na Projetos, para não haver regras duplicadas;
  - números de impacto sempre iguais aos da home (+5.000 pessoas, +200 dicas, 128.430 kg), para os dados não se contradizerem entre as páginas;
  - "Não altere páginas existentes", porque a IA tendia a mexer em arquivos que não eram da tarefa.
- **O que aceitamos:** 7 páginas geradas em cerca de 20 minutos, todas com o mesmo cabeçalho, rodapé e padrões.
- **O que corrigimos depois:** os mesmos problemas da Projetos apareceram em todas as páginas, porque elas vieram da mesma base: `aria-hidden` faltando nos ícones sociais, link de privacidade em `#` e, na Mídia, players apontando para arquivos inexistentes. Foram corrigidos de uma vez na revisão de 26/10.
- **Aprendizado:** um modelo repete os acertos, mas também os erros. Por isso a revisão de uma página serve de checklist para todas. Esse foi o motivo para criar, em 27/10, as regras do Cursor, que aplicam esses padrões automaticamente.

### Outras decisões sobre IA
- **EcoBot sem IA paga:** o modelo da aula liga o assistente a uma API de IA. A equipe preferiu respostas por FAQ (`lib/faq.js`), sem custo, sem chave para proteger e com respostas sempre corretas sobre o projeto. A troca por IA ficou preparada na função `responder()`.
- **Vídeo e podcast:** gerados com IA a partir de roteiros escritos pela equipe. Cada um tem um resumo em texto, e a página avisa que foram gerados por IA.
- **Regras que se corrigem:** `self-improvement.mdc` pede que a IA sugira ajustes nas regras quando um erro se repete, sempre com revisão da equipe antes de salvar.

---

## Aprendizados

- **Prompt longo e específico economiza retrabalho.** Listar as classes a reaproveitar e os links que já existiam fez as páginas saírem consistentes na primeira tentativa.
- **A IA não segue 100% do prompt.** Itens pedidos, como o `aria-hidden` dos SVGs, ficaram de fora. A revisão com W3C, contraste e teclado é obrigatória.
- **Contexto permanente evita repetição.** Com o plano de contexto e as regras, não é preciso repetir tecnologia, tom de voz e padrões em cada pedido.
- **Uma branch por tarefa deixa tudo rastreável.** Cada mudança tem um PR que explica o que mudou e por quê.

## Próximos passos
- Aplicativo móvel do EcoVida Urbana, para consultar pontos de coleta e dicas direto no celular.
- Melhoria no site: o EcoBot passar a responder com IA, com a chave guardada só no servidor.

---

<details>
<summary>Prompt 2 completo — página Projetos (21/10/2026)</summary>

```text
Você é um desenvolvedor front-end responsável pela página PROJETOS do portal EcoVida Urbana (UNICID — Front-End 2026).

TAREFA
Crie o arquivo projetos.html (e, se necessário, acrescente regras no css/style.css existente). Não use JavaScript, Bootstrap, Tailwind, React ou qualquer framework. Apenas HTML5 semântico e CSS3.

CONTEXTO DO PROJETO
Portal educativo urbano sobre reciclagem, consumo consciente e economia de água/energia, com pontos de coleta em São Paulo e foco em acessibilidade (WCAG 2.1 AA). Slogan: "Transforme sua Cidade, Comece por Você."
Tom de voz: moderno, limpo, acolhedor e inspirador. Transmita esperança e ação, não pessimismo climático.
Público: crianças, adolescentes e adultos em São Paulo; prioridade a pessoas com deficiência visual, motora, auditiva e cognitiva.

FUNÇÃO DESTA PÁGINA (README)
Arquivo: projetos.html
Função: iniciativas práticas.
Conteúdo principal obrigatório: um article por projeto — coleta seletiva de bairro, hortas comunitárias, mutirões de limpeza e feiras de economia solidária — cada um com foto, local e chamada para participar.

LIGAÇÕES QUE JÁ APONTAM PARA ESTA PÁGINA
- Home, hero: "Explorar Soluções" → projetos.html
- Home, cartão "Transporte Urbano" → projetos.html
- Home, destaque "Hortas Urbanas" → "Ler Artigo Completo" → projetos.html
- Sobre, hero: "Ver projetos" → projetos.html
Por isso, dê a cada article um id estável (ex.: id="coleta-seletiva", id="hortas-comunitarias", id="mutiroes-limpeza", id="feiras-solidarias") para que essas ligações possam usar âncoras no futuro. NÃO altere index.html nem sobre.html nesta entrega.

REUTILIZE O LAYOUT DA HOME (index.html) E DA SOBRE (sobre.html)
Copie header e footer da home SEM alteração estrutural, salvo:
- title e meta description próprios
- aria-current="page" no link "Projetos" do menu (retire de "Início")
- skip-link apontando para #conteudo-principal
- link do CSS: css/style.css
- mesmas Google Fonts (Poppins 600/700 + Inter 400/500/600) com preconnect e display=swap

Cabeçalho: logo (index.html), nav com 9 links (Início, Sobre, Projetos, Impacto, Acessibilidade, Galeria, Mídia, Notícias, Contato), botão "Junte-se ao Movimento" → contato.html.
Rodapé: Mapa do site, Sobre nós, Política de Privacidade, Contato, ícones Instagram/Facebook/LinkedIn (href="#"), copyright 2026, linha UNICID.

ESTRUTURA SEMÂNTICA OBRIGATÓRIA
- lang="pt-BR", charset UTF-8, viewport
- 1 único h1; h2/h3 sem pular níveis (cada projeto = h3 dentro da section "Nossos projetos", que tem h2)
- header, nav (aria-label="Navegação principal"), main#conteudo-principal, section com aria-labelledby, article por projeto, footer
- Dentro de cada article: figure + img + figcaption com .photo-credit
- Local e frequência em lista de definição (dl/dt/dd) ou lista simples — não use apenas cor ou ícone para transmitir a informação
- SVGs com aria-hidden="true" e focusable="false"
- Imagens informativas com alt descritivo, width e height, loading="lazy" abaixo da dobra
- Comentários HTML em português, indentação consistente
- Textos de link que descrevem o destino. Evite vários "Participar" iguais: use "Participar da coleta seletiva", "Participar da horta comunitária" etc.

SEO
- title único, até ~60 caracteres, formato: "Projetos — EcoVida Urbana"
- meta description própria, 120–160 caracteres, sobre iniciativas práticas de sustentabilidade em São Paulo (coleta seletiva, hortas, mutirões e feiras)

CONTEÚDO (textos autorais, em português do Brasil)

1) Hero interno (reutilize .hero .hero-page + overlay, wave, .container, .hero-inner, como em sobre.html)
   - Crie uma classe .hero-projetos com o background-image (mesmo padrão de .hero-sobre; sem style inline)
   - Fundo: foto Pixabay de ação comunitária/voluntariado ou horta urbana
   - h1: "Projetos que transformam a cidade"
   - lede: iniciativas práticas e abertas a qualquer pessoa, nos bairros de São Paulo, para reduzir resíduos e fortalecer a comunidade
   - CTA primário (.btn.btn-primary) "Junte-se ao Movimento" → contato.html
   - CTA secundário (.btn.btn-secondary) "Conhecer os projetos" → #lista-projetos

2) Introdução / como funcionam (section)
   - section-label: "Como participar"
   - h2: por exemplo "Escolha uma ação e comece no seu bairro"
   - 3 passos curtos em grid (reutilize .categories / .category-card, com ícone SVG de linha fina): 1. Escolha um projeto · 2. Envie seu interesse pelo formulário de contato · 3. Participe e compartilhe o resultado
   - Use <ol> para os passos se fizer sentido semântico (a ordem importa)

3) Nossos projetos (section id="lista-projetos", obrigatória)
   - h2: "Nossos projetos"
   - section-intro curta
   - 4 articles, um por projeto, cada um com:
     • foto Pixabay (figure/figcaption + crédito "Foto: Autor / Pixabay")
     • h3 com o nome do projeto
     • tag/categoria (reutilize o visual de .highlight-tag) — ex.: Reciclagem, Alimentação, Limpeza urbana, Consumo consciente
     • parágrafo curto (2–3 frases): o que é e qual problema resolve
     • Local (bairro/endereço fictício e plausível em SP, coerente com os pontos de coleta da home) e quando acontece
     • Público/acessibilidade: indique quando o local tem acesso para cadeira de rodas, pois isso apoia a página de acessibilidade
     • link de chamada para participar → contato.html (.btn.btn-outline-primary), com texto que descreve o projeto
   Projetos:
     a) Coleta Seletiva de Bairro — separação em casa e entrega em ecopontos/cooperativas (ex.: Vila Mariana, Tatuapé)
     b) Hortas Comunitárias — cultivo em terrenos ociosos e lajes; conecta com o destaque "Hortas Urbanas" da home
     c) Mutirões de Limpeza — praças, córregos e calçadas; inclui orientação sobre descarte correto
     d) Feiras de Economia Solidária — troca, reaproveitamento, conserto e venda de produtos locais (ex.: Ipiranga)
   Opcional (5º): Mobilidade Ativa — bicicletada/caronas, para dar sentido ao link do cartão "Transporte Urbano" da home
   - Layout: cartões em grid de 2 colunas no desktop (foto em cima, texto embaixo) OU blocos alternados no padrão .highlight-grid. Escolha um e mantenha consistente.

4) Resultados dos projetos (section curta, opcional mas recomendada)
   - h2: por exemplo "O que já construímos juntos"
   - Reutilize .stats / .stats-grid / .stat-value / .stat-label / .stats-note
   - 3 números ILUSTRATIVOS (ex.: 4 projetos ativos, 12 bairros atendidos, +5.000 pessoas engajadas) com nota: "* Números ilustrativos/fictícios nesta entrega."
   - Não use style="" no h2 (a home usa; aqui crie ou reaproveite uma classe)

5) CTA final (reutilize .cta-final + .cta-final-actions + .cta-text-link da sobre.html)
   - Título: convite para propor ou participar de um projeto no seu bairro
   - Botão amarelo "Quero participar" → contato.html
   - Link textual para impacto.html ("Ver o impacto coletivo")

CSS
- Reaproveite ao máximo o que já existe em css/style.css: .container, .section-label, .section-title, .section-intro, .categories, .category-card, .category-icon, .highlight-grid, .highlight-tag, .photo-credit, .btn*, .stats*, .cta-final, .hero-page, .cta-final-actions, .cta-text-link.
- NÃO duplique as regras do bloco "Página Sobre"; reutilize-as.
- Só adicione no FINAL de css/style.css um bloco comentado "Página Projetos" com o que faltar (ex.: .hero-projetos, .project-grid, .project-card, .project-photo, .project-meta, .steps).
- Use as variáveis já definidas: --primary #2D6A4F, --secondary #52B788, --accent #FFD60A, --lime #B7EF53, --bg #F4F6F0, --text #333333, --white.
- Imagens dos cartões: largura 100%, aspect-ratio fixo (ex.: 4/3 ou 16/10) e object-fit: cover, para os cartões terem a mesma altura.
- Cantos arredondados, espaçamento generoso, hover sutil nos cartões (como .category-card:hover).
- Grid/Flexbox; medidas em rem, % e fr; títulos com clamp() se a home já usa esse padrão.
- Breakpoints iguais: até 960px menu/blocos em coluna; até 860px cartões empilham.
- Respeite prefers-reduced-motion (já existe no CSS).
- Botões ~44px de altura; contraste ≥ 4,5:1 (atenção à tag lima sobre fundo claro: texto escuro); foco :focus-visible de 3px.
- Sem regras duplicadas; sem novos style="".

RESTRIÇÕES DESTA ENTREGA
- Somente HTML e CSS; sem JS e sem back-end.
- Imagens apenas do Pixabay, com crédito do autor. Use URLs reais de cdn.pixabay.com (não invente IDs). Se não for possível conferir, deixe um comentário <!-- TROCAR: ... --> no lugar.
- Endereços e datas fictícios, porém plausíveis; números de impacto sempre marcados como ilustrativos.
- Não crie as outras páginas; apenas projetos.html (+ CSS mínimo).
- Nomes de arquivo em minúsculas, sem acento.
- Página alcançável pelo menu (já está nos links).

ACESSIBILIDADE E QUALIDADE
- Navegável só com teclado; ordem de foco = ordem visual; sem armadilhas.
- ARIA só quando o HTML nativo não resolver.
- Zoom até 200% com fontes em rem; corpo ~16px; linhas ~60 caracteres.
- HTML válido no W3C; meta: Lighthouse ≥ 90.
- Em 360, 768 e 1280 px não pode haver rolagem horizontal.

ENTREGUE
1. Código completo de projetos.html
2. Trecho CSS novo (se houver) para anexar ao final de css/style.css, no bloco "Página Projetos"
3. Lista curta do que validar: teclado, contraste (principalmente tags e botões sobre foto), W3C, 3 larguras de tela, links com texto único
```

</details>

<details>
<summary>Prompt 3 completo — modelo para as demais páginas (21/10/2026)</summary>

```text
Você é um desenvolvedor front-end responsável pela página [NOME DA PÁGINA] do portal EcoVida Urbana (UNICID — Front-End 2026).

TAREFA
Crie o arquivo [arquivo].html (e, se necessário, acrescente regras no css/style.css existente). Não use JavaScript, Bootstrap, Tailwind, React ou qualquer framework. Apenas HTML5 semântico e CSS3.

CONTEXTO DO PROJETO
Portal educativo urbano sobre reciclagem, consumo consciente e economia de água/energia, com pontos de coleta em São Paulo e foco em acessibilidade (WCAG 2.1 AA). Slogan: "Transforme sua Cidade, Comece por Você."
Tom de voz: moderno, limpo, acolhedor e inspirador. Transmita esperança e ação, não pessimismo climático.
Público: crianças, adolescentes e adultos em São Paulo; prioridade a pessoas com deficiência visual, motora, auditiva e cognitiva.

REUTILIZE O LAYOUT DA HOME (index.html), DA SOBRE (sobre.html) E DE PROJETOS (projetos.html)
Copie header e footer da home SEM alteração estrutural, salvo:
- title e meta description próprios
- aria-current="page" no link desta página no menu (retire de "Início")
- skip-link apontando para #conteudo-principal
- link do CSS: css/style.css
- mesmas Google Fonts (Poppins 600/700 + Inter 400/500/600) com preconnect e display=swap
Cabeçalho: logo (index.html), nav com 9 links (Início, Sobre, Projetos, Impacto, Acessibilidade, Galeria, Mídia, Notícias, Contato), botão "Junte-se ao Movimento" → contato.html.
Rodapé: Mapa do site, Sobre nós, Política de Privacidade, Contato, ícones Instagram/Facebook/LinkedIn (href="#"), copyright 2026, linha UNICID.

HERO INTERNO (padrão de todas as páginas internas)
- Reutilize .hero .hero-page + .hero-overlay + .section-wave + .container + .hero-inner + .hero-actions, como em sobre.html
- Crie uma classe .hero-[pagina] com o background-image (mesmo padrão de .hero-sobre; nunca style inline)
- 1 h1 + 1 parágrafo .lede + até 2 botões (.btn.btn-primary / .btn.btn-secondary)

ESTRUTURA SEMÂNTICA OBRIGATÓRIA
- lang="pt-BR", charset UTF-8, viewport
- 1 único h1; h2/h3 sem pular níveis
- header, nav (aria-label="Navegação principal"), main#conteudo-principal, section com aria-labelledby, article quando o bloco fizer sentido sozinho, footer
- SVGs decorativos com aria-hidden="true" e focusable="false"
- Imagens informativas com alt descritivo, width e height, loading="lazy" abaixo da dobra; decorativas com alt=""
- Crédito da foto abaixo de cada imagem (padrão .photo-credit: "Foto: Autor / Pixabay")
- Comentários HTML em português, indentação consistente
- Textos de link que descrevem o destino; nada de vários "Saiba mais" iguais

SEO
- title único, até ~60 caracteres, formato "[Nome da página] — EcoVida Urbana"
- meta description própria, 120–160 caracteres

CSS
- Reaproveite ao máximo o que já existe em css/style.css: .container, .section-label, .section-title, .section-intro, .categories, .category-card, .category-icon, .highlight, .highlight-grid, .highlight-tag, .photo-credit, .btn*, .stats*, .collection*, .newsletter*, .cta-final, e do bloco "Página Sobre": .hero-page, .values, .team-grid, .team-card, .team-initials, .cta-final-actions, .cta-text-link (e o que existir no bloco "Página Projetos").
- NÃO duplique regras de blocos de outras páginas; se algo da Sobre/Projetos servir, reutilize.
- Só adicione no FINAL de css/style.css um bloco comentado "Página [Nome]" com o que faltar.
- Variáveis: --primary #2D6A4F, --secondary #52B788, --accent #FFD60A, --lime #B7EF53, --bg #F4F6F0, --text #333333, --white.
- Cantos arredondados, espaçamento generoso, hover sutil nos cartões (como .category-card:hover).
- Grid/Flexbox; medidas em rem, % e fr; títulos com clamp() quando a home já usar.
- Breakpoints iguais: até 960px menu/blocos em coluna; até 860px cartões empilham.
- Respeite prefers-reduced-motion (já existe no CSS).
- Botões ~44px de altura; contraste ≥ 4,5:1; foco :focus-visible de 3px.
- Sem regras duplicadas; nenhum style="" novo.

RESTRIÇÕES DESTA ENTREGA
- Somente HTML e CSS; sem JS e sem back-end.
- Imagens apenas do Pixabay, com crédito do autor. Use URLs reais de cdn.pixabay.com (não invente IDs). Se não for possível conferir, deixe <!-- TROCAR: descrição da imagem desejada --> no lugar.
- Dados de impacto sempre ilustrativos e sinalizados como tal; coerentes com a home (+5.000 pessoas engajadas, +200 dicas, 128.430 kg reciclados).
- Endereços, telefones e e-mails fictícios, porém plausíveis.
- Não crie outras páginas além da pedida (+ CSS mínimo). Não altere páginas existentes.
- Nomes de arquivo em minúsculas, sem acento.

ACESSIBILIDADE E QUALIDADE
- Navegável só com teclado; ordem de foco = ordem visual; sem armadilhas.
- ARIA só quando o HTML nativo não resolver.
- Zoom até 200% com fontes em rem; corpo ~16px; linhas ~60 caracteres.
- HTML válido no W3C; meta Lighthouse ≥ 90.
- Em 360, 768 e 1280 px não pode haver rolagem horizontal.

ENTREGUE
1. Código completo de [arquivo].html
2. Trecho CSS novo (se houver) para anexar ao final de css/style.css, no bloco "Página [Nome]"
3. Lista curta do que validar (itens gerais + os específicos desta página)
```

</details>
