# Clicou Comprou - Landing Page Next.js

Landing page mobile-first de alta conversão para grupo de ofertas e bugs de preço no WhatsApp. Desenvolvida em React utilizando Next.js (App Router).

## Recursos Implementados

- 100% de fidelidade visual ao layout original
- Mascote interativo SVG com rastreamento de olhar pelo ponteiro, piscar periódico e animação comemorativa de clique
- Fantasminha flutuante com interpolação suave de scroll (`lerp`) acelerado por GPU
- Barra de CTA fixa inferior com exibição inteligente baseada na rolagem
- Revelação de elementos com animação escalonada via IntersectionObserver
- Rastreamento analítico desacoplado disparando `lead_click` no `window.dataLayer`
- Delay de 2 segundos no CTA com prevenção contra cliques múltiplos para envio seguro de eventos de conversão
- Suporte a acessibilidade com desativação automática de efeitos sob `prefers-reduced-motion`

---

## Como Rodar Localmente

1. Instalar as dependências:
   ```bash
   npm install
   ```

2. Configurar a variável de ambiente:
   Copie `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Edite o link do grupo do WhatsApp no arquivo `.env.local`:
   ```env
   NEXT_PUBLIC_WHATSAPP_LINK=https://chat.whatsapp.com/SEU-LINK-REAL
   ```

3. Iniciar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000` no seu navegador.

---

## Como Hospedar na Vercel

### Opção 1: Pelo Painel Web da Vercel (Recomendado via GitHub)
1. Suba esta pasta para um repositório no seu GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**.
3. Selecione o repositório importado.
4. Em **Environment Variables**, adicione:
   - `NEXT_PUBLIC_WHATSAPP_LINK`: o link oficial do seu grupo.
5. Clique em **Deploy**. A Vercel gerará o build e o certificado SSL automaticamente.

### Opção 2: Pela CLI da Vercel
1. No terminal, dentro da pasta do projeto, execute:
   ```bash
   npx vercel
   ```
2. Siga os passos na tela e insira a variável `NEXT_PUBLIC_WHATSAPP_LINK` quando solicitado ou configure pelo dashboard.

