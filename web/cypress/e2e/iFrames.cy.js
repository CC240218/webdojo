
describe('Interagindo com iFrames', () => {

    it(`Deve iniciar o video dentro de um iFRame`, () => {
        cy.login();

        cy.goTo('Video', 'Video')

        cy.wait(1000)

        cy.iFrameVideo('play')

    });

    it(`Deve pausar o video dentro de um iFRame`, () => {
        cy.login()

        cy.goTo('Video', 'Video')
        cy.wait(1000)

        cy.iFrameVideo('play')
        cy.wait(1000)
        cy.iFrameVideo('pause')

    })


})