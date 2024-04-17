import BasedPage from "./BasePage"

export default class GaragePage extends BasedPage{
    pageName(){
        return cy.get('h1[_ngcontent-adx-c75]')
    }

    notCarState(){
        return cy.get('.h3.panel-empty_message')
    }

    addCarButton(){
        return cy.get('button').contains('Add car')  
    }

    addCarModalWindow(){
        return cy.get('.modal-content')
        // xhath: //div[@class="modal-content"]
    }

    brandFieldName(){
        return cy.get('label').contains('Brand') 
    }

    brandFieldDropDown(){
        return cy.get('#addCarModel')
    }
    
    modelFieldName(){
        return cy.get('label').contains('Model') 
    }
    modelFieldDropDown(){
        return cy.get('#addCarModel')
    }

    mileageFieldName(){
        return cy.get('label').contains('Mileage') 
    }

    mileageTextField(){
        return cy.get('#addCarMileage')
    }

    mileageTextMetricSystem(){
        return cy.xpath(`//div[@class="input-group-text"`)
    }

    cancelButtonOnModalAddCar(){
        return cy.xpath(`//button[@class="btn btn-secondary" and @text="Cancel"]`)
    }

    addButtonOnModalAddCar(){
        return cy.xpath(`//button[@class="btn btn-primary" and @text="Add"]`)
    }

    crossButtonOnModalAddCar(){
        return cy.xpath(`//button[@class="close"]`)
    }

    generalCarAddedCard(){
        return cy.xpath(`//div[@class="car jumbotron"]`)
    }

    logoCarAddedCard(){
        return cy.get('.car_logo.car-logo')
    }

    modelofCarAddedCard(){
        return cy.xpath(`//p[@class="car_name h2"]`)
    }

    editCarAddedCard(){
        return cy.xpath(`//button[@class="car_edit btn btn-edit"]`)
    }

    updateMileageCarAddedCard(){
        return cy.xpath(`//p[@class="car_update-mileage"]`)
    }

    updateMileageIconCarAddedCard(){
        return cy.xpath(`//span[@class="update-mileage-form_icon icon icon-tachometer"]`)
    }

    updateMileageInputCarAddedCard(){
        return cy.xpath(`//input[@name="miles"]`)
    }

    updateMileageButtonCarAddedCard(){
        return cy.xpath(`//button[@class="update-mileage-form_submit btn btn-secondary btn-sm"]`)
    }

    editCarModal(){ 
        cy.get('.modal-content')
    }

    editBrandOnCarModal(){ 
        cy.get('#addCarBrand')
    }

    editBrandOnCarModal(){ 
        cy.get('#addCarBrand')
    }

    editModelOnCarModal(){ 
        cy.get('#addCarModel')
    }

    editMileageOnCarModal(){ 
        cy.get('#addCarMileage')
    } 
    
    editDateOnCarModal(){ 
        cy.get('#carCreationDate')
    } 
    
    cancelButtonEditCarModal(){ 
        cy.get('.modal-footer_group > .btn-secondary')
    } 
    
    addCarModal(){ 
        cy.get('.modal-footer_group > .btn-primary')
    } 
    
    crossButtonOnCarModal(){ 
        cy.get('.close')
    }

    removeModel(){
        cy.get('.modal-content')
    }

    confirmRemoveModel(){
        cy.get('.btn-danger')
    }
    cancelRemove(){
        cy.get('.modal-footer > .btn-secondary') 
    }

    addAnExpenseButton(){ 
        cy.get('#addExpenseTotalCost')
    }

    vehicleFieldddAnExpenseModal(){ 
        cy.get('.modal-content')
    }

    reportDateFieldddAnExpenseModal(){ 
        cy.get('#addExpenseDate')
    }

   mileageFieldddAnExpenseModal(){ 
    cy.get('#addExpenseMileage')
    }

    numberOfLitersFieldddAnExpenseModal(){ 
        cy.get('#addExpenseLiters')
     }

     totalCostFieldAddAnExpenseModal(){ 
        cy.get('#addExpenseTotalCost')
        }

    addButtonAddAnExpenseModal(){
        cy.get('.modal-footer > .btn-primary')
    }

    cancelButtonAddAnExpenseModal(){
        cy.get('.modal-footer > .btn-secondary')   
     }
        
}