
/// <reference types="cypress" />
import BasedPage from "../pages/BasePage";
const basePage = new BasedPage;
import SignUnForm from "../pages/SignUpForm";
const signUpForm = new SignUnForm;

export default class GeneralStep {
    openSingUpForm(){
        signUpForm.signUnButton().click();
    }

    createAccount(user) {
        signUpForm.signUpName().type(user.name).should("have.value", user.name);
        signUpForm.signUpLastName().type(user.lastName).should("have.value", user.lastName);
        signUpForm.signUpEmail().type(user.email).should("have.value", user.email);
        signUpForm.signUpPassword().type(user.password).should("have.value", user.password);
        signUpForm.signUpRepeatPassword().type(user.password).should("have.value", user.password);
            }

    logIn(email, password){
        basePage.signInButton().should('be.visible').click();
        basePage.emailFieldLogInForm().type(email);
        basePage.passwordFieldLogInForm().type(password);
        basePage.signInButtonLogInForm().click();
    }

    confirmUserRegistration(){
        signUpForm.signUpRegisterButton().click();
        
    }

    navigateToFuelExpensesPage(){
        basePage.sideBarExpenses().click();
    }

    
}