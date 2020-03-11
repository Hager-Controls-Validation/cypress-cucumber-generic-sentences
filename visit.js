const { PAGES } = require('../../configuration/index');

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

var classPage

Given('I am on {string} page', (page) => {
    classPage = PAGES[page]
    classPage.visit()
    classPage.checkPage()
});

Then('I am on {string} page', (page) => {
    classPage = PAGES[page]
    classPage.checkPage()
});

