# Guimacar — Site Institucional

Site oficial da Guimacar, stand de venda de viaturas usadas em Fafe.

🔗 **Site em produção:** https://www.guimacar.com

## Sobre

Site estático que apresenta o stock de viaturas disponíveis, informações de contacto e detalhes de cada carro à venda. Alojado através do GitHub Pages.

## Estrutura do projeto

```
├── index.html          # Página inicial
├── stock.html          # Listagem de viaturas com filtros
├── detalhes.html        # Ficha individual de cada viatura (via ?id=)
├── contacto.html        # Página de contactos
├── privacidade.html     # Política de privacidade
├── cookies.html          # Política de cookies
├── termos.html           # Termos e condições
├── carros.js             # Base de dados das viaturas (array stockGuimacar)
├── loader.js              # Script partilhado (menu, header, etc.)
├── footer.html            # Rodapé partilhado, injetado via fetch()
├── sitemap.xml            # Mapa do site para motores de busca
├── robots.txt              # Instruções para crawlers
└── img/                    # Imagens do site e fotos das viaturas
```

## Tecnologias

- HTML5 / JavaScript puro (sem framework)
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [Font Awesome](https://fontawesome.com/) para ícones
- Google Analytics (gtag.js)
- Alojamento: GitHub Pages
- Domínio: NameCheap (renovar)

## Como adicionar/editar uma viatura

As viaturas são definidas no ficheiro `carros.js`, no array `stockGuimacar`. Cada viatura é um objeto com campos como `id`, `marca`, `modelo`, `preco`, `kms`, `combustivel`, `fotos` (array de caminhos de imagem), `extras`, entre outros. Para destacar viatura/adicionar iva dedutivel, colocar a condição como true.

Para adicionar uma viatura nova:
1. Colocar as fotos na pasta `img/` (ex: `img/carroX/1.jpeg`, `img/carroX/2.jpeg`, ...).
2. Adicionar um novo objeto ao array `stockGuimacar` em `carros.js`, com um `id` único.
3. Publicar as alterações (commit + push).

## Desenvolvimento local

Por ser um site estático, basta abrir os ficheiros `.html` num servidor local, por exemplo:

```bash
npx serve .
```

ou usar a extensão "Live Server" do VS Code.

## Deploy

O deploy é automático via GitHub Pages: qualquer alteração feita `push` para o branch principal é publicada em produção.

## Contacto

Para questões sobre o site, contactar ritamoreiraguimaraes@gmail.com .
