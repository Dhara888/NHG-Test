import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
var bool;
Given(/I make a request to get location information (.*),(.*)/, (countryCode, postCode) => {

    cy.request({ method: 'GET', url: `${countryCode}/${postCode}`, failOnStatusCode: false }).then((response) => {
        console.log(response.isOkStatusCode);
        // expect(response.status).to.eq(200)
        if(response.status === 200){
            bool = 'true'
        }else{ bool = 'false'}

        //cy.wrap(bool).as('resStatus')
    })
})
Then(/I verify the request status (.*)/, (isSuccessful) => {
    //bool === isSuccessful
    expect(bool).to.be.equal(isSuccessful)
   //cy.wrap(bool).should('equal',isSuccessful)
   
})