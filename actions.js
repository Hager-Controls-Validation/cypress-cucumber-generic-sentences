import { Given, When } from 'cypress-cucumber-preprocessor/steps';

//check if button is enabled or disabled
Given('{string} submit button is {string}', (buttonName, status) => {

    const ALL_BUTTONS_STATUS = {
        'disabled': 'be.disabled',
        'enabled' : 'not.be.disabled',
        'not disabled': 'not.be.disabled' 
    }

    var classPage = Cypress.env('classPage')
    classPage.checkButton(buttonName, ALL_BUTTONS_STATUS[status])
})


When('I enter {string} in {string} input', (value, inputName) => {
    var classPage = Cypress.env('classPage')
    if (value !== '') {
        classPage.typeInput(inputName, value)
    } else {
        classPage.clearInput(inputName)
    }
})

When('I clear {string} input', (inputName) => {
    var classPage = Cypress.env('classPage')
    classPage.clearInput(inputName)
})


When('I click on {string} button', (buttonName) => {
    var classPage = Cypress.env('classPage')
    classPage.clickButton(buttonName)
})

//check/uncheck statuses
When('I click on {string} label', (labelName) => {
    var classPage = Cypress.env('classPage')
    classPage.clickLabel(labelName)
})

When('I click on {string} table row', (rowName) => {
    var classPage = Cypress.env('classPage')
    classPage.clickTableRow(rowName)
})


//check/uncheck statuses
When('I switch {string} checkbox to {string}', (checkboxName) => {
    const CHECK_STATUSES = {
        'checked' : 'check',
        'check': 'check',
        'unchecked' : 'uncheck',
        'uncheck' : 'uncheck'
    }
    var classPage = Cypress.env('classPage')
    classPage.switchCheckbox(checkboxName, CHECK_STATUSES[status])
})






