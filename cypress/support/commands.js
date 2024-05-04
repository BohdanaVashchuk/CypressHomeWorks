// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createExpense', (carId, expenseData) => {
    cy.request({
      method: 'POST',
      url: 'https://qauto2.forstudy.space/api/expenses',
      body: {
        carId: carId,
        reportedAt: expenseData.reportedAt,
        mileage: expenseData.mileage,
        liters: expenseData.liters,
        totalCost: expenseData.totalCost,
        forceMileage: expenseData.forceMileage
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data.carId).to.eq(carId);
      expect(response.body.data.reportedAt).to.eq(expenseData.reportedAt);
      expect(response.body.data.mileage).to.eq(expenseData.mileage);
      expect(response.body.data.liters).to.eq(expenseData.liters);
    });
  });


  Cypress.Commands.add('APILogIn', (email, password)=>{
    cy.request({
       method: 'POST', 
        url: 'https://qauto2.forstudy.space/api/auth/signin',
        body: {
            "email": email,
            "password": password,
            "remember": false
        }
    }).then(response => {
        expect(response.status).to.eq(200);
  });
  });
  