
describe('Testes de links externos', () => {

    beforeEach(()=> {
        cy.login();
    })

    it('Deve validar os atributos do link de redirecionamento do instagran', () => {
        /*
        Validação de uma ação na pagina que redireciona para outra janela/aba do browser.
        O teste valida os atributos do componente que caracterizam seu redirect
        */

        cy.assLinkInstgrRedirect('https://www.instagram.com/qapapito')

    });

    it('Deve validar o link de termos, removendo o target blank', () => {
        /*
        Validação de uma ação na pagina que redireciona para outra janela/aba do browser.
        Porém, desta vez, invocando uma função javascript com o invoke() para remover o atributo de redirecionamento,
        para manter-se na mesma pagina
        */
        
        cy.goTo('Formulários', 'Consultoria')

        cy.clickLinkTermsNoRedirect('termos de uso')

        cy.contains('h1', 'Termos de Uso')
        .should('be.visible')
    })
})