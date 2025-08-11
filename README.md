# Cypress Kabum Automation

Projeto pronto para executar testes Cypress que adicionam e removem produtos do carrinho no site da Kabum.

## Requisitos
- Node.js 18+ (recomendado)
- npm

## Instalação
1. Extraia o zip e entre na pasta:
   ```bash
   cd cypress-kabum-automation
   ```

2. Instale dependências:
   ```bash
   npm install
   ```

3. (Opcional) Verifique o arquivo `.env`. O projeto vem com `BASE_URL` apontando para:
   ```
   BASE_URL=https://www.kabum.com.br/
   ```

## Rodando os testes

- Modo interativo (GUI):
  ```bash
  npm start
  ```

- Modo headless (CLI):
  ```bash
  npm test
  ```

## Estrutura principal
```
cypress/
  e2e/ -> testes
  pages/ -> page objects
  support/ -> comandos customizados
.env
package.json
cypress.config.js
README.md
```

## Observações
- Alguns seletores no site podem mudar com o tempo. Se um teste falhar por causa de seletor, atualize os seletores em `cypress/pages` e `cypress/support/commands.js`.
