/// <reference types="cypress" />

const baseURL = "qauto2.forstudy.space/";
import GeneralStep from "../../steps/generalStep";
const generalStep = new GeneralStep();
import Garage from "../../steps/garage";
const garage = new Garage();

const email = "user345@gmail.com";
const password = "Test123!";

const car = {
  brand: "Audi",
  model: "TT",
  mileage: 2323,
};

describe("Verify the adding and deleting the Car in the Garage", () => {
  beforeEach(() => {
    cy.visit(`https://guest:welcome2qauto@${baseURL}`);
    generalStep.logIn(email, password);
  });

  it("Add Car and verify if it is successfully processed", () => {
    garage.addCar(car);
    garage.verifyIfCarAdded(car);
  });

  it("Delete the fist Car and verify if it is successfully processed", () => {
    garage.removeCar();
    garage.verifyIfCarDeleted();
  });
});
