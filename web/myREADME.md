# WebDojo

Projeto de automação de testes end-to-end utilizando **Cypress**.

## 📌 Visão Geral

O **WebDojo** é um projeto voltado para testes automatizados de
aplicações web, com foco em garantir a qualidade dos principais fluxos
da aplicação por meio do Cypress.

## 🛠 Tecnologias Utilizadas

-   **Node.js**
-   **Cypress**
-   **JavaScript / TypeScript**
-   **Serve**

## 📁 Estrutura do Projeto

    webdojo/
    ├── cypress/
    │   ├── e2e/
    │   │   └── (arquivos de testes .cy.js)
    │   ├── fixtures/
    │   │   ├── actions.png
    │   │   ├── dataTest.json
    │   │   ├── eu.jpeg
    │   │   ├── example.json
    │   │   └── lorem_document.pdf
    │   ├── screenshots/
    │   ├── support/
    │   │   ├── commands.js
    │   │   ├── e2e.js
    │   │   ├── index.d.ts
    │   │   └── utils.js
    ├── dist/
    ├── cypress.config.js
    ├── package.json
    └── README.md

## ⚙️ Scripts Disponíveis

``` json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

## ✅ Pré-requisitos

-   **Node.js 18+**
-   **npm** ou **yarn**

## 📦 Instalação

``` bash
git clone <url-do-repositorio>
cd webdojo
npm install
```

## ▶️ Execução da Aplicação

``` bash
npm run dev
```

Aplicação disponível em: **http://localhost:3000**

## 🧪 Execução dos Testes

### Executar todos os testes

``` bash
npm run test
```

### Executar apenas o teste de login em modo mobile

``` bash
npm run test:login:mobile
```

## 📂 Descrição das Pastas

### cypress/e2e/

Contém os arquivos de testes automatizados (`*.cy.js`).

### cypress/fixtures/

-   Imagens (.png, .jpeg)
-   Massa de dados (.json)
-   Documentos (.pdf)

### cypress/support/

-   **commands.js** --- comandos customizados\
-   **e2e.js** --- configurações globais\
-   **index.d.ts** --- tipagem personalizada\
-   **utils.js** --- funções utilitárias reutilizáveis

### cypress/screenshots/

Armazena screenshots geradas automaticamente em falhas de testes.

## 🤝 Contribuição

1.  Criar branch a partir da `main`
2.  Implementar as alterações
3.  Criar commits
4.  Abrir Pull Request

## 📄 Licença

Projeto de uso educacional para fins de estudo em automação de testes.
