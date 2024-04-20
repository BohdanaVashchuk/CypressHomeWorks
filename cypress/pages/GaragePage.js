import BasedPage from "./BasePage";

export default class GaragePage extends BasedPage {
  pageName() {
    return cy.get("h1[_ngcontent-adx-c75]");
  }

  notCarState() {
    return cy.get('.h3');
  }

  addCarButton() {
    return cy.get("button").contains("Add car");
  }

  addCarModalWindow() {
    return cy.get(".modal-content");
    // xhath: //div[@class="modal-content"]
  }

  brandFieldName() {
    return cy.get("label").contains("Brand");
  }

  brandFieldDropDown() {
    return cy.get("#addCarBrand");
  }

  modelFieldName() {
    return cy.get("label").contains("Model");
  }
  modelFieldDropDown() {
    return cy.get("#addCarModel");
  }

  mileageFieldName() {
    return cy.get("label").contains("Mileage");
  }

  mileageTextField() {
    return cy.get("#addCarMileage");
  }

  mileageTextMetricSystem() {
    return cy.xpath(`//div[@class="input-group-text"`);
  }

  cancelButtonOnModalAddCar() {
    return cy.get(`//button[@class="btn btn-secondary" and @text="Cancel"]`);
  }

  addButtonOnModalAddCar() {
    return cy.get(".modal-footer > .btn-primary");
  }

  crossButtonOnModalAddCar() {
    return cy.xpath(`//button[@class="close"]`);
  }

  generalCarAddedCard() {
    return cy.get(":nth-child(1) > app-car > .car");
  }

  logoCarAddedCard() {
    return cy.get(".car_logo.car-logo");
  }

  modelOfAddedCar() {
    return cy.get(
      ":nth-child(1) > app-car > .car > .car-heading > .car_base > .car-group > .car_name",
      { timeout: 2000 }
    );
  }

  editCarAddedCard() {
    return cy.xpath(`//button[@class="car_edit btn btn-edit"]`);
  }

  updateMileageCarAddedCard() {
    return cy.get(
      ":nth-child(1) > app-car > .car > .car-body > app-update-mileage-form > .update-mileage-form > .update-mileage-form_input"
    );
  }

  updateMileageIconCarAddedCard() {
    return cy.xpath(
      `//span[@class="update-mileage-form_icon icon icon-tachometer"]`
    );
  }

  updateMileageInputCarAddedCard() {
    return cy.xpath(`//input[@name="miles"]`);
  }

  updateMileageButtonCarAddedCard() {
    return cy.xpath(
      `//button[@class="update-mileage-form_submit btn btn-secondary btn-sm"]`
    );
  }

  editCarModal() {
    return cy.get(".modal-content");
  }

  editBrandOnCarModal() {
    return cy.get("#addCarBrand");
  }

  editBrandOnCarModal() {
    return cy.get("#addCarBrand");
  }

  editModelOnCarModal() {
    return cy.get("#addCarModel");
  }

  editMileageOnCarModal() {
    return cy.get("#addCarMileage");
  }

  editDateOnCarModal() {
    return cy.get("#carCreationDate");
  }

  cancelButtonEditCarModal() {
    return cy.get(".modal-footer_group > .btn-secondary");
  }

  removeCarButton() {
    return cy.get(".btn-outline-danger");
  }

  addCarModal() {
    return cy.get(".modal-footer_group > .btn-primary");
  }

  crossButtonOnCarModal() {
    return cy.get(".close");
  }

  removeModel() {
    return cy.get(".modal-content");
  }

  confirmRemoveModel() {
    return cy.get(".btn-danger");
  }
  cancelRemove() {
    return cy.get(".modal-footer > .btn-secondary");
  }

  addAnExpenseButton() {
    return cy.get("#addExpenseTotalCost");
  }

  vehicleFieldddAnExpenseModal() {
    return cy.get(".modal-content");
  }

  reportDateFieldddAnExpenseModal() {
    return cy.get("#addExpenseDate");
  }

  mileageFieldddAnExpenseModal() {
    return cy.get("#addExpenseMileage");
  }

  numberOfLitersFieldddAnExpenseModal() {
    return cy.get("#addExpenseLiters");
  }

  totalCostFieldAddAnExpenseModal() {
    return cy.get("#addExpenseTotalCost");
  }

  addButtonAddAnExpenseModal() {
    return cy.get(".modal-footer > .btn-primary");
  }

  cancelButtonAddAnExpenseModal() {
    return cy.get(".modal-footer > .btn-secondary");
  }
}
