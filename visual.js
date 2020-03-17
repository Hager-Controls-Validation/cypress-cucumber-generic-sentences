const { PAGES } = require('../../configuration/index');


import { Given, Then } from 'cypress-cucumber-preprocessor/steps';



Then('I can see {string} label is {string}', (labelName, value) => {
    var classPage = Cypress.env('classPage')
    classPage.checkLabel(labelName, value)
})


