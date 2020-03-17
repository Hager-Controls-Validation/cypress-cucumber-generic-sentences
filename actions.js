const { PAGES } = require('../../configuration/index');

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
    classPage.typeInput(inputName, value)
})


When('I click on {string} button', (buttonName) => {
    var classPage = Cypress.env('classPage')
    classPage.clickButton(buttonName)
})

When('I click on {string} table row', (rowName) => {
    var classPage = Cypress.env('classPage')
    classPage.clickTableRow(rowName)
})



