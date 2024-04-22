/// <reference types="cypress" />
import GeneralStep from "../../steps/generalStep";
const generalStep = new GeneralStep();
const baseURL = "qauto2.forstudy.space/";
const name = "Bohdana";
const lastName = "Vashchuk";
const email = generalStep.generateRandomEmail();
const password = generalStep.generateRandomPassword();
import Garage from "../../steps/garage";
const garage = new Garage();

const car = {
  brand: "Audi",
  model: "TT",
  mileage: 2323,
};

const car1 = {
  brand: 1,
  model: 0,
  mileage: 2323,
};

describe("Create new user via API request", () => {
  it("should create a new user", () => {
    cy
      .request({
        method: "POST",
        url: "https://guest:welcome2qauto@qauto2.forstudy.space/api/auth/signup",
        body: {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
          repeatPassword: password,
        },
      })
      .then((response) => {
        expect(response.status).to.eq(201);
      }),
      cy.clearAllLocalStorage();
  });

  it("Populate log in", () => {
    cy.visit(`https://guest:welcome2qauto@${baseURL}`);
    generalStep.logIn(email, password);
    garage.addCar(car);
    garage.addCar(car1);

    cy.request({
      method: "GET",
      url: "https://guest:welcome2qauto@qauto2.forstudy.space/api/cars",
    }).then((response) => {
      expect(response.status).to.eq(200);

      console.log(response.body.data);

      const foundCar = response.body.data.find((carItem) => {
        return carItem.brand === car.brand && carItem.model === car.model;
      });

      if (foundCar) {
        cy.log("Car found" + JSON.stringify(foundCar));
      } else {
        cy.log(JSON.stringify(foundCar, null, 2) + "Car not found");
      }
    });
  });
});
