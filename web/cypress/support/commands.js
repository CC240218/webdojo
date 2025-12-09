// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// 
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
import 'cypress-real-events'
import { toDayFormat } from './utils'


Cypress.Commands.add('startPage', () => {

    cy.viewport(1440, 900)
    cy.visit('/')
    cy.contains('h2', 'Acesse sua conta')
        .should('be.visible')

});

Cypress.Commands.add('goTo', (nameButton, titlePage) => {
    cy.contains('button', nameButton)
        .should('be.visible').click()

    cy.contains('h1', titlePage)
        .should('be.visible')
})

Cypress.Commands.add('loginSubmit', (email, pass) => {
    if (email == null) {
        cy.get('#password').type(pass)
    } else if (pass == null) {
        cy.get('#email').type(email)
    } else {
        cy.get('#email').type(email)
        cy.get('#password').type(pass)
    }
    cy.contains('button', 'Entrar').click()
});


Cypress.Commands.add('validationLoginUser', (nameUSer) => {
    cy.get('[data-cy=user-name]')
        .should('be.visible')
        .and('have.text', nameUSer)
})

Cypress.Commands.add('alertShouldBe', (alertText) => {
    cy.contains(alertText)
        .should('be.visible')
});

Cypress.Commands.add('mesageError', (mesageText) => {
    cy.contains('p', mesageText)
        .should('be.visible')
});

Cypress.Commands.add('filltext', (idField, txtField) => {
    cy.get(`#${idField}`).type(txtField)
});

Cypress.Commands.add('selectConsultancy', (option) => {
    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(option)

});

Cypress.Commands.add('assertConsultancyValue', (expectedValue) => {
    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .should('have.value', expectedValue);
});

Cypress.Commands.add('radioBeChecked', (txtRadio) => {
    cy.contains('label', txtRadio)
        .find('input')
        .check()
        .should('be.checked');
});
Cypress.Commands.add('radioNotBeChecked', (txtRadio) => {
    cy.contains('label', txtRadio)
        .find('input')
        .should('not.be.checked');
});

Cypress.Commands.add('inputTypePerson', (personType, personNumber) => {
    cy.contains('label', personType)
        .parent()
        .find('input')
        .type(personNumber)

});

Cypress.Commands.add('assertValuePersonNumber', (personType, maskNumberValue) => {
    if (personType === 'CNPJ') {
        cy.contains('label', personType)
            .parent()
            .find('input')
            .should('have.value', maskNumberValue);
    } else if (personType === 'CPF') {
        if (personType === 'CNPJ') {
            cy.contains('label', personType)
                .parent()
                .find('input')
                .should('have.value', maskNumberValue);
        }
    }
});

Cypress.Commands.add('checkBoxOption', (option) => {
    cy.contains('span', option)
        .parent()
        .find('input')
        .check()
        .should('be.checked')
});

Cypress.Commands.add('addFile', (nameFile) => {
    cy.get('input[type="file"]')
        .selectFile(`cypress/fixtures/${nameFile}`, { force: true })
});

Cypress.Commands.add('textDetails', (txtArea) => {
    cy.get('#details').type(txtArea);
});

Cypress.Commands.add('addTag', (txtTag) => {
    cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(`${txtTag}{enter}`)

    cy.contains('label', 'Tecnologias')
        .parent()
        .within(() => {
            // O within limita o escopo da busca para o elemento pai em vez de global.
            cy.contains('span', txtTag)
                .should('be.visible')
        });
});

Cypress.Commands.add('checkTerms', (statusTerms) => {

    if (statusTerms === true) {
        cy.contains('label', 'termos de uso')
            .parent()
            .within(() => {
                cy.get('input[type="checkbox"]')
                    .check()
                    .should('be.checked');
            });
    } else {
        throw new Error("__-__ O parametro que foi passado nos termos, não foi valido para localiza-lo__-__");

    }
});

Cypress.Commands.add('submitForm', (nameButtonSubmit) => {
    cy.contains('button', nameButtonSubmit).click();
});

Cypress.Commands.add('shouldBeSuccess', (title, msg) => {
    cy.get('.modal', { timeout: 7000 })
        .should('be.visible')
        .find('.modal-header')
        .should('have.text', title)
        .parent()
        .find('.modal-content')
        .should('have.text', msg)
});


Cypress.Commands.add('requiredField', (id, msgErr) => {
    cy.get(`#${id}`)
        .parent()
        .within(() => {
            cy.contains('p', msgErr)
                .should('be.visible')
                .and('have.css', 'color', 'rgb(248, 113, 113)')
        });
});

Cypress.Commands.add('errTermsNoCheked', (term, msgErr) => {
    cy.contains('label', term)
        .parent()
        .within(() => {
            cy.contains('p', msgErr)
                .should('be.visible')
                .and('have.css', 'color', 'rgb(248, 113, 113)')
        });
});

Cypress.Commands.add('assLinkInstgrRedirect', (link) => {
    cy.get('[data-cy="instagram-link"]')
        .should('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank')
});

Cypress.Commands.add('clickLinkTermsNoRedirect', (linkTms) => {
    cy.contains('a', linkTms)
        .invoke('removeAttr', 'target')
        .click();
});

Cypress.Commands.add('iFrameVideo', (statusVideo) => {

    cy.get('iframe[title="Video Player"]')
        .should('exist')
        .its('0.contentDocument.body')
        .then(cy.wrap).as('video')

    cy.get('@video')
        .find(`.${statusVideo}-button`)
        .click()

    if (statusVideo == 'play') {
        cy.get('@video')
            .find('.pause-button')
            .should('be.visible')
    } else if (statusVideo == 'pause') {
        cy.get('@video')
            .find('.play-button')
            .should('be.visible')
    } else {

        throw new Error('Error: O PARAMETRO ESTÁ ESPERANDO play OU pause')
    }
});

Cypress.Commands.add('dragDropTask', (typeColumn, titleTask) => {
    const dataTransfer = new DataTransfer()
    cy.contains('div[draggable=true]', titleTask)
        .trigger('dragstart', { dataTransfer })

    cy.get(`.column-${typeColumn}`)
        .trigger('drop', { dataTransfer })
        .should('include.text', titleTask)
});

Cypress.Commands.add('assDragDrop', (typeColumn, titleTask) => {

    if (typeColumn == 'todo') {
        cy.get('.column-done')
            .should('not.include.text', titleTask)
        cy.get('.column-todo')
            .should('include.text', titleTask)

    } else if (typeColumn == 'done') {
        cy.get('.column-todo')
            .should('not.include.text', titleTask)
        cy.get('.column-done')
            .should('include.text', titleTask)

    } else {
        throw new Error('### O PRIMEIRO PARAMETRO SÓ ACEITA todo OU done ###')
    }
})

Cypress.Commands.add('assTableGithub', (userGithub) => {
    cy.contains('table tbody tr', userGithub[1].fill)
        .should('be.visible')
        .as('rowR2')
        .within(() => {
            cy.get('@rowR2').then(($row) => {
                expect($row).to.contain(userGithub[0].fill);
                expect($row).to.contain(userGithub[2].fill);
            })
        })
});

Cypress.Commands.add('excludeProf', (username) => {
    cy.contains('table tbody tr', username)
        .should('be.visible')
        .find('button[title="Remover perfil"]')
        .click();
})

Cypress.Commands.add('assExcludePrf', (username) => {
    cy.contains('table tbody', username).should('not.exist')
});

Cypress.Commands.add('assExternalLinkGthub', (username) => {
    cy.contains('table tbody tr', username)
        .find('a')
        .should('have.attr', 'href', `https://github.com/${username}`)
        .and('have.attr', 'target', '_blank')
})

Cypress.Commands.add('errInputEmpt', (nameInput) => {
    cy.contains('form p', `${nameInput} é obrigatório`)
        .should('be.visible');
})


Cypress.Commands.add('searchProfile', (username) => {
    cy.get('input[placeholder="Buscar por nome ou username..."]')
        .type(username)
});

Cypress.Commands.add('btnSearchCep', (nameButtonCep) => {
    cy.contains('button', nameButtonCep).click();
});

Cypress.Commands.add('assInputValue', (idInput, value) => {
    cy.get(`#${idInput}`, {timeout: 7000})
        .should('have.value', value)
});

//                                  ========================
//                                   === Browser Alerts ===
Cypress.Commands.add('alertWindow', (msg) => {
    cy.on('window:alert', (msgAlert) => {
        expect(msgAlert).to.equal(msg)
    })
});

Cypress.Commands.add('openChat', () => {
    cy.get('button[aria-label="Open Chat"]').click()
});

Cypress.Commands.add('messageBotEntry', (msgChat) => {
    cy.contains('.rcb-bot-message', msgChat, { timeout: 7000 })
        .should('be.visible')
});

Cypress.Commands.add('messageOptions', (respChat) => {
    cy.contains('.rcb-options', respChat).should('be.visible')
});

Cypress.Commands.add('clickOptions', (optClick) => {
    cy.contains('.rcb-options', optClick).click()
});

Cypress.Commands.add('envCodTrak', (text) => {
    cy.get('.rcb-chat-input', { timeout: 4000 }).type(text)
    cy.get('.rcb-send-button').click()
});

Cypress.Commands.add('messageUserEntry', (userChat) => {
    cy.contains('.rcb-user-message-entry', userChat)
        .should('be.visible')
})


//                                  =================           
//                                   === Helpers ===                    
Cypress.Commands.add('login', () => {
    cy.startPage()
    cy.loginSubmit('papito@webdojo.com','katana123')
})

Cypress.Commands.add('preencherFormulario', (data) => {
    // Dados pessoais------------
    data.dataUser.forEach((data) => {
        cy.filltext(data.idComponent, data.value);
    })
    // Tipo de Consultoria--------
    cy.selectConsultancy('Individual')
    cy.assertConsultancyValue('individual')
    // Tipo de pessoa-------------
    cy.radioBeChecked(data.typePerson[1].person);
    cy.radioNotBeChecked(data.typePerson[0].person);

    cy.inputTypePerson(data.typePerson[1].type, data.typePerson[1].num);
    cy.assertValuePersonNumber(data.typePerson[1].type, data.typePerson[1].mask);
    // Como nos conheceu? ---------
    data.discovery.forEach((channel) => {
        cy.checkBoxOption(channel)
    });
    // Anexar arquivo --------------
    cy.addFile(data.typeFiles[0].file);
    // Mais Detalhes ---------------
    cy.textDetails(data.longTxt.textDetails);
    // Tecnologias------------------
    data.tagsTec.forEach((tag) => {
        cy.addTag(tag.tag);
    })
    cy.wait(1000)
    // Termos de uso*----------------
    cy.checkTerms(data.terms.acept)
    // Enviar formulario--------------
    cy.submitForm('Enviar formulário')
    cy.shouldBeSuccess('Sucesso!', data.longTxt.msgSuccess);
})

//                                 ==== End Helpers ====