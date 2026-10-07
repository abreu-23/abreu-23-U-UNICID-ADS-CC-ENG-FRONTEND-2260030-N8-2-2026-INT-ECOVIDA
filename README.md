# abreu-23-U-UNICID-ADS-CC-ENG-FRONTEND-2260030-N8-2-2026-INT-ECOVIDA
UNICID – Universidade Cidade de São Paulo

Curso Superior de Informática – Front-End | Atividade A2

Escopo do Projeto

Portal EcoVida Urbana — Guia de Sustentabilidade Diária

1. Identificação
	
Nome da equipe / projeto:	EcoVida Urbana
Nome do site:	Portal EcoVida Urbana
Integrante(s):	Luccas Abreu, Pedro Henrique Pereira da Silva, Pedro Henrique da Silva Alves, Ruan Ferreira Silva
Disciplina / Professor(a):	Front-End — Prof. Paulo Fratta
Data:	22/09/2026
2. Contexto e Justificativa

Nas grandes cidades, o descarte incorreto de resíduos, o desperdício de água e o consumo excessivo de energia agravam problemas ambientais e sociais, especialmente em regiões com pouca infraestrutura de coleta seletiva e educação ambiental. Grande parte da população não sabe onde descartar materiais recicláveis nem como pequenas mudanças de hábito impactam o meio ambiente.

O tema é relevante porque une educação ambiental, mudança de comportamento e inclusão social: ao facilitar o acesso à informação e a pontos de coleta próximos, o portal contribui para reduzir a geração de resíduos e ampliar a participação cidadã em práticas sustentáveis.

A relação com sustentabilidade e impacto social é direta: o projeto propõe conteúdo educativo sobre reciclagem, consumo consciente e economia de água/energia, além de uma funcionalidade de geolocalização de pontos de coleta e um indicador (ilustrativo) de materiais coletados, tornando o impacto ambiental mais tangível para o usuário.

3. Objetivos

Geral

Educar o máximo de pessoas sobre práticas sustentáveis do dia a dia, facilitando o acesso a pontos de coleta de reciclagem e demonstrando o impacto coletivo dessas ações.

Específicos

Apresentar conteúdo educativo sobre reciclagem, consumo consciente, economia de água e energia.
Disponibilizar um mapa/lista de pontos de coleta de materiais recicláveis próximos ao usuário.
Exibir um contador (ilustrativo) de materiais coletados, atualizado periodicamente, para reforçar o senso de impacto coletivo.
Garantir acessibilidade digital para pessoas com deficiência em todas as páginas.
Divulgar projetos, notícias e dados de impacto socioambiental relacionados ao tema.
4. Público-Alvo
Pessoas que têm interesse em adotar hábitos mais sustentáveis.
Faixa etária: crianças, adolescentes e adultos, sem restrição de gênero ou renda.
Localização: inicialmente voltado à cidade de São Paulo, com possibilidade de expansão.
Pessoas com deficiência (visual, motora, auditiva e cognitiva) como público prioritário, garantindo navegação por teclado, leitura por leitores de tela e contraste adequado.
5. Escopo Funcional (o que o site terá)

O Portal EcoVida Urbana reúne 10 páginas HTML5 interligadas por um cabeçalho e um rodapé comuns. Cada página cumpre uma função na jornada do visitante — descobrir o tema, aprender práticas, encontrar onde reciclar, ver o impacto coletivo e entrar em contato — e todas tratam de sustentabilidade e impacto social. Os tópicos abaixo detalham cada item do escopo funcional e como ele se aplica ao site.

5.1 Páginas e suas funções

Nº	Página	Função no site	Conteúdo e elementos principais
1	index.html	Porta de entrada: apresenta o portal, mostra o impacto e encaminha o visitante para as demais páginas.	Hero com o título “Transforme sua Cidade, Comece por Você.” e dois botões; grid de 3 categorias; destaque da semana; lista de pontos de coleta; barra de estatísticas com o contador de materiais reciclados; newsletter; chamada final para a página de impacto.
2	sobre.html	Explica quem somos e por que o projeto existe, dando contexto e confiança.	História do EcoVida Urbana, missão, visão e valores, em seções com títulos h2/h3 e um cartão para cada valor.
3	projetos.html	Mostra as iniciativas práticas de sustentabilidade e impacto social.	Um article por projeto (coleta seletiva de bairro, hortas comunitárias, mutirões de limpeza, feiras de economia solidária), com foto, descrição, local e chamada para participar (leva ao contato).
4	impacto.html	Comprova o resultado coletivo com dados.	Tabelas HTML com legenda e cabeçalhos: materiais reciclados por tipo (plástico, papel, vidro, metal), economia estimada de água e energia e pessoas engajadas. Valores ilustrativos.
5	acessibilidade.html	Declara e explica as medidas de inclusão para pessoas com deficiência, público prioritário do site.	Recursos aplicados (navegação por teclado, link “Pular para o conteúdo”, texto alternativo, contraste, leitores de tela, lang="pt-BR", ARIA); orientações para práticas sustentáveis inclusivas, como pontos de coleta acessíveis; canal para relatar barreiras.
6	galeria.html	Reúne registros visuais das ações sustentáveis.	Fotos em figure com figcaption, alt descritivo e crédito da fonte (autoral ou Pixabay); imagens otimizadas e com carregamento tardio.
7	midia.html	Oferece conteúdo educativo em vídeo e áudio e o mapa dos pontos de coleta.	<video controls poster> educativo; <audio controls> com podcast de dicas; <iframe> com o mapa dos pontos de coleta; legenda ou transcrição em texto para acessibilidade.
8	noticias.html	Aprofunda o tema com notícias, artigos e dicas por categoria.	Lista de article com data, categoria e resumo; inclui “Hortas Urbanas: Como cultivar em pequenos espaços” (destaque da home) e dicas de Lar Sustentável, Transporte Urbano e Reduza e Recicle.
9	contato.html	Canal de comunicação e de adesão ao movimento (“Junte-se ao Movimento”).	Dados fictícios de contato, formulário com validação HTML5 (detalhado em 5.2) e apresentação dos quatro integrantes da equipe.
10	orcamento_hospedagem.html	Documenta a decisão técnica de publicação do site, com critério ambiental.	Relatório comparativo de 3 hospedagens e 3 domínios, com tabela comparativa e justificativa, priorizando hospedagem com práticas ambientais (“verde”). Acesso pelo rodapé.

5.2 Formulário de contato (contato.html)

O formulário usa a validação nativa do HTML5, sem JavaScript, e cada campo tem um rótulo associado por label for. Os campos foram pensados para a adesão ao movimento: o visitante diz quem é, como ser contatado e em qual ação quer participar.

Campo	Tipo HTML5	Validação	Finalidade
Nome completo	text	required	Identificar o contato.
E-mail	email	required; formato de e-mail verificado pelo navegador	Permitir o retorno da equipe.
Telefone	tel	pattern no formato (11) 90000-0000; opcional	Contato alternativo.
Data da ação de interesse	date	data válida; opcional	Indicar quando o visitante quer participar de um mutirão ou visita.
Nº de participantes	number	min e max definidos; opcional	Informar o tamanho do grupo.
Assunto	select	required	Direcionar a mensagem: dúvida, parceria, participar de uma ação ou relatar barreira de acessibilidade.
Mensagem	textarea	required; tamanho mínimo	Detalhar o pedido.
Aceite de privacidade	checkbox	required	Registrar o consentimento para o uso dos dados informados.

Se algum campo estiver inválido, o navegador bloqueia o envio e mostra a mensagem de erro no próprio campo. O envio é demonstrativo nesta etapa, sem servidor.

5.3 Galeria, mídia e notícias

Galeria (galeria.html): mostra as ações sustentáveis em imagens com legenda. Cada foto informa autor e origem, atendendo à exigência de indicar as fontes, e dialoga com a página de projetos.
Mídia (midia.html): concentra os recursos multimídia do site — vídeo, áudio e o mapa incorporado por iframe. O mapa amplia a lista de pontos de coleta da home, e cada recurso tem alternativa em texto para quem não pode ver ou ouvir.
Notícias (noticias.html): recebe os links “Saiba mais” e “Ler Artigo Completo” da home e organiza o conteúdo por data e categoria, o que facilita acrescentar novos artigos.

5.4 Navegação principal

Cabeçalho fixo (continua visível ao rolar a página): logo “EcoVida Urbana”, que leva à home; menu com 9 links — Início, Sobre, Projetos, Impacto, Acessibilidade, Galeria, Mídia, Notícias e Contato — e o botão de destaque “Junte-se ao Movimento”, que leva a contato.html.
Página atual indicada no menu com aria-current="page".
Link “Pular para o conteúdo principal” como primeiro elemento da página, para quem navega por teclado ou leitor de tela.
Foco visível em links, botões e campos, permitindo usar o site inteiro só com o teclado.
Rodapé em todas as páginas: links rápidos (Mapa do site, Sobre nós, Orçamento de hospedagem e Contato), Política de Privacidade e ícones de redes sociais (Instagram, Facebook e LinkedIn). Os dois últimos são ilustrativos, sem destino real nesta entrega.
Responsividade: em telas de até 960 px o menu passa para uma linha própria abaixo da logo, e em telas menores os blocos se organizam em uma única coluna.

5.5 Funcionalidades da página inicial

Funcionalidade	Como funciona no site	Objetivo atendido
Hero (apresentação)	Título, subtítulo e dois botões: “Comece Agora” desce até as categorias da própria página e “Explorar Soluções” leva a projetos.html. A imagem de fundo recebe uma sobreposição escura para manter o contraste do texto.	Educar: apresentar o portal e orientar o primeiro clique.
Grid de categorias	Três cartões com ícone, título, descrição e link: Lar Sustentável (água e energia em casa, leva a noticias.html), Transporte Urbano (bicicleta, transporte público e caronas, leva a projetos.html) e Reduza e Recicle (separação de materiais, leva aos pontos de coleta na própria home). Os cartões se elevam ao passar o mouse.	Conteúdo educativo sobre reciclagem, consumo consciente, água e energia.
Destaque da semana	Imagem à esquerda e texto à direita: tag “Destaque da Semana”, título “Hortas Urbanas: Como cultivar em pequenos espaços”, resumo e botão “Ler Artigo Completo”, que leva a noticias.html. A foto traz o crédito do autor.	Divulgar projetos e notícias socioambientais.
Pontos de coleta de reciclagem	Lista de pontos de coleta na cidade de São Paulo, com nome, endereço e materiais aceitos (plástico, papel, vidro, metal, eletrônicos, óleo, pilhas, lâmpadas e orgânicos), ao lado de uma foto de equipe de coleta. Os pontos são ilustrativos nesta etapa; o mapa interativo, em iframe, fica em midia.html.	Disponibilizar mapa/lista de pontos de coleta próximos ao usuário.
Estatísticas e contador	Barra em verde-menta com três números: “+5.000 pessoas engajadas”, “+200 dicas práticas publicadas” e o contador de materiais reciclados pela rede (128.430 kg). Os valores são ilustrativos. Nesta entrega, em HTML e CSS, o contador é fixo; a atualização em tempo real com JavaScript fica para uma próxima etapa.	Exibir o contador de materiais coletados e reforçar o senso de impacto coletivo.
Newsletter	Formulário com campo de e-mail (type="email", required e label associado) e botão “Inscrever-se”. É demonstrativo, sem envio real.	Manter o visitante engajado com dicas semanais de sustentabilidade.
Chamada final	Faixa com texto e o botão “Ver página de impacto”, que leva a impacto.html e fecha a página conduzindo ao resultado coletivo.	Divulgar os dados de impacto socioambiental.
6. Escopo Não Funcional

Os requisitos não funcionais definem como o site deve se comportar, e não o que ele faz. Para cada item do roteiro, as subseções abaixo trazem a meta, as medidas que serão aplicadas e a forma de verificação. Todas as medidas valem para as 10 páginas, que compartilham o mesmo CSS, cabeçalho e rodapé, e os resultados dos testes serão registrados nas evidências de testes, na pasta /docs.

6.1 Acessibilidade

Meta: atender ao nível AA das diretrizes WCAG 2.1 em todas as páginas, com atenção especial às pessoas com deficiência visual, motora, auditiva e cognitiva, que são o público prioritário do site. A Lei Brasileira de Inclusão (Lei nº 13.146/2015, art. 63) trata da acessibilidade em sítios da internet e serve de referência para o projeto.

Medida	Como será feito
Estrutura semântica	Uso de header, nav, main, section, article e footer; um único h1 por página e h2/h3 em ordem, sem pular níveis. Assim o leitor de tela permite navegar por regiões e por títulos.
Texto alternativo	alt descritivo em toda imagem que informa algo; alt vazio nas imagens apenas decorativas; ícones em SVG marcados com aria-hidden="true"; galeria com figure e figcaption.
Contraste e cor	Texto escuro sobre fundo claro (cinza 
#333333 sobre off-white 
#F4F6F0, razão de 11,6:1), botões amarelos com texto escuro (11,2:1) e textos sobre fotos com sobreposição escura. Meta mínima de 4,5:1 para texto normal e 3:1 para texto grande; pares de cor que ficarem abaixo disso serão ajustados. Nenhuma informação depende só da cor.
Teclado	Toda função acessível por Tab, Shift+Tab e Enter; ordem de tabulação igual à ordem visual; link “Pular para o conteúdo principal” no início da página; foco visível com contorno de 3 px (:focus-visible); sem armadilhas de foco.
Leitores de tela e ARIA	lang="pt-BR" no html; nav com aria-label; aria-current="page" no item ativo do menu; aria-labelledby nas seções; ARIA usado somente quando o HTML nativo não resolve.
Formulários	Todo campo com label for; campos obrigatórios com required e indicação em texto; autocomplete em nome, e-mail e telefone; instruções antes do campo; mensagens de erro do próprio navegador.
Multimídia	Vídeo com controls e poster, sem reprodução automática, com legenda (track) ou transcrição; áudio com controls e transcrição em texto; iframe com title descritivo.
Leitura e movimento	Fontes em rem, para o texto poder ser ampliado até 200% sem perder conteúdo; corpo de texto em 16 px; linhas de até cerca de 60 caracteres; animações curtas e respeito à preferência prefers-reduced-motion.

Como será verificado: navegação de cada página só com o teclado; leitura com o leitor de tela NVDA (ou o recurso de leitura do navegador); checagem de contraste com o WebAIM Contrast Checker; W3C Validator; e auditoria de acessibilidade do Lighthouse, com meta de pelo menos 90 pontos.

6.2 Sustentabilidade

Meta: o próprio site deve seguir o que ensina: conteúdo útil para mudar hábitos, publicação em infraestrutura de menor impacto ambiental e páginas leves, que gastam menos dados e energia.

Medida	Como será feito
Conteúdo educativo	Todas as 10 páginas tratam de sustentabilidade e impacto social. As dicas de Lar Sustentável, Transporte Urbano e Reduza e Recicle usam linguagem simples, trazem ações práticas e indicam a fonte da informação.
Hospedagem verde	A página orcamento_hospedagem.html compara 3 hospedagens e 3 domínios por preço, desempenho, suporte, certificado SSL e práticas ambientais (energia renovável, compensação de carbono, localização do data center). A escolha é justificada por escrito, com preferência para o provedor que declarar essas práticas.
Imagens otimizadas	As fotos do Pixabay serão baixadas e salvas em img/, redimensionadas para a largura de uso (cerca de 1280 px no hero e 800 px nos cartões) e comprimidas em JPEG ou WebP, com meta de até 200 KB por foto. Imagens abaixo da dobra usam loading="lazy" e os ícones são SVG embutido, sem arquivos extras.
Páginas leves	CSS único e sem frameworks; nenhum JavaScript nesta entrega; duas famílias de fonte com poucos pesos; sem vídeo ou áudio com reprodução automática. Meta: peso total da página inicial abaixo de cerca de 1,5 MB.
Alcance e inclusão	Conteúdo aberto, sem cadastro obrigatório (a newsletter é opcional), em português claro, que funciona em celulares simples e conexões lentas.

Como será verificado: tamanho dos arquivos na pasta img/ e peso da página no painel Rede do DevTools; consulta às informações públicas de sustentabilidade de cada provedor, com apoio da ferramenta Green Web Check, da Green Web Foundation; revisão do conteúdo por outro integrante da equipe.

6.3 Responsividade

Meta: o site deve ser usado sem esforço em celular, tablet e desktop, sem rolagem horizontal e sem perder conteúdo.

Medida	Como será feito
Layout fluido	meta viewport em todas as páginas; contêiner com largura máxima de 1160 px e 100% da largura abaixo disso; CSS Grid e Flexbox; medidas em rem, % e fr; títulos com clamp(), que ajusta o tamanho à tela.
Pontos de quebra	Em até 960 px o menu passa para uma linha própria abaixo da logo e os blocos de dois lados (destaque e pontos de coleta) viram uma coluna. Em até 860 px os cartões de categorias e as estatísticas também ficam em uma coluna e o rodapé empilha. Como as 10 páginas usam o mesmo CSS, o comportamento é igual em todas.
Imagens e mídia flexíveis	Imagens com max-width de 100% e object-fit: cover, em alturas controladas; vídeo e iframe mantêm a proporção 16:9 e acompanham a largura da tela.
Tabelas	As tabelas de impacto.html e orcamento_hospedagem.html ficam em um contêiner com rolagem horizontal própria (overflow-x), para não estourar a tela do celular.
Formulários	Campos na largura total no celular, rótulos acima dos campos e botão de envio grande.
Toque	Botões com altura mínima de cerca de 44 px e espaço entre os elementos clicáveis.

Como será verificado: modo dispositivo do DevTools em 360 px (celular), 768 px (tablet) e 1280 px (desktop), conferindo a ausência de rolagem horizontal e de conteúdo cortado; teste em um celular real; prints guardados nas evidências de testes.

6.4 Desempenho

Meta: carregar rápido mesmo em conexão móvel, com nota mínima de 90 no Lighthouse em Desempenho, Acessibilidade, Boas práticas e SEO.

Medida	Como será feito
Imagens leves	Mesmas regras de 6.2 (dimensões certas, compressão e arquivos locais em img/), com width e height declarados em cada imagem para a página não “pular” durante o carregamento.
HTML e CSS enxutos	Um único arquivo CSS, organizado por seções e com variáveis para cores, fontes e espaçamentos; sem regras repetidas ou sem uso; HTML indentado e comentado em português; classes com nomes consistentes. Código validado sem erros no W3C Validator, em HTML e em CSS.
Fontes	Duas famílias (Poppins e Inter) pelo Google Fonts, com preconnect, display=swap e poucos pesos, para o texto aparecer logo.
Mídia sob demanda	Vídeo com poster e preload="metadata"; áudio com preload="none"; iframe com loading="lazy". Os arquivos só são baixados quando o visitante usa o recurso.
JavaScript	Não é usado nesta entrega. Quando entrar (contador em tempo real), será um arquivo único, carregado com defer e sem bibliotecas.

Como será verificado: relatório do Lighthouse (aba do DevTools) de cada página; painel Rede para peso e número de requisições; W3C Validator para HTML e CSS. Os resultados entram nas evidências de testes.

6.5 SEO básico

Meta: cada página deve poder ser entendida por buscadores e por quem chega a ela de fora, com título, descrição e estrutura próprios.

Medida	Como será feito
Título da página	Um title único por página, no formato “Nome da página — EcoVida Urbana”, com até cerca de 60 caracteres.
Meta description	Uma meta description própria em cada página, com 120 a 160 caracteres, resumindo o conteúdo. A home já tem a sua.
Hierarquia de títulos	Um único h1 por página e h2/h3 em ordem, com os termos do tema (reciclagem, consumo consciente, economia de água e energia) usados de forma natural.
Idioma e metadados	lang="pt-BR", meta charset e meta viewport em todas as páginas.
Links e imagens	Textos de link que digam o destino (nos cartões, “Saiba mais” acompanhado do nome do tema, em vez de links genéricos); alt descritivo nas imagens; nomes de arquivo claros, em minúsculas e sem acento (sobre.html, galeria.html).
Páginas ligadas entre si	Todas as 10 páginas são alcançáveis por links HTML comuns a partir do menu ou do rodapé, sem páginas órfãs.

Como será verificado: auditoria de SEO do Lighthouse; W3C Validator; conferência manual da lista de títulos de cada página (h1, h2 e h3 em sequência).

7. Mapa do Site

7.1 Estrutura hierárquica

A index.html é a página raiz. A partir dela, e de qualquer outra página, o visitante chega às demais 9 páginas pelo menu principal, sem precisar voltar à home. Por isso a estrutura é plana: toda página está a um clique de qualquer outra. Os quatro grupos do diagrama são temáticos e servem para organizar o conteúdo, não para criar níveis de navegação. A página orcamento_hospedagem.html é a única fora do menu e é acessada pelo rodapé, por ser um documento técnico do projeto.

Mostrar Imagem

Diagrama hierárquico: a página index.html no topo, ligada a quatro grupos temáticos. Conhecer o projeto: sobre, projetos e notícias. Resultados e inclusão: impacto e acessibilidade. Imagens e mídia: galeria e mídia. Contato e gestão: contato e orçamento de hospedagem, este acessado pelo rodapé.

Figura 1 — Mapa do site do Portal EcoVida Urbana (10 páginas).

7.2 Estrutura interna da página inicial

Ordem	Seção	Âncora / elemento	Função
1	Cabeçalho fixo	header	Logo, menu principal e botão “Junte-se ao Movimento”.
2	Hero	—	Apresenta o portal, com dois botões de ação.
3	Categorias	#categorias	Grid “Por onde você quer começar?” com 3 cartões.
4	Destaque da semana	—	Artigo em destaque, com imagem e texto.
5	Pontos de coleta	#pontos-coleta	Lista de pontos de reciclagem e foto.
6	Estatísticas	—	Números de impacto e contador de materiais reciclados.
7	Newsletter	form	Cadastro de e-mail para receber dicas semanais.
8	Chamada final	—	Convite para conhecer a página de impacto.
9	Rodapé	footer	Links rápidos, redes sociais e direitos autorais.

7.3 Fluxo de navegação

Origem	Elemento	Destino
Qualquer página	Logo “EcoVida Urbana” e item “Início” do menu	index.html
Qualquer página	Menu principal: Sobre, Projetos, Impacto, Acessibilidade, Galeria, Mídia, Notícias e Contato	Página correspondente
Qualquer página	Botão “Junte-se ao Movimento”	contato.html
Qualquer página	Rodapé: “Orçamento de hospedagem”	orcamento_hospedagem.html
Home — hero	Botão “Comece Agora”	#categorias (mesma página)
Home — hero	Botão “Explorar Soluções”	projetos.html
Home — categorias	Cartão “Lar Sustentável”	noticias.html
Home — categorias	Cartão “Transporte Urbano”	projetos.html
Home — categorias	Cartão “Reduza e Recicle”	#pontos-coleta (mesma página)
Home — destaque	Botão “Ler Artigo Completo”	noticias.html
Home — chamada final	Botão “Ver página de impacto”	impacto.html
Páginas internas	Chamadas para agir, como participar de um projeto ou relatar uma barreira de acessibilidade	contato.html

Todas as páginas internas repetem o mesmo cabeçalho e rodapé. O visitante sempre tem caminho de volta e chega a qualquer conteúdo em um único clique.

8. Conteúdo e Identidade Visual
Tom de voz: moderno, limpo, acolhedor e inspirador — transmite esperança e ação, não pessimismo climático.

Paleta de cores adotada:

	Cor	Hex	Uso
	Verde Floresta (primária)	
#2D6A4F	Header, botões de destaque, rodapé
	Verde Menta (secundária)	
#52B788	Seção de estatísticas, ícones e detalhes
	Amarelo Solar (CTA)	
#FFD60A	Botões de ação principal (CTAs)
	Lima (acento)	
#B7EF53	Tags e pequenos destaques
	Off-white (fundo)	
#F4F6F0	Fundo geral das páginas
	Cinza-escuro (texto)	
#333333	Texto de corpo
Tipografia: Poppins (títulos, geométrica e robusta) e Inter (corpo de texto, alta legibilidade), ambas via Google Fonts.
Elementos de design: cantos arredondados em cartões e botões, ícones de linha fina minimalistas, espaçamento generoso entre seções.
Logotipo: ícone de folha estilizada em círculo verde, combinado ao nome "EcoVida Urbana" em Poppins.
Fontes de imagens e textos: conteúdo textual autoral da equipe; imagens fotográficas obtidas no banco gratuito Pixabay, com crédito do autor indicado abaixo de cada foto na página.
9. Tecnologias e Ferramentas
HTML5 e CSS3 para estrutura e estilo — únicas tecnologias utilizadas nesta entrega (Entrega 01).
JavaScript (opcional nesta etapa, conforme o enunciado da atividade) previsto para o contador em tempo real e outras interações em entregas futuras.
Editor de código, controle de versão (Git/GitHub) e validador W3C.
10. Cronograma e Divisão de Tarefas

Esta seção define quando cada etapa acontece e quem responde por ela. As datas abaixo são uma proposta de organização da equipe e devem terminar antes do prazo oficial da atividade, que está informado no Blackboard.

10.1 Etapas e datas

Etapa	O que será feito	Período	Situação
1. Escopo e home	Escopo do projeto (este documento), identidade visual e primeira versão da página inicial.	Até 22/09	Concluída
2. Ajustes da home e base compartilhada	Corrigir a home conforme este escopo (contraste, imagens locais em img/, links e textos de link) e fechar o cabeçalho, o rodapé e o CSS que as outras 9 páginas vão reaproveitar.	07/10 a 09/10	Em andamento
3. Páginas internas	Cada integrante constrói as 3 páginas sob sua responsabilidade (tabela 10.2), usando a base compartilhada e o conteúdo previsto na seção 5.	10/10 a 20/10	A fazer
4. Documentação (/docs)	README.md, diário de bordo (atualizado a cada etapa), orçamento de hospedagem e domínio e evidências de testes.	13/10 a 22/10 (em paralelo à etapa 3)	A fazer
5. Revisão cruzada e testes	Cada página é revisada por outro integrante; depois vêm W3C (HTML e CSS), Lighthouse, teste de teclado, responsividade em 360, 768 e 1280 px e conferência de todos os links.	21/10 a 25/10	A fazer
6. Fechamento	Correções finais, prints da interface (.png), arquivo .txt com os nomes dos integrantes e a descrição da atividade, e montagem do .zip do projeto.	26/10 a 27/10	A fazer
7. Envio	Envio no Blackboard: .zip, .txt, .doc e .png, conforme a atividade.	Conforme o prazo no Blackboard	A fazer

Como funciona o acompanhamento: ao fim de cada etapa a equipe confere o que ficou pronto e registra no diário de bordo as decisões, as dificuldades e o que aprendeu. Se uma etapa atrasar mais de dois dias, o integrante avisa o grupo e as tarefas são redistribuídas.

10.2 Responsável por cada página e função

Integrante	Páginas	Funções gerais
Luccas Abreu	index.html (home)	Coordenação da equipe, escopo do projeto, CSS compartilhado, cabeçalho e rodapé, repositório Git e README.md.
Pedro Henrique Pereira da Silva	sobre.html, projetos.html, noticias.html	Textos do conteúdo do portal, créditos das imagens e revisão de português.
Pedro Henrique da Silva Alves	impacto.html, acessibilidade.html, galeria.html	Tabela de impacto, conferência de acessibilidade (alt, contraste, teclado) e evidências de testes.
Ruan Ferreira Silva	midia.html, contato.html, orcamento_hospedagem.html	Formulário de contato e sua validação, vídeo, áudio e iframe, e orçamento de hospedagem e domínio.

Tarefas de toda a equipe: diário de bordo, revisão cruzada das páginas (cada integrante revisa as páginas de outro), validação no W3C das próprias páginas e envio final. A distribuição acima é uma proposta inicial e pode ser ajustada de comum acordo, desde que cada uma das 10 páginas continue com um responsável.

10.3 Ferramentas de gestão

Git e GitHub: repositório único com a estrutura de pastas do projeto (css/, js/, img/, assets/, docs/); cada integrante trabalha em sua branch e junta ao projeto principal depois da revisão, para ninguém sobrescrever o arquivo do outro.
Trello (ou Notion): quadro com as colunas “A fazer”, “Fazendo”, “Em revisão” e “Pronto”, com um cartão por página e por documento da pasta /docs, cada um com responsável e data.
Grupo de mensagens da equipe: avisos rápidos e combinados do dia a dia; as decisões importantes vão para o diário de bordo.
11. Riscos e Restrições

Esta seção lista o que pode atrasar ou impedir a entrega e o que já sabemos que limita o projeto desde o começo.

11.1 Riscos e como reduzi-los

Risco	Efeito possível	Prevenção e resposta
Atraso de um integrante	Páginas sem responsável perto do prazo.	Quadro de tarefas visível, aviso antecipado ao grupo e redistribuição das páginas; metas intermediárias em vez de tudo no fim.
Falta de tempo na reta final	Validação e documentação feitas às pressas.	Cronograma termina cerca de uma semana antes do prazo do Blackboard e a documentação é feita junto com as páginas.
Páginas diferentes entre si	Menu, cores e espaçamentos inconsistentes.	CSS único e compartilhado, com variáveis de cor e fonte; cabeçalho e rodapé copiados da home sem alteração.
Links quebrados	Visitante cai em página inexistente.	Os nomes dos arquivos são fixados na seção 7; conferência de todos os links do mapa do site antes do envio.
Erros no W3C ou na acessibilidade	Perda de pontos nos critérios de avaliação.	Validar cada página ao terminá-la, e não só no final; lista de verificação da seção 6 usada na revisão cruzada.
Conflito ou perda de arquivos	Trabalho refeito ou sobrescrito.	Git com uma branch por integrante; cópia do projeto no GitHub; nomes de arquivo combinados.
Imagens indisponíveis ou pesadas	Página lenta ou com imagem quebrada.	Baixar as imagens do Pixabay para img/, comprimir e usar alt; nunca depender do endereço externo da foto.
Dificuldade técnica	Dúvida em tabela responsiva, formulário ou vídeo, por exemplo.	Pesquisar na documentação (MDN, W3Schools), perguntar ao professor e dividir o problema; registrar a solução no diário de bordo.
Aumento do escopo	Tentar fazer mais do que cabe no prazo (contador em tempo real real, mapa interativo).	Manter a Entrega 01 só em HTML e CSS; itens que exigem JavaScript ficam como evolução futura.
Erro no formato de envio	Atividade recusada ou incompleta.	Conferir, antes do envio, a lista: .zip, .txt, .doc e .png, com os nomes de todos os integrantes.

11.2 Restrições do projeto

Prazo: o prazo é o da atividade no Blackboard e não pode ser estendido pela equipe.
Equipe: 4 integrantes que também têm outras disciplinas e compromissos, o que limita as horas semanais disponíveis.
Conhecimento técnico: a equipe está em aprendizado de front-end, então o projeto usa recursos básicos de HTML5 e CSS3 e evita bibliotecas e frameworks.
Tecnologia: a Entrega 01 é só HTML e CSS, sem JavaScript e sem back-end. Por isso o contador de materiais coletados é um número fictício e fixo, a lista de pontos de coleta é estática e o formulário não envia dados para servidor.
Conteúdo e imagens: imagens somente de bancos gratuitos (Pixabay), com crédito do autor, e textos autorais da equipe. Dados de impacto são ilustrativos.
Publicação: o site não será colocado no ar nesta entrega; o orçamento de hospedagem e domínio é um estudo comparativo.
