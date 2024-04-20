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


    verifyGaragePageAfterUserCreation() {
        cy.url().should('include', '/panel/garage');

    }

}

