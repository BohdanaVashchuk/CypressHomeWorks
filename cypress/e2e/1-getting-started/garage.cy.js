/// <reference types="cypress" />

function generateRandomEmail() {
    const username = "user" + Math.floor(Math.random() * 1000);
    const domain = [
      "gmail.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
    ][Math.floor(Math.random() * 4)];
    return `${username}@${domain}`;
  }
  
  const baseURL = "qauto2.forstudy.space/";
  const name = "DanaTest";
  const lastName = "Vashchuk";
  const email = generateRandomEmail();
  const password = "Test123!";
  const profileURL = "qauto2.forstudy.space/panel/profile";
  
  describe("Registration of a new user in the service", () => {
    it("Populate the registration form by data and sign up", () => {
      cy.visit(`https://guest:welcome2qauto@${baseURL}`);
      cy.get("button").contains("Sign up").click();
      cy.get("#signupName").type(`${name}`).should("have.value", `${name}`);
      cy.get("#signupLastName").type(`${lastName}`).should("have.value", `${lastName}`);
      cy.get("#signupEmail").type(`${email}`).should("have.value", `${email}`);
      cy.get("#signupPassword").type(`${password}`).should("have.value", `${password}`);
      cy.get("#signupRepeatPassword").type(`${password}`).should("have.value", `${password}`);
      cy.get("button").contains("Register").click();
      cy.get("h1").contains("Garage");
      cy.visit(`https://guest:welcome2qauto@${profileURL}`);
      cy.get("h1").contains("Profile");
      cy.get('p.profile_name.display-4').should('exist');
      cy.get('p.profile_name.display-4').should('contain', `${name}`);
      cy.get('p.profile_name.display-4').should('contain', `${lastName}`);
    
    });
  });