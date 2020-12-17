
class Page {

    static visit() {
        cy.visit(this.URL, {failOnStatusCode: false});
    }

    static checkPage() {
        cy.url().should('eq', Cypress.config().baseUrl + this.URL)
    }

    static getButton(button_name) {
        return cy.get(this.BUTTONS[button_name])
    }

    static checkButton(name, status) {
        cy.get(this.BUTTONS[name]).should(status)
    }

    static clickButton(name) {
        cy.get(this.BUTTONS[name]).click()
    }

    static typeInput(inputName, value) {
        cy.get(this.INPUTS[inputName]).click().clear().type(value)
        cy.get(this.INPUTS[inputName]).should('have.focus')
        cy.get(this.INPUTS[inputName]).blur()
    }

    static exitInput(inputName) {
        cy.get(this.INPUTS[inputName]).blur()
    }

    static clearInput(inputName) {
        cy.get(this.INPUTS[inputName]).click().clear()
    }

    static checkInput(inputName, value) {
        cy.get(this.INPUTS[inputName]).should('have.value', value);
    }

    static checkSelect(selectName, value) {
        cy.get(this.SELECTS[selectName]).should('contain', value);
    }

    static checkLabel(labelName, value) {
        cy.get(this.LABELS[labelName]).should('contain', value);
    }

    static clickLabel(labelName, value) {
        cy.get(this.LABELS[labelName]).click();
    }

    static clickTableRow(name) {
        cy.get(this.ROWS[name]).click()
    }

    static checkCheckbox(name, status) {
        cy.get(this.CHECKBOXS[name]).should(status)
    }

    static switchCheckbox(name, status) {
        cy.get(this.CHECKBOXS[name])[status]({force : true})
    }
}

export default Page