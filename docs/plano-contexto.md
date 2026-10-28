# Plano de contexto — EcoVida Urbana

> Briefing permanente do projeto para a IA e para a equipe.
> Atualize este arquivo (e faça commit) sempre que o escopo mudar.
> Última atualização: 27/10/2026.

## 1. Nome do projeto

**EcoVida Urbana — Guia de Sustentabilidade Diária**
Slogan: "Transforme sua Cidade, Comece por Você."
Site no ar: https://ecovida2026.up.railway.app/

## 2. Visão geral

Portal educativo sobre reciclagem, consumo consciente e economia de água e energia
em São Paulo. Une educação ambiental, mudança de comportamento e inclusão social:
ensina hábitos, indica pontos de coleta e mostra o impacto coletivo das ações.
Projeto acadêmico da UNICID (Front-End, Prof. Paulo Fratta, 2026.2).

## 3. Problema que resolve

Nas grandes cidades, descarte incorreto, desperdício de água e consumo excessivo de
energia agravam problemas ambientais e sociais. Falta coleta seletiva e educação
ambiental: muita gente não sabe onde descartar recicláveis nem o impacto de pequenos
hábitos.

## 4. Público-alvo

- Crianças, adolescentes e adultos em São Paulo, sem restrição de gênero ou renda.
- **Prioridade:** pessoas com deficiência visual, motora, auditiva e cognitiva
  (teclado, leitor de tela, contraste, linguagem simples).

## 5. Objetivos

- Educar sobre práticas sustentáveis do dia a dia.
- Facilitar o acesso a pontos de coleta de recicláveis.
- Mostrar o impacto coletivo (números **ilustrativos** e sinalizados como tal).
- Garantir acessibilidade digital em todas as páginas (meta WCAG 2.1 AA).
- Divulgar projetos, notícias e dados socioambientais.

## 6. Funcionalidades

**Prontas**
- 10 páginas do escopo + `obrigado.html` (confirmação de envio) e
  `privacidade.html` (LGPD): index, sobre, projetos, impacto, acessibilidade,
  galeria, midia, noticias, contato, orcamento_hospedagem.
- Formulário de contato e newsletters com validação HTML5, enviados por e-mail
  via FormSubmit (aceito pelo professor).
- Tabelas de impacto, galeria por tema, mapa (OpenStreetMap) com lista em texto,
  transcrições de vídeo e podcast.

**Planejadas**
- **EcoBot:** assistente de dúvidas (FAQ + API de IA) via rota `/api/assistente`.
- **Barra de acessibilidade:** leitura da página por voz e modo alto contraste.
- Vídeo e áudio reais na página de mídia (hoje só transcrições).

## 7. Stack técnica

- **Front-end:** HTML5 semântico, CSS3 (um único `style.css` com variáveis),
  JavaScript puro (sem frameworks, arquivos com `defer`).
- **Back-end:** Node.js + Express (servir o site e a rota do EcoBot).
- **Fontes:** Poppins (títulos) e Inter (corpo), via Google Fonts.
- **Hospedagem:** Railway, com deploy automático a cada push na `main`.
- **Versionamento:** Git + GitHub, uma branch e um PR por tarefa.
- **Proibido:** Bootstrap, Tailwind, React ou qualquer framework de UI.

## 8. Requisitos não funcionais

- **Acessibilidade:** WCAG 2.1 AA; um único `h1`; títulos sem pular níveis;
  `alt` descritivo; foco visível de 3 px; contraste ≥ 4,5:1; navegação por teclado;
  respeito a `prefers-reduced-motion`.
- **Responsividade:** sem rolagem horizontal em 360, 768 e 1280 px; breakpoints em
  960 px (blocos em coluna) e 860 px (cartões empilham).
- **Desempenho:** imagens leves com `width`/`height` e `loading="lazy"`;
  Lighthouse ≥ 90 em todas as categorias.
- **SEO:** `title` único ("Página — EcoVida Urbana") e `meta description` de
  120 a 160 caracteres.
- **LGPD:** consentimento no formulário e política em `privacidade.html`.
- **Segurança:** chaves de API só no `.env` (fora do Git) e nas Variables do Railway.
- **Conteúdo:** imagens do Pixabay com crédito do autor; dados ilustrativos sempre
  sinalizados; textos autorais em português do Brasil.

## 9. Estrutura

```
/
├── .cursor/rules/         # regras para a IA (.mdc)
├── .github/               # modelos de issue e de pull request
├── docs/                  # plano de contexto, escopo, diário de bordo, evidências
├── public/                # o site, servido pelo Express
│   ├── *.html             # as páginas
│   ├── css/style.css      # folha de estilo única
│   ├── assets/legendas/   # legendas .vtt
│   └── favicon.svg
├── server.js              # servidor Node.js + Express
├── package.json           # dependências e script "npm start"
├── .gitignore             # ignora .env e node_modules/
├── .gitattributes         # quebras de linha padronizadas (LF)
└── README.md
```

Próximos passos: `public/js/` e `public/img/` quando houver scripts e imagens locais;
`lib/ia.js` com o EcoBot; `.env` (fora do Git) com a chave da IA.

## 10. Desejáveis (nice to have)

- Modo alto contraste e leitura por voz.
- Mapa interativo com busca por endereço.
- Contador de impacto atualizado em tempo real.
- Imagens baixadas para `img/` em WebP (≤ 200 KB).
- Menu recolhível no celular.

## 11. Critérios de sucesso (métricas)

- 0 erros no validador W3C (HTML e CSS) em todas as páginas.
- Lighthouse ≥ 90 em Desempenho, Acessibilidade, Boas práticas e SEO.
- Navegação completa só com teclado; contraste ≥ 4,5:1.
- Sem rolagem horizontal em 360, 768 e 1280 px.
- Site no ar no Railway até **09/11/2026**.
- Histórico com issues, branches e PRs revisados pela equipe.

## Equipe

| Integrante | Páginas e funções |
|---|---|
| Luccas Abreu | index, coordenação, CSS compartilhado, cabeçalho e rodapé, Git |
| Pedro Henrique Pereira da Silva | sobre, projetos, notícias; textos e créditos |
| Pedro Henrique da Silva Alves | impacto, acessibilidade, galeria; testes |
| Ruan Ferreira Silva | mídia, contato, orçamento de hospedagem |

## Uso de IA

O projeto usa assistentes de IA (Claude Code) para gerar e revisar código e textos.
Todo resultado é revisado e validado pela equipe antes do merge.
