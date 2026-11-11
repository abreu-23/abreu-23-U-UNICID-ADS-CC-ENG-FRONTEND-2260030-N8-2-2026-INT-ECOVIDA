# Evidências de testes — Portal EcoVida Urbana

**Site testado:** https://ecovida2026.up.railway.app/
**Data dos testes:** 08/11/2026 · **atualizado em 10/11/2026**, depois dos merges dos PRs #22 a #27
**Responsável pela conferência:** Pedro Henrique da Silva Alves

> **Como os testes foram feitos.** Os testes marcados como *(automático)* foram rodados com ferramentas: Nu Html Checker para o W3C, PageSpeed Insights (Lighthouse) no site publicado e um navegador automatizado (Playwright/Chromium) para teclado, formulário, responsividade e links. Os marcados como *(manual)* precisam ser feitos por uma pessoa e estão abertos (☐) até serem conferidos.
> Em 10/11, o formulário e o localStorage foram testados também no site publicado, sem enviar nada para o FormSubmit.

## Resumo

| Área | Resultado | Situação |
|---|---|---|
| W3C (HTML e CSS) | 0 erros e 0 avisos nas 12 páginas e no CSS | ✅ |
| Lighthouse (celular) | Desempenho 90 a 92 · Acessibilidade 100 · Boas práticas 100 · SEO 100 | ✅ meta ≥ 90 batida em tudo |
| Teclado | Tudo alcançável, foco visível de 3 px, sem armadilhas | ✅ |
| Formulário (JavaScript) | Bloqueia o envio, mostra os erros, salva o rascunho e envia certo | ✅ |
| E-mail inválido | 9 de 14 casos bloqueados no site; os outros 5 são corrigidos no PR #28 | ⚠️ até o merge do #28 |
| localStorage | Rascunho e alto contraste salvos e recuperados no site publicado | ✅ |
| Responsividade | Sem rolagem horizontal em 360, 768 e 1280 px nas 12 páginas | ✅ |
| Links | 62 links internos, 0 quebrados | ✅ |
| Imagens e mídia | 20 imagens com `alt`; sem autoplay; vídeo e áudio com controles | ✅ |

---

## 1. Validação W3C (HTML e CSS) *(automático)*

Ferramenta: **Nu Html Checker 26.11.4**, o mesmo motor do validator.w3.org, rodado sobre o código da branch `main` (a versão publicada) em 10/11/2026. Log completo: [`prints/w3c-resultado.txt`](prints/w3c-resultado.txt).

| Página | Erros | Avisos | Resultado |
|---|---|---|---|
| index.html | 0 | 0 | ✅ |
| sobre.html | 0 | 0 | ✅ |
| projetos.html | 0 | 0 | ✅ |
| impacto.html | 0 | 0 | ✅ |
| acessibilidade.html | 0 | 0 | ✅ |
| galeria.html | 0 | 0 | ✅ |
| midia.html | 0 | 0 | ✅ |
| noticias.html | 0 | 0 | ✅ |
| contato.html | 0 | 0 | ✅ |
| orcamento_hospedagem.html | 0 | 0 | ✅ |
| privacidade.html | 0 | 0 | ✅ |
| obrigado.html | 0 | 0 | ✅ |
| css/style.css | 0 | 0 | ✅ |

Em 08/11 havia 1 aviso em `noticias.html` ("Section lacks heading"). Ele foi corrigido no PR #23: o `article` interno do destaque "Hortas Urbanas" virou `div`.

> ☐ *(manual)* Repetir pelo site oficial em https://validator.w3.org/nu/?doc=https://ecovida2026.up.railway.app/ e salvar o print como `prints/w3c-index.png`. O site do W3C pede uma verificação anti-robô, então isso precisa ser feito por uma pessoa.

## 2. Lighthouse — PageSpeed Insights, celular *(automático)*

Rodado no site publicado. Os links abrem o relatório completo.

| Página | Data | Desempenho | Acessibilidade | Boas práticas | SEO | Relatório |
|---|---|---|---|---|---|---|
| Início | 10/11 | **92** | **100** | 100 | 100 | [abrir](https://pagespeed.web.dev/analysis/https-ecovida2026-up-railway-app/ggesdxutjr?form_factor=mobile) |
| Contato | 10/11 | **90** | **100** | 100 | 100 | [abrir](https://pagespeed.web.dev/analysis/https-ecovida2026-up-railway-app-contato-html/8e4uk7b0d7?form_factor=mobile) |
| Mídia | 08/11 | 95 | 100 | 100 | 100 | [abrir](https://pagespeed.web.dev/analysis/https-ecovida2026-up-railway-app-midia-html/q79h1ts6j6?form_factor=mobile) |

**Evolução desde 08/11:**

| Página | Desempenho | Acessibilidade | CLS (troca de layout) |
|---|---|---|---|
| Início | 88 → 92 | 100 → 100 | 0,189 → 0,127 |
| Contato | 87 → 90 | 96 → 100 | 0,165 → 0,127 |

- **Acessibilidade 96 → 100 no Contato:** a regra `.category-card p` deixava as iniciais da equipe (`.team-initials`) cinza sobre o verde. Corrigido no PR #24.
- **Desempenho:** a troca de layout (CLS) diminuiu, e as duas páginas passaram da meta de 90. A barra de acessibilidade ainda é criada pelo JavaScript depois que a página aparece; reservar a altura dela no CSS é a próxima melhoria.

Métricas da página inicial em 10/11 (celular): FCP 1,5 s · LCP 2,6 s · TBT 0 ms · CLS 0,127 · Speed Index 2,4 s.

> ☐ *(manual)* Abrir o relatório da página inicial e salvar o print como `prints/lighthouse-index.png`.

## 3. Navegação só com teclado *(automático)*

| Teste | Resultado | Observação |
|---|---|---|
| 1º Tab mostra "Pular para o conteúdo principal" | ✅ | Enter leva a `#conteudo-principal` |
| Ordem do foco segue a ordem visual | ✅ | Pular → Ouvir a página → Alto contraste → logo → 9 links do menu → Junte-se ao Movimento → conteúdo |
| O foco aparece em todos os elementos | ✅ | Contorno sólido de 3 px (`:focus-visible`), ver `prints/foco-teclado.png` |
| Nenhum ponto prende o foco | ✅ | 120 Tabs seguidos passaram por 33 elementos e chegaram ao rodapé |
| EcoBot abre com Enter e fecha com Esc | ✅ | `aria-expanded` muda de `true` para `false` e o foco volta ao botão |
| Menu do celular abre com Enter e fecha com Esc | ✅ | `aria-expanded` muda e o foco volta ao botão "Menu" |
| Formulário preenchido e enviado só com teclado | ☐ *(manual)* | |

## 4. Formulário de contato (validação com JavaScript)

### 4.1 Validação *(automático)*

| Teste | Esperado | Resultado |
|---|---|---|
| Enviar vazio | Aviso geral, borda vermelha e mensagem em cada campo | ✅ "Há 5 campos para corrigir antes de enviar." O foco vai para "Nome" e 5 campos recebem `aria-invalid="true"` |
| E-mail sem domínio (`ruan@email`) | Mensagem de e-mail inválido | ✅ "Digite um e-mail válido, como nome@email.com." |
| Mensagem curta (`curta`) | Avisar quantos caracteres faltam | ✅ "Escreva pelo menos 20 caracteres (faltam 15)." |
| Corrigir um campo | O erro some na hora | ✅ `aria-invalid` removido assim que o nome foi corrigido |
| Enviar tudo certo | Ir para `obrigado.html` e apagar o rascunho | ✅ Redirecionou para `obrigado.html` e o rascunho foi apagado do localStorage (teste local, com o envio bloqueado) |
| Leitor de tela anuncia os erros | Aviso com `role="alert"` e erro ligado ao campo | ✅ `role="alert"` no aviso e `aria-describedby="nome-erro"` no campo |
| E-mail chega à equipe pelo FormSubmit | | ☐ *(manual)* |

Print: [`prints/formulario-erros.png`](prints/formulario-erros.png)

### 4.2 E-mails inválidos (10/11) *(automático)*

18 e-mails testados no formulário, com o envio bloqueado para não mandar nada ao FormSubmit.

| E-mail | Caso | Na versão publicada | Com o PR #28 |
|---|---|---|---|
| (vazio) | vazio | ✅ bloqueia: "Informe seu e-mail." | ✅ bloqueia |
| `ruan` | sem @ | ✅ bloqueia | ✅ bloqueia |
| `ruan@` | sem domínio | ✅ bloqueia (conferido no site real) | ✅ bloqueia |
| `@email.com` | sem nome | ✅ bloqueia | ✅ bloqueia |
| `ruan@email` | sem ponto no domínio | ✅ bloqueia (conferido no site real) | ✅ bloqueia |
| `ruan email@x.com` | espaço no meio | ✅ bloqueia | ✅ bloqueia |
| `ruan@@email.com` | @ duplo | ✅ bloqueia | ✅ bloqueia |
| `ruan@email.` | termina em ponto | ✅ bloqueia | ✅ bloqueia |
| `ruan@.com` | domínio começa com ponto | ✅ bloqueia | ✅ bloqueia |
| `ruan@email..com` | pontos seguidos | ❌ aceita (conferido no site real) | ✅ bloqueia |
| `ruan@email.com.` | ponto no final | ❌ aceita | ✅ bloqueia |
| `.ruan@email.com` | nome começa com ponto | ❌ aceita | ✅ bloqueia |
| `ruan@email.c` | extensão de 1 letra | ❌ aceita | ✅ bloqueia |
| `ruan@-email.com` | domínio começa com hífen | ❌ aceita | ✅ bloqueia |
| `ruan@email.com` | válido | ✅ aceita | ✅ aceita |
| `pedro.alves@unicid.edu.br` | válido com subdomínio | ✅ aceita | ✅ aceita |
| `  ruan@email.com  ` | válido com espaços nas pontas | ✅ aceita | ✅ aceita |
| `ruan+teste@email.com` | válido com + | ✅ aceita | ✅ aceita |

A expressão regular nova é a do PR #28 (`public/js/formulario.js`, linha 23). Limitação conhecida: domínios com acento são recusados.

### 4.3 Rascunho no localStorage, no site publicado (10/11) *(automático)*

Chave: `ecovida-rascunho-contato`.

| Teste | Resultado |
|---|---|
| Digitar nome, e-mail, assunto e mensagem | ✅ Salvou a cada tecla: `{"nome":"Teste Rascunho","email":"teste@email.com","assunto":"Dúvida",…}` |
| Recarregar a página | ✅ Os 4 campos voltaram, com o aviso "Recuperamos o rascunho que você começou a escrever." |
| Clicar em "Apagar rascunho" | ✅ Apagou do localStorage, limpou os campos, tirou o aviso e pôs o foco em "Nome" |
| Recarregar de novo | ✅ Formulário vazio, sem rascunho fantasma |

## 5. Responsividade *(automático)*

Rolagem horizontal medida em cada página (`scrollWidth − clientWidth`; 0 = sem rolagem):

| Página | 360 px | 768 px | 1280 px |
|---|---|---|---|
| As 12 páginas | 0 | 0 | 0 |

| Largura | Menu | Resultado |
|---|---|---|
| 360 px (celular) | Botão "Menu" | ✅ |
| 768 px (tablet) | Botão "Menu" | ✅ |
| 1280 px (desktop) | Menu completo | ✅ |
| Celular real (modelo: ______) | | ☐ *(manual)* |

Prints: [`prints/home-desktop.png`](prints/home-desktop.png), [`prints/home-celular.png`](prints/home-celular.png) e [`prints/menu-celular-aberto.png`](prints/menu-celular-aberto.png)

## 6. Acessibilidade extra

| Teste | Resultado | Observação |
|---|---|---|
| Alto contraste continua ligado ao trocar de página | ✅ *(automático, site publicado em 10/11)* | Ligado no Contato salvou `ecovida-alto-contraste = "sim"` e continuou ativo na Sobre; desligado, salvou `"nao"` |
| Botão "Ouvir a página" presente | ✅ *(automático)* | Aparece quando o navegador tem voz |
| "Ouvir a página" lê em português | ☐ *(manual)* | Precisa ser ouvido por uma pessoa |
| Imagens com texto alternativo | ✅ *(automático)* | 20 imagens nas 12 páginas, todas com `alt` |
| Vídeo e áudio sem autoplay e com controles | ✅ *(automático)* | 0 `autoplay`, 0 mídias sem `controls`; o `iframe` do mapa tem `title` |
| Um único `h1` e `lang="pt-BR"` | ✅ *(automático)* | Nas 12 páginas |
| Contraste das seções novas (ODS e "Como apoiar") | ✅ *(automático)* | axe-core: 0 violações WCAG A/AA em index, sobre e contato |
| Leitor de tela (NVDA ou do navegador) | ☐ *(manual)* | |

## 7. Links *(automático)*

| Teste | Resultado |
|---|---|
| 62 links internos (páginas e âncoras) das 12 páginas | ✅ todos abrem (status 200) e as âncoras existem |
| Menu, rodapé e botões da home | ✅ incluídos na verificação acima |
| Links `href="#"` | ✅ os ícones ilustrativos de Instagram, Facebook e LinkedIn, que não levavam a lugar nenhum, foram retirados no PR #23 |

---

## Melhorias encontradas

1. ~~Contraste das iniciais da equipe no Contato~~ (corrigido no PR #24: acessibilidade 96 → 100).
2. ~~Aviso do W3C em `noticias.html`~~ (corrigido no PR #23).
3. ~~Ícones sociais do rodapé sem destino~~ (retirados no PR #23).
4. Validação de e-mail mais rigorosa: corrigida no PR #28, aguardando merge.
5. Reservar no CSS a altura da barra de acessibilidade, para reduzir mais o CLS (hoje 0,127).
