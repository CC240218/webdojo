

declare namespace Cypress {
  interface Chainable {
    startPage(): Chainable<void>;
    loginSubmit(email: string, pass: string): Chainable<void>;
    validationLoginUser(nameUSer: string): Chainable<void>;
    alertShouldBe(alertText: string): Chainable<void>;
    mesageError(mesageText: string): Chainable<void>;
    goTo(nameButton: string, titlePage: string): Chainable<void>;
    filltext(idField: string, txtField: string): Chainable<void>;
    selectConsultancy(option: string): Chainable<void>;
    radioNotBeChecked(txtRadio: string): Chainable<void>;
    radioBeChecked(txtRadio: string): Chainable<void>;
    inputTypePerson(personType: string, personNumber: string): Chainable<void>;
    assertValuePersonNumber(personType: string, maskNumberValue: string): Chainable<void>;
    checkBoxOption(option: string): Chainable<void>;
    addFile(nameFile: string): Chainable<void>;
    textDetails(txtArea: string): Chainable<void>;
    addTag(txtTag: string): Chainable<void>;
    checkTerms(linkNameTerms: string): Chainable<void>;
    submitForm(nameButtonSubmit): Chainable<void>;
    shouldBeSuccess(title: string, msg: string): Chainable<void>;
    requiredField(id: string, msgErr: string): Chainable<void>;
    errTermsNoCheked(term: string, msgErr: string): Chainable<void>;
    assertConsultancyValue(expectedValue: string): Chainable<void>;
    login(): Chainable<void>;
    assLinkInstgrRedirect(link: string): Chainable<void>;
    clickLinkTermsNoRedirect(linkTms: string): Chainable<void>;
    iFrameVideo(statusVideo: string): Chainable<void>;
    dragDropTask(titleTask: string): Chainable<void>;
    assDragDrop(typeColumn: string, titleTask: string): Chainable<void>;
    preencherFormulario(dataTest: String): Chainable<void>;
    assTableGithub(nameGit: string, userNameGit: string, perfilGit: string): Chainable<void>;
    excludeProf(username: string): Chainable<void>;
    assExcludePrf(username: string): Chainable<void>;
    assExternalLinkGthub(username: string): Chainable<void>;
    errInputEmpt(nameInput: string): Chainable<void>;
    searchProfile(username: string): Chainable<void>;
    btnSearchCep(nameButtonCep: string): Chainable<void>;
    assInputValue(idInput: string, value: string): Chainable<void>;
    alertWindow(msg: String): Chainable<void>;
    openChat(): Chainable<void>;
    messageBotEntry(msgChat: String): Chainable<void>;
    clickOptions(optClick: String): Chainable<void>;
    envCodTrak(placeh: String, text: String): Chainable<void>;
    messageUserEntry(userChat: String): Chainable<void>;

  }
}