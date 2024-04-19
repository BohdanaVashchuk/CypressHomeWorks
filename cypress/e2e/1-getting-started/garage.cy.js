/// <reference types="cypress" />
import SignUpForm from "../../pages/SignUpForm";
const signUpForm = new SignUpForm;
import UserProfile from "../../pages/UserProfile";
const userProfile = new UserProfile;
import BasedPage from "../../pages/BasePage";
const basedPage = new BasedPage;
import GaragePage from "../../pages/GaragePage";
const garagePage = new GaragePage;


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
  const name = "Bohdana";
  const lastName = "Vashchuk";
  const email = generateRandomEmail();
  const password = "Test123!";

  const user ={
    name: name,
    lastName: lastName,
    email: email, 
    password: password,
   }
  
  
  describe("Registration of a new user in the service", () => {
    it("Populate the registration form by data and sign up", () => {
      cy.visit(`https://guest:welcome2qauto@${baseURL}`);
      signUpForm.signUnButton().click();
      signUpForm.createAccount(user);
      signUpForm.signUpRegisterButton().click();
      signUpForm.verifyGaragePageAfterUserCreation();
      userProfile.UserProfilePage().click();
      userProfile.verifyURLOfUserProfile();
      userProfile.verifyUserProfile(user);
    });
  });