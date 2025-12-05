// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />




Cypress.Commands.add('openChat', () => {
    cy.get('button[aria-label="Open Chat"]')
    .should('be.visible')
    .click();
});

Cypress.Commands.add('messageBotEntry', (text, timeout=4000) => {
    cy.contains('.rcb-bot-message-entry', text, {timeout:timeout})
    .should('be.visible');
});

Cypress.Commands.add('messageUserEntry', (text) => {
    cy.contains('.rcb-user-message-entry', text)
    .should('be.visible');
});

Cypress.Commands.add('messageOptions', (textOption) => {
     cy.contains('.rcb-options', textOption)
     .should('be.visible')
});

Cypress.Commands.add('clickOptions', (textOption) => {

    cy.contains('.rcb-options', textOption)
    .should('be.visible').click();
});

Cypress.Commands.add('typeEnv', (codTraking) => {

    cy.get('textarea[placeholder^="Escreva sua mensagem"]')
    .type(codTraking)
    .then(()=> cy.get('.rcb-send-button')
               .click())
});