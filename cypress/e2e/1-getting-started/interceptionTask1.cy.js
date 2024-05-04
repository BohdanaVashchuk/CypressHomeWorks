/// <reference types="cypress" />
import GeneralStep from "../../steps/generalStep";
const generalStep = new GeneralStep();
import Garage from "../../steps/garage";
const garage = new Garage();
import FuelExpenses from "../../steps/fuelExpenses";
const fuelExpenses = new FuelExpenses();

const email = "user345@gmail.com";
const password = "Test123!";

const car = {
    brand: "Audi",
    model: "TT",
    mileage: 2323,
  };
  let carId;

  const expenseData = {
    reportedAt: '2024-05-04',
    mileage: 7777,
    liters: 11,
    totalCost: 11,
    forceMileage: false
  };

  beforeEach(() => {
    cy.visit(`/`);
    generalStep.logIn(email, password);
  });


describe("Intersept the adding car request", ()=>{
    it("should log in and intercept the adding car request", ()=> {
        cy.intercept('POST', '/api/cars').as('createCar');
        garage.addCar(car);
        cy.wait('@createCar').then((interception) => {
          const response = interception.response;
          expect(response.statusCode).to.eq(201);
         carId = response.body.data.id;
    
        });
      

        cy.intercept('GET', '/api/cars').as('listOfCars');
        cy.visit('/panel/garage');
        cy.wait('@listOfCars', { timeout: 10000 }).then((interception) => {
            const response = interception.response;
            expect(response.body.data.some(carItem => carItem.id === carId)).to.be.true;
            expect(response.body.data.some(carItem => carItem.brand === car.brand)).to.be.true;
            expect(response.body.data.some(carItem => carItem.mileage === car.mileage)).to.be.true;
            expect(response.body.data.some(carItem => carItem.model === car.model)).to.be.true;
       
        });

    });

    it("should log in and add Expense request via POST", ()=> {
        cy.APILogIn(email, password);
        cy.visit('/panel/garage');
        cy.createExpense(carId, expenseData);
    });

    
    it("should log via UI and verify if Expense record was added", ()=> {
      generalStep.navigateToFuelExpensesPage();
      fuelExpenses.validateFuelExpenses();

    });
})
