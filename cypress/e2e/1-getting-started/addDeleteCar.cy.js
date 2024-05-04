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
let carId;

describe("Verify the adding and deleting the Car in the Garage", () => {
  beforeEach(() => {
    cy.visit(`https://guest:welcome2qauto@${baseURL}`);
    generalStep.logIn(email, password);
  });

  it("Add Car and verify if it is successfully processed", () => {
    cy.intercept("POST", "/api/cars").as("createCar");

    garage.addCar(car);
    cy.wait("@createCar").then((interception) => {
      const response = interception.response;
      expect(response.statusCode).to.eq(201);
      carId = response.body.data.id;
    });
    cy.intercept("GET", "/api/cars").as("listOfCars");
    cy.visit("/panel/garage");
    cy.wait("@listOfCars", { timeout: 10000 }).then((interception) => {
      const response = interception.response;
      expect(response.body.data.some((carItem) => carItem.id === carId)).to.be.true;
      expect(response.body.data.some((carItem) => carItem.brand === car.brand)).to.be.true;
      expect(response.body.data.some((carItem) => carItem.mileage === car.mileage)).to.be.true;
      expect(response.body.data.some((carItem) => carItem.model === car.model)).to.be.true;
    });
  });

  it("Delete the fist Car and verify if it is successfully processed", () => {
    garage.removeCar();
    // garage.verifyIfCarDeleted();
  });
});
