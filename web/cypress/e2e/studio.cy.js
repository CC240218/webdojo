/*
Esse teste tem como finalidade exemplificar o uso do Cypress Studio, 
uma ferramenta que permite a criação de testes através de uma interface gráfica, 
sem a necessidade de escrever código manualmente. 
Como pode ser visto, o recurso não gera uma boa estrategia de localizadores,
pois utiliza seletores muito específicos que podem ser frágeis a mudanças na aplicação, 
ou até funções desnecessárias.
*/

describe('template spec', () => {

  /* ==== Test Created with Cypress Studio ==== */
  it('teste com o cypress studio', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email').clear('pa');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').clear();
    cy.get('#password').type('katana123');
    cy.get('.bg-\\[\\#8257E5\\]').click();
    /* ==== End Cypress Studio ==== */
  });
})