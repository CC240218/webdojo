import { adress as cep } from '../fixtures/dataTest.json'

describe('Buscar CEP, testando integrações', () => {

    beforeEach(() => {
        cy.login();
        cy.goTo('Integração', 'Consulta de CEP')
    })

    it('Deve realizar a busca de um CEP válido', () => {
        cy.filltext(cep[4].id, cep[4].zipCode);
        cy.btnSearchCep('Buscar');
        cep.slice(0, 3).forEach((add) => {
            cy.assInputValue(add.id, add.value)
        });
    });

    it('Não deve realizar busca com CEP invalido', () => {
        cy.alertWindow('CEP inválido')

        cy.filltext('cep', '123');
        cy.btnSearchCep('Buscar');
    })

});