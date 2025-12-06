import dataTest from '../fixtures/dataTest.json'; // Usado no command preencherFormulario()

describe('Tela formulario consultoria', () => {

    let user;
    let longtext;
    let tags;
    let channel;
    let typePerson;
    let err;
    let terms;
    let file;

    before(() => {
        cy.fixture('dataTest').then(data => {
            // usado no testes DDT e erros de validação

            user = data.dataUser;
            longtext = data.longTxt;
            tags = data.tagsTec;
            channel = data.discovery;
            typePerson = data.typePerson;
            err = data.errMsgs;
            terms = data.terms;
            file = data.typeFiles
        });
    });

    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    });


    context('happy tests', () => {

        it('Deve preencher e enviar o formulario de consultoria com sucesso', () => {
           cy.preencherFormulario(dataTest);
           /*
           Todos os commands criados, foram encapsulados dentro do command preencherFormulario(),
           para facilitar a manutenção e organização do código.
           */

        });


    });

    context('Data driven test', () => {
        // Por questões academicas, esse DDT não será refatorado! *****
        
        const file = require('../fixtures/dataTest.json').typeFiles;
        const submitPerson = require('../fixtures/dataTest.json').typePerson;
        const consultory = require('../fixtures/dataTest.json').typeConsultory;
        /* 
            Aqui foi usando o require(), devido a fixture estar dentro de um before(),
            e não carregar a fixture antes do it()  
        */
        file.forEach((file) => {
            it(`Deve validar o envio do formulario com os tipos de arquivos permitidos (${file.type})`, () => {

                user.forEach((data) => {
                    cy.filltext(data.idComponent, data.value);

                });
                cy.addFile(file.file);
                cy.checkTerms(terms.acept)
                cy.submitForm('Enviar formulário')
                cy.wait(1000)
                cy.shouldBeSuccess('Sucesso!', longtext.msgSuccess);
            });
        });


        submitPerson.forEach((typePerson) => {
            it(`Deve enviar o formulario como ${typePerson.person}`, () => {

                user.forEach((data) => {
                    cy.filltext(data.idComponent, data.value);
                });

                cy.radioBeChecked(typePerson.person);
                cy.inputTypePerson(typePerson.type, typePerson.num);
                cy.assertValuePersonNumber(typePerson.type, typePerson.mask);
                cy.checkTerms(true);
                cy.submitForm('Enviar formulário');
                cy.wait(1000);
                cy.shouldBeSuccess('Sucesso!', longtext.msgSuccess);

            });
        });

        consultory.forEach((data) => {
            it(`Deve enviar o formulario com o tipo de consultoria ${data}`, () => {

                user.forEach((dataUser) => {
                    cy.filltext(dataUser.idComponent, dataUser.value);
                });
                cy.selectConsultancy(data);
                cy.assertConsultancyValue(data)

                cy.checkTerms(terms.acept);
                cy.submitForm('Enviar formulário');
                cy.wait(1000);
                cy.shouldBeSuccess('Sucesso!', longtext.msgSuccess);

            });
        })

    });

    context('Validation errors tests', () => {
        // por questões academicas, esse bloco não será refatorado! *****
        it('Não deve enviar o formulario sem preencher os campos obrigatórios', () => {
            cy.submitForm('Enviar formulário')
            cy.requiredField(err[0].idComponent, err[0].emptName)
            cy.requiredField(err[1].idComponent, err[1].emptEmail)
            cy.errTermsNoCheked('termos de uso', err[2].emptTerms)
        });

    })


});





