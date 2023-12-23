import { homePage } from "../../pages/homePage"
const homePageObj = new homePage()
import testData from '../../fixtures/testData.json'

describe(' add To Cart - automation ', () => {


    before( ()=>  {
       
        cy.login(testData.login.username,testData.login.password)
    })
   
   it('Add to cart flow ' , () => {
        homePageObj.searchProduct(testData.prodcut.productName)
        homePageObj.addToCart()
        homePageObj.verifySucessMessage().should('contain',testData.message.sucessMsg).should('contain',testData.prodcut.productName)
   })
        
})





