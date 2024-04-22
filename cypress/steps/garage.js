
/// <reference types="cypress" />
import GeneralStep from "./generalStep";
const generalStep = new GeneralStep;
import GaragePage from "../pages/GaragePage";
const garagePage = new GaragePage;


export default class Garage extends GeneralStep{

    addCar(car){
        garagePage.addCarButton().click();
        garagePage.brandFieldDropDown().select(car.brand);
        garagePage.modelFieldDropDown().select(car.model);
        garagePage.mileageTextField().type(car.mileage);
        garagePage.addButtonOnModalAddCar().click();

    }

    verifyIfCarAdded(car){
        garagePage.generalCarAddedCard().should('be.visible');
        garagePage.logoCarAddedCard().should('be.visible');
        // garagePage.modelofCarAddedCard().should("have.value", car.brand);
        // garagePage.modelOfAddedCar().should('be.visible').and("have.value", car.model);
        garagePage.updateMileageCarAddedCard().should('be.visible').and("have.value", car.mileage);

    }

    removeCar(){
         garagePage.editCarAddedCard().eq(0).click();
         garagePage.editCarModal().should('be.visible');
         garagePage.removeCarButton().click();
         garagePage.removeModel().should('be.visible');
         garagePage.confirmRemoveModel().click();
    }


    verifyIfCarDeleted(){
        garagePage.notCarState().should("have.value", "You don’t have any cars in your garage")
    }
    
    
}