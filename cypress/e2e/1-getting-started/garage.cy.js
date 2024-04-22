/// <reference types="cypress" />
import SignUpForm from "../../pages/SignUpForm";
const signUpForm = new SignUpForm();
import UserProfile from "../../pages/UserProfile";
const userProfile = new UserProfile();
import BasedPage from "../../pages/BasePage";
const basedPage = new BasedPage();
import GaragePage from "../../pages/GaragePage";
const garagePage = new GaragePage();
import GeneralStep from "../../steps/generalStep";
const generalStep = new GeneralStep();


const baseURL = "qauto2.forstudy.space/";
const name = "Bohdana";
const lastName = "Vashchuk";
const email = generalStep.generateRandomEmail();
const password = generalStep.generateRandomPassword();

const user = {
  name: name,
  lastName: lastName,
  email: email,
  password: password,
};

describe("Registration of a new user in the service", () => {
  beforeEach(() => {
    cy.visit(`https://guest:welcome2qauto@${baseURL}`);
  });

  it("Populate the registration form by data and sign up", () => {
    generalStep.openSingUpForm();
    generalStep.createAccount(user);
    generalStep.confirmUserRegistration();
    signUpForm.verifyGaragePageAfterUserCreation();
    userProfile.UserProfilePage().click();
    userProfile.verifyURLOfUserProfile();
    // userProfile.verifyUserProfile(user);
  });

  it("Populate log in", () => {
    generalStep.logIn(email, password);
  });
});
