/// <reference types="cypress" />
import GeneralStep from "../../steps/generalStep";
const generalStep = new GeneralStep();
import FuelExpenses from "../../steps/fuelExpenses";
const fuelExpenses = new FuelExpenses();
import Garage from "../../steps/garage";
const garage = new Garage();

const baseURL = "qauto2.forstudy.space/";
const email = "user345@gmail.com";
const password = "Test123!";

const car = {
  brand: "Audi",
  model: "TT",
  mileage: 2323,
};

const expenseObj = {
  vehicle: "Audi TT",
  date: "21.04.2024",
  mileage: 4545,
  liters: 45,
  totalCost: 343,
};

describe("Verify the adding and deleting the Car in the Garage", () => {
  beforeEach(() => {
    cy.visit(`https://guest:welcome2qauto@${baseURL}`);
    generalStep.logIn(email, password);
    cy.log("beforeEach hooks")
    // garage.addCar(car);
  });

  after(() => {
    garage.removeCar();
    cy.log("afterEach hooks")
  });


  it("Add an expenses and verify if it is successfully processed", () => {
    generalStep.navigateToFuelExpensesPage();
    fuelExpenses.addFuelExpenses(expenseObj);
  });

  it("Delete an expenses and verify if it is successfully processed", () => {
    generalStep.navigateToFuelExpensesPage();
    fuelExpenses.deleteFuelExpenses();
  });

  
});
