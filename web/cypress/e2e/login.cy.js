import { login } from '../fixtures/dataTest.json';
import { toDayFormat } from '../support/utils';
let loginUser;

describe('Login', () => {

  beforeEach(() => {
    cy.startPage();
    loginUser = JSON.parse(JSON.stringify(login)) // Clone da massa de teste

  })

  context('sucess', () => {
    it('Deve logar com sucesso', () => {

      cy.loginSubmit(loginUser.email, loginUser.pass)
      cy.validationLoginUser(loginUser.user)

      cy.getCookie('login_date').should('exist')
        .and((cook) => {
          expect(cook.value).to.equal(toDayFormat())
        });
      cy.window().then((win) => {
        const token = win.localStorage.getItem('token')
        expect(token).to.match(/^[a-fA-F0-9]{32}$/)
      })
    });
  });

  context('validation error', () => {

    it('Deve validar o email email não cadastrado', () => {
      loginUser.email = 'teste@teste.com'
      cy.loginSubmit(loginUser.email, loginUser.pass)
      cy.alertShouldBe(loginUser.alertErr.forbiden)
    });

    it('Deve validar a senha não cadastrada', () => {
      loginUser.pass = 'teste123'
      cy.loginSubmit(loginUser.email, loginUser.pass)
      cy.alertShouldBe(loginUser.alertErr.forbiden)

    });

    it('Deve validar um email em formato valido', () => {
      loginUser.email = 'teste100';
      cy.loginSubmit(loginUser.email, loginUser.pass)
      cy.mesageError(loginUser.alertErr.errInvalidEmail)

    });

    it('Deve validar o campo email vazio', () => {
      cy.loginSubmit(null, loginUser.pass);
      cy.mesageError(loginUser.alertErr.emptEmail)
    })

    it('Deve validar o campo senha vazio', () => {
      cy.loginSubmit(loginUser.email);
      cy.mesageError(loginUser.alertErr.emptPass)
    })

  });


})