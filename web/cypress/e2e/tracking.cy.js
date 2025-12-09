import { cenariosTrack as cenarios } from '../fixtures/dataTest.json'

describe('Automação do chat de consultar status de entrega', () => {

  beforeEach(() => {
    cy.startPage()
  })

  cenarios.forEach(function (cenario) {

    it(cenario.nametest, () => {

      //cy.viewport('iphone-xr');

      cy.openChat();
      cy.messageBotEntry('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
      cy.messageOptions('Sim, por favor!')
      cy.messageOptions('Não, obrigado.')
      cy.clickOptions('Sim, por favor!')
      cy.messageUserEntry('Sim, por favor!')
      cy.messageBotEntry('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
      cy.envCodTrak(cenario.codTraking)
      cy.messageUserEntry(cenario.codTraking)
      cy.messageBotEntry(`Confirmando: você informou o código de rastreio ${cenario.codTraking}. Está tudo certo?`)
      cy.messageOptions('Sim, está certo!')
      cy.messageOptions('Não, quero corrigir.')
      cy.clickOptions('Sim, está certo!')
      cy.messageUserEntry('Sim, está certo!')
      cy.messageBotEntry('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
      cy.messageBotEntry(cenario.message);


    });
  });

})