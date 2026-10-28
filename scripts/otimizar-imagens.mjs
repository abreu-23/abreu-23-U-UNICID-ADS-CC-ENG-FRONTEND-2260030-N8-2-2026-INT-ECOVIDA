// Baixa as fotos do Pixabay usadas no site, converte para WebP leve
// e troca os links no HTML e no CSS para os arquivos locais em public/img/.
//
// Uso (na raiz do projeto): npm run imagens
// - Fotos em <img> (conteúdo): 800 px de largura.
// - Fotos de fundo do CSS e capas de vídeo: 1280 px de largura.
// - Cada arquivo fica com no máximo 200 KB.
// Pode rodar de novo: links que já são locais são ignorados.

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PASTA_SITE = "public";
const PASTA_IMG = path.join(PASTA_SITE, "img");
const LIMITE_BYTES = 200 * 1024;
const LARGURA_CONTEUDO = 800;
const LARGURA_FUNDO = 1280;
const URL_PIXABAY = /https:\/\/cdn\.pixabay\.com\/photo\/[^"')\s]+/g;

// "…/plastic-bottles-115069_1280.jpg" → "plastic-bottles-115069"
function nomeDaFoto(url) {
  return path.basename(url).replace(/_\d+\.\w+$/, "");
}

async function arquivosDoSite() {
  const nomes = await readdir(PASTA_SITE);
  const paginas = nomes.filter((nome) => nome.endsWith(".html")).map((nome) => path.join(PASTA_SITE, nome));
  return [...paginas, path.join(PASTA_SITE, "css", "style.css")];
}

// Baixa a foto e salva em WebP, baixando a qualidade até caber no limite
async function gerarWebp(url, largura) {
  const destino = path.join(PASTA_IMG, `${nomeDaFoto(url)}-${largura}.webp`);
  const resposta = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!resposta.ok) throw new Error(`Falha ao baixar ${url}: ${resposta.status}`);
  const original = Buffer.from(await resposta.arrayBuffer());

  for (let qualidade = 75; qualidade >= 40; qualidade -= 7) {
    const { data, info } = await sharp(original)
      .resize({ width: largura, withoutEnlargement: true })
      .webp({ quality: qualidade })
      .toBuffer({ resolveWithObject: true });
    if (data.length <= LIMITE_BYTES || qualidade - 7 < 40) {
      await writeFile(destino, data);
      console.log(`${path.basename(destino)}: ${info.width}x${info.height}, ${Math.round(data.length / 1024)} KB (qualidade ${qualidade})`);
      return { arquivo: path.basename(destino), largura: info.width, altura: info.height };
    }
  }
}

async function main() {
  await mkdir(PASTA_IMG, { recursive: true });
  const arquivos = await arquivosDoSite();
  const conteudos = new Map();
  const paraConteudo = new Set();
  const paraFundo = new Set();

  // 1. Descobre onde cada foto é usada
  for (const arquivo of arquivos) {
    const texto = await readFile(arquivo, "utf8");
    conteudos.set(arquivo, texto);
    const tagsImg = texto.match(/<img\b[^>]*>/gs) || [];
    tagsImg.forEach((tag) => (tag.match(URL_PIXABAY) || []).forEach((url) => paraConteudo.add(url)));
    const semTagsImg = texto.replace(/<img\b[^>]*>/gs, "");
    (semTagsImg.match(URL_PIXABAY) || []).forEach((url) => paraFundo.add(url));
  }

  // 2. Gera os arquivos WebP
  const versaoConteudo = new Map();
  const versaoFundo = new Map();
  for (const url of paraConteudo) versaoConteudo.set(url, await gerarWebp(url, LARGURA_CONTEUDO));
  for (const url of paraFundo) versaoFundo.set(url, await gerarWebp(url, LARGURA_FUNDO));

  // 3. Troca os links: <img> ganha src local e width/height corretos
  for (const [arquivo, texto] of conteudos) {
    const prefixo = arquivo.endsWith(".css") ? "../img/" : "img/";
    let novo = texto.replace(/<img\b[^>]*>/gs, (tag) => {
      const url = (tag.match(URL_PIXABAY) || [])[0];
      if (!url) return tag;
      const foto = versaoConteudo.get(url);
      return tag
        .replace(url, `${prefixo}${foto.arquivo}`)
        .replace(/width="\d+"/, `width="${foto.largura}"`)
        .replace(/height="\d+"/, `height="${foto.altura}"`);
    });
    novo = novo.replace(URL_PIXABAY, (url) => `${prefixo}${versaoFundo.get(url).arquivo}`);
    if (novo !== texto) {
      await writeFile(arquivo, novo);
      console.log(`atualizado: ${arquivo}`);
    }
  }
}

main().catch((erro) => {
  console.error(erro);
  process.exit(1);
});
