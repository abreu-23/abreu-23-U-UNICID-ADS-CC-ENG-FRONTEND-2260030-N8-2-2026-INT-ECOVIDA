// Servidor do EcoVida Urbana: entrega o site estático de public/
// e a rota do EcoBot (/api/assistente).
import express from "express";
import { responder } from "./lib/faq.js";

const app = express();
const PORTA = process.env.PORT || 3000;
const TAMANHO_MAXIMO_PERGUNTA = 300;

// Não anuncia a tecnologia do servidor nas respostas
app.disable("x-powered-by");

app.use(express.json({ limit: "2kb" }));

// Site: as páginas, o CSS, o JS e os arquivos de mídia
app.use(express.static("public"));

// EcoBot: recebe { pergunta } e devolve { texto, links }.
// As perguntas não são guardadas nem registradas em log.
app.post("/api/assistente", (req, res) => {
  const pergunta = req.body?.pergunta;

  if (typeof pergunta !== "string" || !pergunta.trim()) {
    return res.status(400).json({ erro: "Envie uma pergunta em texto." });
  }
  if (pergunta.length > TAMANHO_MAXIMO_PERGUNTA) {
    return res.status(400).json({ erro: `A pergunta pode ter até ${TAMANHO_MAXIMO_PERGUNTA} caracteres.` });
  }

  res.json(responder(pergunta));
});

// Página não encontrada
app.use((req, res) => {
  res.status(404).type("text").send("Página não encontrada.");
});

// Erros: JSON inválido ou grande demais vira 400; o resto, 500 sem detalhes
app.use((erro, req, res, next) => {
  if (erro.type === "entity.parse.failed" || erro.type === "entity.too.large") {
    return res.status(400).json({ erro: "Pedido inválido." });
  }
  console.error(erro);
  res.status(500).json({ erro: "Erro interno. Tente novamente." });
});

app.listen(PORTA, () => {
  console.log(`EcoVida Urbana rodando em http://localhost:${PORTA}`);
});
