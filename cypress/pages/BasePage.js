export default class BasedPage {
    headerLogo(){
        return cy.get(`.header_logo`)
    }

    signInButton() {
        return cy.xpath(`//button[@class="btn btn-outline-white header_signin"]`);
    }
 
    logInForm() {
     return cy.xpath(`//div[@class="modal-content"]`);
    }
 
    emailFieldLogInForm() {
     return cy.get('#signinEmail');
    }
 
    passwordFieldLogInForm() {
     return cy.get('#signinPassword');
    }
 
    signInButtonLogInForm() {
     return cy.xpath(`//button[@class="btn btn-primary"]`);
 }

    headerGarageActive(){
        return cy.xpath(`//a[@class="btn header-link -active" and @href="/panel/garage"]`)
    }

    headerGarageInActive(){
        return cy.xpath(`//a[@class="btn header-link" and @href="/panel/garage"]`)
    }

    headerFuelExpensesInActive(){
        return cy.xpath(`//a[@class="btn header-link" and @href="/panel/expenses"]`)
    }

    headerFuelExpensesActive(){
        return cy.xpath(`//a[@class="btn header-link -active" and @href="/panel/expenses"]`)
    }

    headerInstructionsActive(){
        return cy.xpath(`//a[@class="btn header-link -active" and @href="/panel/instructions"]`)
    }

    headerInstructionsInActive(){
        return cy.xpath(`//a[@class="btn header-link" and @href="/panel/instructions"]`)
    }

    headerDropDownListMyProfile(){
        return cy.xpath(`//div[@class="user-nav dropdown"]`)
    }

    footertext(){
        return cy.get('.col-7.d-flex.flex-column.justify-content-center.footer_item.-left')
    }

    footerlogo(){
        return cy.get('.footer_logo')
    }

    sideBarGarage(){
        return cy.get('.sidebar > .-active')
    }

    sideBarExpenses(){
        return cy.get('[routerlink="expenses"]')    
    }

    sideBarInstructions(){
        return cy.get('[routerlink="instructions"]')
    }

    sideBarProfile(){
        return cy.get('.-profile')
    }

    sideBarSettings(){
        return cy.get('[routerlink="settings"]')
    }

    sideBarLogOut(){
        return cy.get('.sidebar > .btn-link')
    }



}