const { PAGES } = require('../../configuration/index');

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';



Given('I am on {string} page', (page) => {
    var classPage = PAGES[page]
    Cypress.env('classPage', classPage)
    classPage.visit()
    classPage.checkPage()
});

Given('I reload page', () => {
    cy.reload()
})

Then('I am on {string} page', (page) => {
    var classPage = PAGES[page]
    Cypress.env('classPage', classPage)
    classPage.checkPage()
});

Given('I am on {string} page with {string} parameter', (page, parameter) => {
    var classPage = PAGES[page]
    Cypress.env('classPage', classPage)
    classPage.visit(parameter)
})

Then('I am on {string} page with {string} parameter', (page, parameter) => {
    var classPage = PAGES[page]
    Cypress.env('classPage', classPage)
    classPage.visit(parameter)
})

