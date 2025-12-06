

describe('gerenciamento de perfis do github', () => {


    let rafa = [

        { id: "name", fill: "Rafael" },
        { id: "username", fill: "CC240218" },
        { id: "profile", fill: "QA" }
    ]
    let rafa2 = [
        { id: "name", fill: "Rafael" },
        { id: "username", fill: "rafaGit" },
        { id: "profile", fill: "QA" }
    ];
    let mari = [
        { id: "name", fill: "Mariely" },
        { id: "username", fill: "AzevedoFarm" },
        { id: "profile", fill: "Farmacia" }
    ];

    let nameInput = ["Nome", "Username", "Perfil"];


    beforeEach(() => {
        cy.login();
        cy.goTo('Tabela', 'Perfis do GitHub')
    });

    context('happy test', () => {
        it('Deve adicionar um perfil do github', () => {
            rafa.forEach((rafa) => {
                cy.filltext(rafa.id, rafa.fill)
            })
            cy.submitForm('Adicionar Perfil');

            rafa2.forEach((rafa) => {
                cy.filltext(rafa.id, rafa.fill)
            });
            cy.submitForm('Adicionar Perfil');

            mari.forEach((mari) => {
                cy.filltext(mari.id, mari.fill)
            })
            cy.submitForm('Adicionar Perfil');

            cy.assTableGithub(rafa2)

        });

        it('Deve remover um perfil github', () => {
            mari.forEach((mari) => {
                cy.filltext(mari.id, mari.fill)
            })
            cy.submitForm('Adicionar Perfil');

            cy.excludeProf(mari[1].fill)
            cy.assExcludePrf(mari[1].fill)
        });

        it('Deve direcionar para a pagina do github', () => {
            mari.forEach((mari) => {
                cy.filltext(mari.id, mari.fill)
            })
            cy.submitForm('Adicionar Perfil');
            cy.assExternalLinkGthub(mari[1].fill)
        })
    })

    context('DDT - Data driven test', () => {
        rafa.slice(0, 2).forEach((input) => {
            it(`Deve realizar uma busca por ${input.id}`, () => {
                rafa.forEach((rafa) => {
                    cy.filltext(rafa.id, rafa.fill)
                })
                cy.submitForm('Adicionar Perfil');

                mari.forEach((mari) => {
                    cy.filltext(mari.id, mari.fill)
                })
                cy.submitForm('Adicionar Perfil');

                cy.searchProfile(input.fill)

                cy.assTableGithub(rafa)
                cy.assExcludePrf(mari[1].fill) /* Reaproveitamento de comando para validar 
                                            que um dado que não deu o mach, saiu da tabela*/
            })
        })
    });

    context('validation erros', () => {

        it('Deve validaro erro de campos vazios', () => {
            cy.submitForm('Adicionar Perfil');

            nameInput.forEach((input) => {
                cy.errInputEmpt(input);
            })
        })
    })
});