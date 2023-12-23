import { registerPage } from "../../pages/registerPage";
import registerPageData from "../../fixtures/registerPageData.json"

const regPage = new registerPage()


describe('Test Automation ',()=>{



it('registeration flow',()=>{

    regPage.openUrl()
    regPage.enterFirstName(registerPageData.firstName)
    regPage.enterLastName(registerPageData.lastName)
    regPage.enterEmail(registerPageData.email)
    regPage.enterTelephne(registerPageData.telePhone)
    regPage.enterPassword(registerPageData.password)
    regPage.selectCheckBox()
    regPage.clickOnContinue()

})


})