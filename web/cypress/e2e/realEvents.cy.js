describe('Teste no evento mouseover', () => {

    beforeEach(() => {
        cy.login()


    })
    context('Teste mouseover com trigger', () => {
        /*
        === TRIGGER() ===
        O comando trigger() do Cypress é usado para disparar 
        eventos DOM em elementos selecionados. 
        */

        it('Deve capturar o texto no tooltip do evento mouseover', () => {
            cy.get('[data-cy=instagram-link]').trigger('mouseover');
        })
    })

    context('Teste mouseover com realEvents', () => {
        /*
        === REALHOVER() ===
        O comando realHover() do plugin cypress-real-events simula
        o movimento real do mouse sobre um elemento, seja um evento DOM ou um estilo CSS.
        */

        it('Deve ativar tooltip simulando o hover do mouse', () => {
            cy.get('[data-cy=instagram-link]').realHover();
        })
    })

})