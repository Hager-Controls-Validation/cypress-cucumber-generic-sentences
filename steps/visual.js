import { Given, Then } from 'cypress-cucumber-preprocessor/steps';


Then('I can see {string} label is {string}', (labelName, value) => {
    var classPage = Cypress.env('classPage')
    classPage.checkLabel(labelName, value)
})


Then('I can see {string} input is {string}', (inputName, value) => {
    var classPage = Cypress.env('classPage')
    classPage.checkInput(inputName, value)
})

Then('I can see {string} select value is {string}', (selectName, value) => {
    var classPage = Cypress.env('classPage')
    classPage.checkSelect(selectName, value)
})

Then('I can see {string} checkbox is {string}', (checkboxName, value) => {

    const CHECKBOX_STATUSES = {
        'checked': 'be.checked',
        'unchecked' : 'not.be.checked'
    }

    var classPage = Cypress.env('classPage')
    classPage.checkCheckbox(checkboxName, CHECKBOX_STATUSES[value])
})

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title)
  })


