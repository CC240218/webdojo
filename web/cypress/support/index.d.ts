
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Abre o chat.
     * @example cy.openChat()
     */
    openChat(): Chainable<void>;

    /**
     * Valida a mesagem automatica do chat
     * @param text
     * @example cy.messageBotEntry('texto do chat')
     */
    messageBotEntry(text: string): Chainable<void>

     /**
     * Valida a mesagem automatica do chat
     * @param text
     * @example cy.messageUserEntry('texto do options clicado')
     */
    messageUserEntry(text: string): Chainable<void>

    /**
     * Clicar em alguma opção do chatbot
     * @param textOption
     * @example cy.clickOptions('texto da opção que deseja clicar')
     */
    clickOptions(textOption: string): Chainable<void>

    /**
     * Validadar opções de escolha no chat
     * @param textOption
     * @example cy.messageOptions('texto da opção do chat')
     */
    messageOptions(textOption: string): Chainable<void>

    /**
     * Digita e envia na area de texto
     * @param codTracking 
     * @example cy.typeEnv('codigo de rastreio')
     */
    typeEnv(codTracking: string): Chainable<void>
    
  }
}