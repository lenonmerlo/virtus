# Virtus Financial Landing Page

Landing page em React + Vite para a Virtus Financial, com suporte a português e inglês, CTA multicanal e layout responsivo alinhado ao design fornecido.

## Principais recursos

- Interface em React com Vite e estilização centralizada em CSS puro.
- Toggle de idioma (pt/en) via contexto de i18n.
- Seções: Hero, Sobre, Serviços, Por que Virtus e CTA com contatos (e-mail, WhatsApp, LinkedIn, Instagram).
- Layout responsivo otimizado para mobile e desktop.

## Requisitos

- Node.js 18+ (recomendado 20 LTS).
- npm (vem junto com o Node.js).

## Como rodar

```bash
npm install
npm run dev
```

O Vite sobe em modo dev e exibe a URL no terminal (tipicamente http://localhost:5173).

## Scripts disponíveis

- `npm run dev`: servidor de desenvolvimento com HMR.
- `npm run build`: build de produção em `dist/`.
- `npm run preview`: serve o build de produção localmente.
- `npm run lint`: roda o ESLint com as regras do projeto.

## Estrutura do projeto

```
src/
	assets/           # imagens e ícones
	components/       # blocos reutilizáveis (layout, seções, UI)
	styles/           # estilos globais (landing.css)
	i18n.jsx          # dicionário pt/en e provider
	main.jsx, App.jsx # bootstrap do app
```

## Personalização

- Textos e traduções: ajuste em [src/i18n.jsx](src/i18n.jsx).
- Estilos globais e responsividade: edite [src/styles/landing.css](src/styles/landing.css).
- Assets: substitua arquivos em `src/assets/` mantendo nomes e proporções desejadas.

## Build e deploy

1. `npm run build` gera a pasta `dist/` com os arquivos estáticos otimizados.
2. Sirva o conteúdo de `dist/` em qualquer hosting estático (Vercel, Netlify, S3, etc.).

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).
