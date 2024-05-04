/// <reference types="cypress" />
import GeneralStep from "./generalStep";
const generalStep = new GeneralStep();
import FuelExpense from "../pages/FuelExpense";
const fuelExpense = new FuelExpense();

export default class FuelExpenses extends GeneralStep {
  addFuelExpenses(expense) {
    fuelExpense.addExpensesButton().click();
    fuelExpense.vehicleFieldOnAddModal.select(1);
    fuelExpense.dateFieldOnAddModal().clear().type(expense.date);
    fuelExpense.mileageFieldOnAddModal().clear().type(expense.mileage);
    fuelExpense.litersFieldOnAddModal().type(expense.liters);
    fuelExpense.totalCostFieldOnAddModal().type(expense.totalCost);
    fuelExpense.addButtonOnAddModal().click();
  }

  deleteFuelExpenses() {
    fuelExpense.moveMouseRemoveButton();
    fuelExpense.removeButton().click({ force: true });
    fuelExpense.confirmTheRemoveEntry().click();
  }

  validateFuelExpenses(){
    fuelExpense.addedRecord() 
  }
}
