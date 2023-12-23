export class registerPage{

weblocators={

  firstName:'#input-firstname',
  lastName:'#input-lastname',
  email:'#input-email',
  telePhone:'#input-telephone',
  password:'#input-password',
  passwordConfirm:'#input-confirm',
  policyCheckbox:'input[type="checkbox"]',
  continue:'.btn.btn-primary'

}


openUrl(){

    cy.visit(Cypress.env('QA'))
}


enterFirstName(fName){
    cy.get(this.weblocators.firstName).type(fName)

}

enterLastName(lName){
    cy.get(this.weblocators.lastName).type(lName)

}

enterEmail(eMail){
    cy.get(this.weblocators.email).type(eMail)

}

enterPassword(password){
    cy.get(this.weblocators.password).type(password)
    cy.get(this.weblocators.passwordConfirm).type(password)

}

enterTelephne(telePhone){
    cy.get(this.weblocators.telePhone).type(telePhone)
}

selectCheckBox(){
    cy.get(this.weblocators.policyCheckbox).check()
}

clickOnContinue(){
    cy.get(this.weblocators.continue).click()
}




}