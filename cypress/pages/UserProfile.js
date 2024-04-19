export default class UserProfile {
    UserProfilePage(){
        return cy.xpath(`//a[@routerlink="profile"]`);
    }

    profileNameAndLastName() {
        return cy.xpath(`//p[@class="profile_name display-4"]`);
    }


    verifyURLOfUserProfile() {
        cy.url().should('include', '/panel/profile');

    }
  

    verifyUserProfile(user) {
        this.profileNameAndLastName().should("contain", user.name);
        this.profileNameAndLastName().should("contain", user.lastName);  
    }


}