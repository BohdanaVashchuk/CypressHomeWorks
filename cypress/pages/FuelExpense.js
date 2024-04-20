import BasedPage from "./BasePage"

export default class FuelExpense extends BasedPage{
    expensesPageName(){
        return cy.get('h1')
    }
    
    addExpensesButton(){
        return cy.get('.btn-primary')
    }
    
    expensesEmptyState(){
        return cy.get('.panel-page_empty')
    }
    
    garageLienOnEmptyState(){
        return cy.get('.h3 > a')
    }
    
    carSelectDropDown(){
        return cy.get('#carSelectDropdown')
    }
    
    noFuelExpensesState(){
        return cy.get('.panel-page_empty')
    }
    
    addExpensesModalTitle(){
        return cy.get('.modal-title')
    }
    

    vehicleFieldOnAddModal(){
        return cy.get('#addExpenseCar')
    }
    
    dateFieldOnAddModal(){
        return cy.get('#addExpenseDate')
    }
    
    mileageFieldOnAddModal(){
        return cy.get('#addExpenseMileage')
    }
    
    kmIconOnAddModal(){
        return cy.get(':nth-child(3) > .input-group > .input-group-append > .input-group-text')
    }
    
    litersFieldOnAddModal(){
        return cy.get('#addExpenseLiters')
    }
    
    lIconOnAddModal(){
        return cy.get(':nth-child(4) > .input-group > .input-group-append > .input-group-text')
    }
    
    totalCostFieldOnAddModal(){
        return cy.get('#addExpenseTotalCost')
    }
    
    dolIconOnAddModal(){
        return cy.get(':nth-child(5) > .input-group > .input-group-append > .input-group-text')
    }
    
    cancelButtonOnAddModal(){
        return cy.get('.modal-footer > .btn-secondary')
    }
    
    addButtonOnAddModal(){
        return cy.get('.modal-footer > .btn-primary')
    }
    
    alertOnAddModal(){
        return cy.get('.alert')
    }
    
    dateColumnName(){
        return cy.get('thead > tr > :nth-child(1)')
    }
    
    dateColumnValue(){
        return cy.get('.font-weight-bold')
    }
    
    mileageColumnName(){
        return cy.get('thead > tr > :nth-child(2)')
    }
    
    mileageColumnValue(){
        return cy.get('tbody > tr > :nth-child(2)')
    }
    
    litersColumnName(){
        return cy.get('thead > tr > :nth-child(3)')
    }
    
    litersColumnValue(){
        return cy.get('tbody > tr > :nth-child(3)')
    }
    
    totalCostColumnName(){
        return cy.get('thead > tr > :nth-child(4)')
    }
    
    totalCostColumnValue(){
        return cy.get('tbody > tr > :nth-child(4)')
    }

    moveMouseRemoveButton(){
      return cy.get('tbody > tr > :nth-child(5)').first().trigger('mouseover');
    }


    removeButton(){
        return cy.get('button.btn.btn-delete')
        // .invoke('css', 'visibility', 'visible')
        // .trigger('mouseover')
        // .invoke('css', 'visibility', 'hidden');
      

    }

    confirmTheRemoveEntry(){
        return cy.xpath(`//button[@class="btn btn-danger"]`)
    }
    

}