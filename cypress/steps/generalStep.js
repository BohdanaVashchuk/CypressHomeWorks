
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

    generateRandomEmail() {
        const username = "user" + Math.floor(Math.random() * 1000);
        const domain = ["gmail.com", "hotmail.com", "outlook.com", "aol.com"][
          Math.floor(Math.random() * 4)
        ];
        return `${username}@${domain}`;
      }

               
       generateRandomPassword() {
        const length = Math.floor(Math.random() * 8) + 8; 
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';
      
        let password = '';
      
        password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        password += digits.charAt(Math.floor(Math.random() * digits.length));
      

        for (let i = 3; i < length; i++) {
          const charset = lowercase + uppercase + digits;
          password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
      
        password = password.split('').sort(() => Math.random() - 0.5).join('');
      
        return password;
      }
      
      

    
}