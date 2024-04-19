export default class SignUnForm {
     signUnButton() {
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }

    signUpName() {
        return cy.xpath(`//input[@id='signupName']`);
    }

    signUpLastName() {
        return cy.xpath(`//input[@id='signupLastName']`);
    }

    signUpEmail() {
        return cy.xpath(`//input[@id='signupEmail']`);
    }

    signUpPassword() {
        return cy.xpath(`//input[@id='signupPassword']`);
    }

    signUpRepeatPassword() {
        return cy.xpath(`//input[@id='signupRepeatPassword']`);
    }

    signUpRegisterButton() {
        return cy.xpath(`//button[@class='btn btn-primary']`);
    }

    createAccount(user) {
    this.signUpName().type(user.name).should("have.value", user.name);
    this.signUpLastName().type(user.lastName).should("have.value", user.lastName);
    this.signUpEmail().type(user.email).should("have.value", user.email);
    this.signUpPassword().type(user.password).should("have.value", user.password);
    this.signUpRepeatPassword().type(user.password).should("have.value", user.password);
    }


    verifyGaragePageAfterUserCreation() {
        cy.url().should('include', '/panel/garage');

    }

}

