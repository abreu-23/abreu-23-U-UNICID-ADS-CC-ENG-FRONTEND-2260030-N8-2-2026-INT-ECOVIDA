# Evidências de testes — Portal EcoVida Urbana

**Site testado:** https://ecovida2026.up.railway.app/
**Data dos testes:** 08/11/2026
**Responsável pela conferência:** Pedro Henrique da Silva Alves

> **Como os testes foram feitos.** Os testes marcados como *(automático)* foram rodados com ferramentas: Nu Html Checker para o W3C, PageSpeed Insights (Lighthouse) no site publicado e um navegador automatizado (Playwright/Chromium) para teclado, formulário, responsividade e links. Os marcados como *(manual)* precisam ser feitos por uma pessoa e estão abertos (☐) até serem conferidos.
> Os testes do formulário usaram a versão com validação em JavaScript, que é o PR `feat/validacao-formulario`. Eles devem ser repetidos no site publicado depois do merge.

## Resumo

| Área | Resultado | Situação |
|---|---|---|
| W3C (HTML e CSS) | 0 erros nas 12 páginas e no CSS · 1 aviso (corrigido no PR `fix/pequenos-detalhes`) | ✅ |
| Lighthouse (celular) | Acessibilidade 96 a 100 · Boas práticas 100 · SEO 100 · Desempenho 87 a 95 | ✅ com 2 melhorias |
| Teclado | Tudo alcançável, foco visível de 3 px, sem armadilhas | ✅ |
| Formulário (JavaScript) | Bloqueia o envio, mostra os erros, salva o rascunho e envia certo | ✅ |
| Responsividade | Sem rolagem horizontal em 360, 768 e 1280 px nas 12 páginas | ✅ |
| Links | 62 links internos, 0 quebrados | ✅ |
| Imagens e mídia | 20 imagens com `alt`; sem autoplay; vídeo e áudio com controles | ✅ |

---

## 1. Validação W3C (HTML e CSS) *(automático)*

Ferramenta: **Nu Html Checker 26.11.4**, o mesmo motor do validator.w3.org, rodado sobre o código da branch `main`, que é a versão publicada. O log completo está em [`prints/w3c-resultado.txt`](prints/w3c-resultado.txt).

| Página | Erros | Avisos | Resultado |
|---|---|---|---|
| index.html | 0 | 0 | ✅ |
| sobre.html | 0 | 0 | ✅ |
| projetos.html | 0 | 0 | ✅ |
| impacto.html | 0 | 0 | ✅ |
| acessibilidade.html | 0 | 0 | ✅ |
| galeria.html | 0 | 0 | ✅ |
| midia.html | 0 | 0 | ✅ |
| noticias.html | 0 | 1 | ✅ |
| contato.html | 0 | 0 | ✅ |
| orcamento_hospedagem.html | 0 | 0 | ✅ |
| privacidade.html | 0 | 0 | ✅ |
| obrigado.html | 0 | 0 | ✅ |
| css/style.css | 0 | 0 | ✅ |

**Aviso em `noticias.html` (linha 83):** "Section lacks heading". O `<section>` do destaque "Hortas Urbanas" tinha o título dentro de um `<article>`, e não direto na `section`. Não era erro. **Corrigido** no PR `fix/pequenos-detalhes`: o `article` interno virou `div`, e a página passou a ter 0 erros e 0 avisos.

> ☐ *(manual)* Repetir pelo site oficial em https://validator.w3.org/nu/?doc=https://ecovida2026.up.railway.app/ e salvar o print como `prints/w3c-index.png`. O site do W3C pede uma verificação anti-robô, então isso precisa ser feito por uma pessoa.

## 2. Lighthouse — PageSpeed Insights, celular *(automático)*

Rodado no site publicado. Os links abaixo abrem o relatório completo.

| Página | Desempenho | Acessibilidade | Boas práticas | SEO | Relatório |
|---|---|---|---|---|---|
| Início | 88 | 100 | 100 | 100 | [abrir](https://pagespeed.web.dev/analysis/https-ecovida2026-up-railway-app/bi6efe6bua?form_factor=mobile) |
| Contato | 87 | 96 | 100 | 100 | [abrir](https://pagespeed.web.dev/analysis/https-ecovida2026-up-railway-app-contato-html/bzyrqmhbg6?form_factor=mobile) |
| Mídia | 95 | 100 | 100 | 100 | [abrir](https://pagespeed.web.dev/analysis/https-ecovida2026-up-railway-app-midia-html/q79h1ts6j6?form_factor=mobile) |

Métricas da página inicial (celular): FCP 1,5 s · LCP 2,6 s · TBT 0 ms · CLS 0,189 · Speed Index 1,5 s.

**O que ficou abaixo da meta de 90 e por quê:**
- **Desempenho 87 a 88 (Início e Contato):** o principal motivo é a troca de layout (CLS de 0,165 a 0,189). A barra de acessibilidade e o botão "Menu" são criados pelo JavaScript depois que a página aparece, e isso empurra o cabeçalho para baixo. Uma correção possível é reservar no CSS a altura da barra antes de o script carregar.
- **Acessibilidade 96 (Contato):** as iniciais da equipe (`.team-initials`) não têm contraste suficiente. Elas são decorativas (`aria-hidden="true"`), mas o Lighthouse conta mesmo assim. A correção é escurecer a cor do texto ou do fundo do círculo.

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

## 4. Formulário de contato (validação com JavaScript) *(automático)*

| Teste | Esperado | Resultado |
|---|---|---|
| Enviar vazio | Aviso geral, borda vermelha e mensagem em cada campo | ✅ "Há 5 campos para corrigir antes de enviar." O foco vai para "Nome" e 5 campos recebem `aria-invalid="true"` |
| E-mail sem domínio (`ruan@email`) | Mensagem de e-mail inválido | ✅ "Digite um e-mail válido, como nome@email.com." |
| Mensagem curta (`curta`) | Avisar quantos caracteres faltam | ✅ "Escreva pelo menos 20 caracteres (faltam 15)." |
| Corrigir um campo | O erro some na hora | ✅ `aria-invalid` removido assim que o nome foi corrigido |
| Recarregar com o formulário pela metade | Rascunho recuperado (localStorage) | ✅ Nome e e-mail voltaram, com o aviso "Recuperamos o rascunho…" e o botão "Apagar rascunho" |
| Enviar tudo certo | Ir para `obrigado.html` e apagar o rascunho | ✅ Redirecionou para `obrigado.html` e o rascunho foi apagado do localStorage |
| Leitor de tela anuncia os erros | Aviso com `role="alert"` e erro ligado ao campo | ✅ `role="alert"` no aviso e `aria-describedby="nome-erro"` no campo |
| E-mail chega à equipe pelo FormSubmit | | ☐ *(manual, depois do merge)* |

Print: [`prints/formulario-erros.png`](prints/formulario-erros.png)

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
| Alto contraste continua ligado ao trocar de página | ✅ *(automático)* | Ligado na home, continuou ativo na Sobre (localStorage) |
| Botão "Ouvir a página" presente | ✅ *(automático)* | Aparece quando o navegador tem voz |
| "Ouvir a página" lê em português | ☐ *(manual)* | Precisa ser ouvido por uma pessoa |
| Imagens com texto alternativo | ✅ *(automático)* | 20 imagens nas 12 páginas, todas com `alt` |
| Vídeo e áudio sem autoplay e com controles | ✅ *(automático)* | 0 `autoplay`, 0 mídias sem `controls`; o `iframe` do mapa tem `title` |
| Um único `h1` e `lang="pt-BR"` | ✅ *(automático)* | Nas 12 páginas |
| Leitor de tela (NVDA ou do navegador) | ☐ *(manual)* | |

## 7. Links *(automático)*

| Teste | Resultado |
|---|---|
| 62 links internos (páginas e âncoras) das 12 páginas | ✅ todos abrem (status 200) e as âncoras existem |
| Menu, rodapé e botões da home | ✅ incluídos na verificação acima |
| Links `href="#"` | ✅ os ícones ilustrativos de Instagram, Facebook e LinkedIn, que não levavam a lugar nenhum, foram retirados do rodapé no PR `fix/pequenos-detalhes` |

---

## Melhorias encontradas

1. Reservar no CSS a altura da barra de acessibilidade, para reduzir o CLS e passar de 90 em Desempenho.
2. Aumentar o contraste de `.team-initials` na página de Contato.
3. ~~Zerar o aviso do W3C em `noticias.html`~~ (corrigido no PR `fix/pequenos-detalhes`).
4. ~~Ícones sociais do rodapé sem destino~~ (retirados no PR `fix/pequenos-detalhes`).
