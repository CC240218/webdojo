
describe('Validando alertas do browser', () => {

    let name = 'Rafael'
    let alertConfirm = [
        { btn: "OK", msg: "Você clicou em Ok!", stus: true },
        { btn: "Cancelar", msg: "Você cancelou!", stus: false }
    ];

    beforeEach(() => {
        cy.login();
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    });



    it.only('Deve validar um alerta simples', () => {
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })
        cy.contains('button', 'Mostrar Alert').click();
    });



    alertConfirm.forEach((alert) => {
        it(`Deve validar um alerta de confirmação e clicar no botão ${alert.btn}`, () => {
            cy.on('window:confirm', (msg_C) => {
                expect(msg_C).to.equal('Aperte um botão!')
                return alert.stus;
            });
            cy.on('window:alert', (msg_A) => {
                expect(msg_A).to.equal(alert.msg);
            })
            cy.contains('button', 'Mostrar Confirm').click();
        })
    })


    it('Deve validar um alerta de prompt', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(name);
        })
        cy.on('window:alert', (msg_P) => {
            expect(msg_P).to.equal(`Olá ${name}! Boas-vindas ao WebDojo!`)
        })

        cy.contains('button', 'Mostrar Prompt').click();
    })

    // it.only('testLab', () => {
    //   cy.startPage();
    // })
})