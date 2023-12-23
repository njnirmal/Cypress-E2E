export class homePage{


weblocators ={

    search_input:'.form-control.input-lg',
    click_search:'.btn.btn-default.btn-lg',
    product:'img[title="MacBook"]',
    btn_addToCart:'Add to Cart',
    txt_sucessMsessage:'div.alert.alert-success.alert-dismissible'
    
}

searchProduct(productName) {
    cy.get(this.weblocators.search_input).type(productName)
    cy.get(this.weblocators.click_search).click()


}

addToCart(){
    cy.contains(this.weblocators.btn_addToCart).first().click()
}

verifySucessMessage(){
    return cy.get(this.weblocators.txt_sucessMsessage)
}

}