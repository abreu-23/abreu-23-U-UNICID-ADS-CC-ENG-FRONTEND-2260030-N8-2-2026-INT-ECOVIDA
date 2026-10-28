// Menu recolhível no celular (até 960 px de largura).
// Sem JavaScript, o menu continua todo visível, como antes.
// No computador, o CSS esconde o botão e a lista aparece normalmente.

(function () {
  const navegacao = document.querySelector(".main-nav");
  const lista = navegacao && navegacao.querySelector("ul");
  if (!lista) return;

  lista.id = "menu-principal";

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "menu-toggle";
  botao.setAttribute("aria-expanded", "false");
  botao.setAttribute("aria-controls", "menu-principal");
  botao.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  botao.append("Menu");
  navegacao.insertBefore(botao, lista);

  // A classe avisa ao CSS que o menu pode ser recolhido
  document.documentElement.classList.add("menu-recolhivel");

  function definirAberto(aberto) {
    botao.setAttribute("aria-expanded", String(aberto));
    navegacao.classList.toggle("menu-aberto", aberto);
  }

  botao.addEventListener("click", function () {
    definirAberto(botao.getAttribute("aria-expanded") !== "true");
  });

  // Esc fecha o menu e devolve o foco ao botão
  navegacao.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && navegacao.classList.contains("menu-aberto")) {
      definirAberto(false);
      botao.focus();
    }
  });
})();
