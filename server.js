// Servidor do EcoVida Urbana: entrega o site estático de public/
// e, em breve, a rota do EcoBot (/api/assistente).
import express from "express";

const app = express();
const PORTA = process.env.PORT || 3000;

// Não anuncia a tecnologia do servidor nas respostas
app.disable("x-powered-by");

app.use(express.json());

// Site: as páginas, o CSS e os arquivos de mídia
app.use(express.static("public"));

// Página não encontrada
app.use((req, res) => {
  res.status(404).type("text").send("Página não encontrada.");
});

app.listen(PORTA, () => {
  console.log(`EcoVida Urbana rodando em http://localhost:${PORTA}`);
});
