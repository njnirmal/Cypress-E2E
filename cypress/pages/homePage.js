export class homePage{


weblocators ={

    search_input:'.form-control.input-lg',
    click_search:'.btn.btn-default.btn-lg',
    product:'img[title="MacBook"]',
    btn_addToCart:'Add to Cart',
    txt_sucessMsessage:'div.alert.alert-success.alert-dismissible',
    btn_cart:'button.btn.btn-inverse.btn-block.btn-lg.dropdown-toggle',
    txt_viewcart:'[href="https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart"] > strong',
    btn_remove:'.input-group-btn > .btn-danger',
    input_qty:'.input-group.btn-block>input',
    btn_update:'.btn[data-original-title="Update"]',
    
  

    
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

clickCart(){
    cy.get(this.weblocators.btn_cart).click()
    cy.get(this.weblocators.txt_viewcart).first().click()
}

clickRemove(){

    cy.get(this.weblocators.btn_remove).click()

}

verifyEmptyCartMessage(){
    return cy.get(this.weblocators.txt_CartEmptyMessage)
}



}