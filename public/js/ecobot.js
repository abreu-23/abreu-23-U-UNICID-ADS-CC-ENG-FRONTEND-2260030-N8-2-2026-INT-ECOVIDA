// EcoBot: assistente de dúvidas do EcoVida Urbana.
// O widget só existe quando o JavaScript carrega; sem JS, o site funciona igual.
// As respostas vêm do servidor, na rota /api/assistente.

(function () {
  const SUGESTOES = ["Onde descarto pilhas?", "Como separar o lixo?", "Quero participar de um projeto"];
  const LINK_INTERNO = /^[a-z0-9_-]+\.html(#[a-z0-9-]+)?$/i;

  // Cria um elemento com classe e texto, sem usar innerHTML
  function criar(tag, classe, texto) {
    const elemento = document.createElement(tag);
    if (classe) elemento.className = classe;
    if (texto) elemento.textContent = texto;
    return elemento;
  }

  function montarWidget() {
    const widget = criar("aside", "ecobot");
    widget.setAttribute("aria-label", "Assistente EcoBot");

    const botaoAbrir = criar("button", "ecobot-toggle");
    botaoAbrir.type = "button";
    botaoAbrir.setAttribute("aria-expanded", "false");
    botaoAbrir.setAttribute("aria-controls", "ecobot-painel");
    botaoAbrir.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
    botaoAbrir.append(criar("span", "", "Dúvidas? EcoBot"));

    const painel = criar("section", "ecobot-painel");
    painel.id = "ecobot-painel";
    painel.hidden = true;
    painel.setAttribute("aria-labelledby", "ecobot-titulo");

    const topo = criar("div", "ecobot-topo");
    const titulo = criar("h2", "", "EcoBot");
    titulo.id = "ecobot-titulo";
    const botaoFechar = criar("button", "ecobot-fechar", "Fechar");
    botaoFechar.type = "button";
    botaoFechar.setAttribute("aria-label", "Fechar o EcoBot");
    topo.append(titulo, botaoFechar);

    const mensagens = criar("div", "ecobot-mensagens");
    mensagens.setAttribute("role", "log");
    mensagens.setAttribute("aria-live", "polite");

    const sugestoes = criar("div", "ecobot-sugestoes");
    SUGESTOES.forEach(function (texto) {
      const botao = criar("button", "ecobot-sugestao", texto);
      botao.type = "button";
      botao.addEventListener("click", function () {
        perguntar(texto);
      });
      sugestoes.append(botao);
    });

    const formulario = criar("form", "ecobot-form");
    const rotulo = criar("label", "", "Sua pergunta");
    rotulo.htmlFor = "ecobot-pergunta";
    const campo = criar("input");
    campo.id = "ecobot-pergunta";
    campo.type = "text";
    campo.maxLength = 300;
    campo.autocomplete = "off";
    campo.required = true;
    const botaoEnviar = criar("button", "btn btn-primary", "Enviar");
    botaoEnviar.type = "submit";
    const linha = criar("div", "ecobot-linha");
    linha.append(campo, botaoEnviar);
    formulario.append(rotulo, linha);

    const aviso = criar("p", "ecobot-aviso", "Respostas automáticas. Suas perguntas não são guardadas.");

    painel.append(topo, mensagens, sugestoes, formulario, aviso);
    widget.append(painel, botaoAbrir);
    document.body.append(widget);

    // Mostra uma mensagem no histórico (autor: "bot" ou "voce")
    function adicionarMensagem(autor, texto, links) {
      const mensagem = criar("div", "ecobot-msg ecobot-msg--" + autor);
      mensagem.append(criar("span", "visually-hidden", autor === "bot" ? "EcoBot: " : "Você: "));
      mensagem.append(criar("p", "", texto));
      (links || []).forEach(function (link) {
        if (!LINK_INTERNO.test(link.href)) return;
        const ancora = criar("a", "", link.rotulo);
        ancora.href = link.href;
        mensagem.append(ancora);
      });
      mensagens.append(mensagem);
      mensagens.scrollTop = mensagens.scrollHeight;
      return mensagem;
    }

    async function perguntar(texto) {
      const pergunta = texto.trim();
      if (!pergunta) return;
      adicionarMensagem("voce", pergunta);
      const pensando = adicionarMensagem("bot", "Pensando…");
      botaoEnviar.disabled = true;

      try {
        const resposta = await fetch("/api/assistente", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pergunta: pergunta }),
        });
        const dados = await resposta.json();
        pensando.remove();
        if (!resposta.ok) throw new Error(dados.erro);
        adicionarMensagem("bot", dados.texto, dados.links);
      } catch (erro) {
        pensando.remove();
        adicionarMensagem(
          "bot",
          "Não consegui responder agora. Tente de novo em instantes ou fale com a equipe.",
          [{ href: "contato.html#formulario-contato", rotulo: "Ir para o contato" }]
        );
      } finally {
        botaoEnviar.disabled = false;
      }
    }

    function abrir() {
      painel.hidden = false;
      botaoAbrir.setAttribute("aria-expanded", "true");
      if (!mensagens.childElementCount) {
        adicionarMensagem(
          "bot",
          "Olá! Sou o EcoBot. Pergunte sobre pontos de coleta, separação do lixo, água, energia ou os projetos."
        );
      }
      campo.focus();
    }

    function fechar() {
      painel.hidden = true;
      botaoAbrir.setAttribute("aria-expanded", "false");
      botaoAbrir.focus();
    }

    botaoAbrir.addEventListener("click", function () {
      painel.hidden ? abrir() : fechar();
    });
    botaoFechar.addEventListener("click", fechar);

    // Esc fecha o painel e devolve o foco ao botão
    painel.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape") fechar();
    });

    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();
      perguntar(campo.value);
      campo.value = "";
      campo.focus();
    });
  }

  montarWidget();
})();
