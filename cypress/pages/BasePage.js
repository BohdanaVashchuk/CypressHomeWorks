export default class BasedPage {
    headerLogo(){
        return cy.get(`.header_logo`)
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
        cy.get('.sidebar > .-active')
    }

    sideBarExpenses(){
        cy.get('[routerlink="expenses"]')    
    }

    sideBarInstructions(){
        cy.get('[routerlink="instructions"]')
    }

    sideBarProfile(){
        cy.get('.-profile')
    }

    sideBarSettings(){
        cy.get('[routerlink="settings"]')
    }

    sideBarLogOut(){
        cy.get('.sidebar > .btn-link')
    }



}