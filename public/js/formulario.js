// Validação do formulário de contato com JavaScript.
// - Impede o envio com erro (preventDefault) e mostra a mensagem embaixo de cada campo.
// - Marca o campo com borda vermelha e aria-invalid, para o leitor de tela anunciar o erro.
// - Salva um rascunho no localStorage: se a pessoa recarregar a página, nada se perde.
// Sem JavaScript, a validação do HTML5 (required, type, pattern) continua valendo.

(function () {
  const formulario = document.getElementById("formulario-contato");
  if (!formulario) return;

  const CHAVE_RASCUNHO = "ecovida-rascunho-contato";
  const CAMPOS_RASCUNHO = ["nome", "email", "telefone", "assunto", "data-acao", "participantes", "mensagem"];

  // Mensagem de erro de cada campo (retorna "" quando está tudo certo)
  const regras = {
    nome: function (valor) {
      if (!valor) return "Informe seu nome completo.";
      if (valor.split(/\s+/).length < 2) return "Digite nome e sobrenome.";
      return "";
    },
    email: function (valor) {
      if (!valor) return "Informe seu e-mail.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) return "Digite um e-mail válido, como nome@email.com.";
      return "";
    },
    telefone: function (valor) {
      if (valor && !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(valor)) return "Use o formato (11) 90000-0000.";
      return "";
    },
    assunto: function (valor) {
      return valor ? "" : "Escolha um assunto.";
    },
    "data-acao": function (valor) {
      if (valor && valor < "2026-01-01") return "Escolha uma data a partir de 1º de janeiro de 2026.";
      return "";
    },
    participantes: function (valor) {
      if (!valor) return "";
      const numero = Number(valor);
      if (!Number.isInteger(numero) || numero < 1 || numero > 50) return "Informe um número de 1 a 50.";
      return "";
    },
    mensagem: function (valor) {
      if (!valor) return "Escreva sua mensagem.";
      if (valor.length < 20) return "Escreva pelo menos 20 caracteres (faltam " + (20 - valor.length) + ").";
      return "";
    },
    privacidade: function (_valor, campo) {
      return campo.checked ? "" : "Para enviar, aceite a Política de Privacidade.";
    }
  };

  // O JavaScript assume a validação; o CSS usa esta classe para os estilos de erro
  formulario.setAttribute("novalidate", "");
  formulario.classList.add("js-validacao");

  // Aviso geral, lido pelo leitor de tela quando o envio é bloqueado
  const aviso = document.createElement("p");
  aviso.className = "form-aviso";
  aviso.setAttribute("role", "alert");
  aviso.hidden = true;
  formulario.prepend(aviso);

  // Cria (uma vez) o espaço da mensagem de erro e liga ao campo com aria-describedby
  function espacoDeErro(campo) {
    const id = campo.id + "-erro";
    let erro = document.getElementById(id);
    if (!erro) {
      erro = document.createElement("span");
      erro.id = id;
      erro.className = "form-erro";
      const caixa = campo.closest(".form-field, .form-check");
      caixa.append(erro);
      const descricao = campo.getAttribute("aria-describedby");
      campo.setAttribute("aria-describedby", descricao ? descricao + " " + id : id);
    }
    return erro;
  }

  function validarCampo(campo) {
    const valor = campo.type === "checkbox" ? "" : campo.value.trim();
    const mensagem = regras[campo.id](valor, campo);
    const erro = espacoDeErro(campo);
    erro.textContent = mensagem;
    campo.classList.toggle("campo-erro", mensagem !== "");
    if (mensagem) {
      campo.setAttribute("aria-invalid", "true");
    } else {
      campo.removeAttribute("aria-invalid");
    }
    return mensagem === "";
  }

  const campos = Object.keys(regras)
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const invalidos = campos.filter(function (campo) {
      return !validarCampo(campo);
    });

    if (invalidos.length) {
      aviso.textContent =
        invalidos.length === 1
          ? "Há 1 campo para corrigir antes de enviar."
          : "Há " + invalidos.length + " campos para corrigir antes de enviar.";
      aviso.hidden = false;
      invalidos[0].focus();
      return;
    }

    // Tudo certo: apaga o rascunho e envia de verdade ao FormSubmit
    aviso.hidden = true;
    apagarRascunho();
    formulario.submit();
  });

  // Depois da primeira tentativa, o erro some assim que a pessoa corrige o campo
  campos.forEach(function (campo) {
    const evento = campo.type === "checkbox" || campo.tagName === "SELECT" ? "change" : "input";
    campo.addEventListener(evento, function () {
      if (campo.classList.contains("campo-erro")) validarCampo(campo);
      salvarRascunho();
    });
    campo.addEventListener("blur", function () {
      if (campo.value.trim() !== "" || campo.classList.contains("campo-erro")) validarCampo(campo);
    });
  });

  // ----- Rascunho no localStorage -----
  // localStorage pode estar bloqueado (aba anônima, cookies desligados)
  function salvarRascunho() {
    const dados = {};
    CAMPOS_RASCUNHO.forEach(function (id) {
      const campo = document.getElementById(id);
      if (campo) dados[id] = campo.value;
    });
    try {
      localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(dados));
    } catch (erro) {
      // Sem armazenamento: o formulário funciona, só não guarda o rascunho
    }
  }

  function apagarRascunho() {
    try {
      localStorage.removeItem(CHAVE_RASCUNHO);
    } catch (erro) {
      // nada a fazer
    }
  }

  function restaurarRascunho() {
    let dados = null;
    try {
      dados = JSON.parse(localStorage.getItem(CHAVE_RASCUNHO));
    } catch (erro) {
      dados = null;
    }
    if (!dados) return;

    let restaurou = false;
    CAMPOS_RASCUNHO.forEach(function (id) {
      const campo = document.getElementById(id);
      if (campo && dados[id]) {
        campo.value = dados[id];
        restaurou = true;
      }
    });

    if (restaurou) {
      const nota = document.createElement("p");
      nota.className = "form-rascunho";
      nota.setAttribute("role", "status");
      nota.textContent = "Recuperamos o rascunho que você começou a escrever. ";

      const limpar = document.createElement("button");
      limpar.type = "button";
      limpar.className = "form-rascunho-limpar";
      limpar.textContent = "Apagar rascunho";
      limpar.addEventListener("click", function () {
        apagarRascunho();
        formulario.reset();
        campos.forEach(function (campo) {
          campo.classList.remove("campo-erro");
          campo.removeAttribute("aria-invalid");
          const erro = document.getElementById(campo.id + "-erro");
          if (erro) erro.textContent = "";
        });
        nota.remove();
        document.getElementById("nome").focus();
      });

      nota.append(limpar);
      aviso.after(nota);
    }
  }

  restaurarRascunho();
})();
