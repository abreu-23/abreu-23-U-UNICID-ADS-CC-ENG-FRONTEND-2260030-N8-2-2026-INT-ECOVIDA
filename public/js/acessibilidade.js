// Barra de acessibilidade: leitura da página por voz e modo alto contraste.
// A barra só existe quando o JavaScript carrega; sem JS, o site funciona igual.

(function () {
  const CHAVE_CONTRASTE = "ecovida-alto-contraste";
  const raiz = document.documentElement;

  // localStorage pode estar bloqueado (aba anônima, cookies desligados)
  function lerPreferencia() {
    try {
      return localStorage.getItem(CHAVE_CONTRASTE) === "sim";
    } catch (erro) {
      return false;
    }
  }

  function salvarPreferencia(ativo) {
    try {
      localStorage.setItem(CHAVE_CONTRASTE, ativo ? "sim" : "nao");
    } catch (erro) {
      // Sem armazenamento: o contraste vale só nesta página
    }
  }

  // Aplica o contraste salvo o quanto antes, para evitar "piscar" a página clara
  raiz.classList.toggle("alto-contraste", lerPreferencia());

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

    // ----- Alto contraste -----
    const botaoContraste = criarBotao("Alto contraste");
    botaoContraste.setAttribute("aria-pressed", String(raiz.classList.contains("alto-contraste")));
    botaoContraste.addEventListener("click", function () {
      const ativo = !raiz.classList.contains("alto-contraste");
      raiz.classList.toggle("alto-contraste", ativo);
      botaoContraste.setAttribute("aria-pressed", String(ativo));
      salvarPreferencia(ativo);
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
