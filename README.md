<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/17xfJIOOEXtuX3VQf6BIYMaSl5OkfLnPg

## Como Executar o Projeto Localmente (Passo a Passo)

### 1. Pré-requisitos
- **Node.js** (versão 18 ou superior instalada em seu computador): [Baixar Node.js](https://nodejs.org/)

---

### 2. Passo a Passo no Terminal / Prompt de Comando

1. **Abra o terminal** na pasta do projeto descompactado:
   ```bash
   cd caminho/para/o/projeto
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **(Opcional) Configurar a chave do Gemini:**
   - Duplique o arquivo `.env.example` e renomeie para `.env` ou `.env.local`
   - Adicione sua chave da API do Google Gemini se desejar utilizar o assistente ministerial interativo:
     ```env
     GEMINI_API_KEY=sua_chave_aqui
     ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   - Abra [http://localhost:3000](http://localhost:3000) (ou o endereço indicado no seu terminal).

---

### 3. Comandos Úteis

- `npm run dev`: Inicia o servidor local com recarregamento rápido.
- `npm run build`: Gera a versão otimizada de produção na pasta `dist/`.
- `npm run preview`: Visualiza localmente o build final de produção.

