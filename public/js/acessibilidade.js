// Barra de acessibilidade: leitura da página por voz, tamanho do texto e modo alto contraste.
// A barra só existe quando o JavaScript carrega; sem JS, o site funciona igual.

(function () {
  const CHAVE_CONTRASTE = "ecovida-alto-contraste";
  const CHAVE_TEXTO = "ecovida-tamanho-texto";
  // Percentuais sobre o tamanho escolhido no navegador (o CSS usa rem, então tudo acompanha)
  const NIVEIS_TEXTO = [90, 100, 115, 130, 150];
  const NIVEL_PADRAO = 100;
  const raiz = document.documentElement;

  // localStorage pode estar bloqueado (aba anônima, cookies desligados)
  function lerPreferencia(chave) {
    try {
      return localStorage.getItem(chave);
    } catch (erro) {
      return null;
    }
  }

  function salvarPreferencia(chave, valor) {
    try {
      localStorage.setItem(chave, valor);
    } catch (erro) {
      // Sem armazenamento: a escolha vale só nesta página
    }
  }

  function nivelSalvo() {
    const nivel = Number(lerPreferencia(CHAVE_TEXTO));
    return NIVEIS_TEXTO.indexOf(nivel) !== -1 ? nivel : NIVEL_PADRAO;
  }

  function aplicarTamanhoTexto(nivel) {
    raiz.style.fontSize = nivel === NIVEL_PADRAO ? "" : nivel + "%";
    // Com texto maior, o CSS reorganiza o cabeçalho para o menu não se espremer
    raiz.classList.toggle("texto-ampliado", nivel > NIVEL_PADRAO);
  }

  // Aplica as escolhas salvas o quanto antes, para evitar "piscar" a página
  raiz.classList.toggle("alto-contraste", lerPreferencia(CHAVE_CONTRASTE) === "sim");
  aplicarTamanhoTexto(nivelSalvo());

  function criarBotao(texto) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "barra-acessibilidade-botao";
    botao.textContent = texto;
    return botao;
  }

  function montarBarra() {
    const barra = document.createElement("div");
    barra.className = "barra-acessibilidade";
    barra.setAttribute("role", "region");
    barra.setAttribute("aria-label", "Recursos de acessibilidade");

    const conteudo = document.createElement("div");
    conteudo.className = "container barra-acessibilidade-inner";
    barra.append(conteudo);

    // ----- Leitura por voz -----
    const temVoz = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    if (temVoz) {
      const botaoOuvir = criarBotao("Ouvir a página");
      let lendo = false;

      function pararLeitura() {
        window.speechSynthesis.cancel();
        lendo = false;
        botaoOuvir.textContent = "Ouvir a página";
      }

      // Divide o texto em trechos curtos: alguns navegadores cortam falas longas
      function trechosDaPagina() {
        const principal = document.getElementById("conteudo-principal") || document.body;
        return principal.innerText
          .split(/\n+|(?<=[.!?])\s+/)
          .map(function (trecho) {
            return trecho.trim();
          })
          .filter(function (trecho) {
            return trecho.length > 1;
          });
      }

      function vozEmPortugues() {
        const vozes = window.speechSynthesis.getVoices();
        return (
          vozes.find(function (voz) {
            return voz.lang === "pt-BR";
          }) ||
          vozes.find(function (voz) {
            return voz.lang.indexOf("pt") === 0;
          }) ||
          null
        );
      }

      function iniciarLeitura() {
        const trechos = trechosDaPagina();
        if (!trechos.length) return;
        window.speechSynthesis.cancel();
        lendo = true;
        botaoOuvir.textContent = "Parar leitura";
        const voz = vozEmPortugues();

        trechos.forEach(function (trecho, indice) {
          const fala = new SpeechSynthesisUtterance(trecho);
          fala.lang = "pt-BR";
          if (voz) fala.voice = voz;
          if (indice === trechos.length - 1) {
            fala.onend = pararLeitura;
          }
          window.speechSynthesis.speak(fala);
        });
      }

      botaoOuvir.addEventListener("click", function () {
        lendo ? pararLeitura() : iniciarLeitura();
      });

      // Não continua falando ao sair da página
      window.addEventListener("pagehide", function () {
        window.speechSynthesis.cancel();
      });

      conteudo.append(botaoOuvir);
    }

    // ----- Tamanho do texto -----
    let nivelAtual = nivelSalvo();

    // Texto visível curto ("A+") + complemento lido pelos leitores de tela
    function criarBotaoTexto(visivel, oculto) {
      const botao = criarBotao(visivel);
      const complemento = document.createElement("span");
      complemento.className = "visually-hidden";
      complemento.textContent = " " + oculto;
      botao.append(complemento);
      return botao;
    }

    const grupoTexto = document.createElement("div");
    grupoTexto.className = "barra-acessibilidade-grupo";
    grupoTexto.setAttribute("role", "group");
    grupoTexto.setAttribute("aria-label", "Tamanho do texto");

    const botaoDiminuir = criarBotaoTexto("A−", "diminuir texto");
    const botaoAumentar = criarBotaoTexto("A+", "aumentar texto");
    const status = document.createElement("span");
    status.className = "barra-acessibilidade-status";
    status.setAttribute("role", "status");

    function atualizarTexto() {
      aplicarTamanhoTexto(nivelAtual);
      status.textContent = "Texto " + nivelAtual + "%";
      const posicao = NIVEIS_TEXTO.indexOf(nivelAtual);
      botaoDiminuir.disabled = posicao === 0;
      botaoAumentar.disabled = posicao === NIVEIS_TEXTO.length - 1;
    }

    function mudarTexto(passo) {
      const posicao = NIVEIS_TEXTO.indexOf(nivelAtual) + passo;
      if (posicao < 0 || posicao >= NIVEIS_TEXTO.length) return;
      nivelAtual = NIVEIS_TEXTO[posicao];
      salvarPreferencia(CHAVE_TEXTO, String(nivelAtual));
      atualizarTexto();
    }

    botaoDiminuir.addEventListener("click", function () {
      mudarTexto(-1);
    });
    botaoAumentar.addEventListener("click", function () {
      mudarTexto(1);
    });

    grupoTexto.append(botaoDiminuir, status, botaoAumentar);
    conteudo.append(grupoTexto);
    atualizarTexto();

    // ----- Alto contraste -----
    const botaoContraste = criarBotao("Alto contraste");
    botaoContraste.setAttribute("aria-pressed", String(raiz.classList.contains("alto-contraste")));
    botaoContraste.addEventListener("click", function () {
      const ativo = !raiz.classList.contains("alto-contraste");
      raiz.classList.toggle("alto-contraste", ativo);
      botaoContraste.setAttribute("aria-pressed", String(ativo));
      salvarPreferencia(CHAVE_CONTRASTE, ativo ? "sim" : "nao");
    });
    conteudo.append(botaoContraste);

    // Logo depois do link "Pular para o conteúdo", antes do cabeçalho
    const cabecalho = document.querySelector(".site-header");
    document.body.insertBefore(barra, cabecalho);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montarBarra);
  } else {
    montarBarra();
  }
})();
