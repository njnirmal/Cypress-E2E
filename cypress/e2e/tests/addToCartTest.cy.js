import { homePage } from "../../pages/homePage"
const homePageObj = new homePage()
import testData from '../../fixtures/testData.json'

describe(' add To Cart - automation ', () => {


    beforeEach( ()=>  {
       
        cy.login(testData.login.username,testData.login.password)
    })
   
   it('Add to cart flow ' , () => {
        homePageObj.searchProduct(testData.prodcut.productName)
        homePageObj.addToCart()
        homePageObj.verifySucessMessage().should('contain',testData.message.sucessMsg).should('contain',testData.prodcut.productName)
   })


   it('Remove Product from Checkout flow ' , () => {
    homePageObj.searchProduct(testData.prodcut.productName)
    homePageObj.addToCart()
    homePageObj.verifySucessMessage().should('contain',testData.message.sucessMsg).should('contain',testData.prodcut.productName)
    homePageObj.clickCart()
    homePageObj.clickRemove()
  
    
})

   it('Update  Produc Qty from Checkout flow ' , () => {
    homePageObj.searchProduct(testData.prodcut.productName)
    homePageObj.addToCart()
    homePageObj.verifySucessMessage().should('contain',testData.message.sucessMsg).should('contain',testData.prodcut.productName)
    homePageObj.clickCart()
   


  
           
})



})
