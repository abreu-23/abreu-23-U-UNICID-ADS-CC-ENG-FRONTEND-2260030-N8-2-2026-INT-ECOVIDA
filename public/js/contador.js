// Contador de materiais reciclados (página inicial) em SIMULAÇÃO.
// O número não vem de dados reais: a cada poucos segundos o JavaScript soma
// alguns quilos ao total, para mostrar como seria um contador ao vivo.
// Um aviso "Simulação" aparece junto ao número, para não enganar o visitante.
// Sem JavaScript, o número fica parado no valor inicial do HTML.

(function () {
  const contador = document.getElementById("counter-total");
  if (!contador) return;

  const INTERVALO_MS = 4000; // de quanto em quanto tempo o número sobe
  const formato = new Intl.NumberFormat("pt-BR");

  // Lê o valor inicial do HTML ("128.430" vira 128430)
  let total = Number(contador.textContent.replace(/\D/g, "")) || 0;

  // Aviso visível de que é uma simulação, logo abaixo do rótulo do número
  const rotulo = contador.closest("div").querySelector(".stat-label");
  const aviso = document.createElement("p");
  aviso.className = "contador-aviso";
  aviso.textContent = "Simulação: número fictício que sobe sozinho";
  (rotulo || contador.parentElement).insertAdjacentElement("afterend", aviso);

  // Soma de 1 a 3 kg, como se novas entregas fossem registradas
  function somarEntrega() {
    total += Math.floor(Math.random() * 3) + 1;
    contador.textContent = formato.format(total);
  }

  let temporizador = null;

  function iniciar() {
    if (temporizador === null) {
      temporizador = setInterval(somarEntrega, INTERVALO_MS);
    }
  }

  function parar() {
    clearInterval(temporizador);
    temporizador = null;
  }

  // Pausa quando a aba não está visível, para não gastar processamento à toa
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      parar();
    } else {
      iniciar();
    }
  });

  iniciar();
})();
