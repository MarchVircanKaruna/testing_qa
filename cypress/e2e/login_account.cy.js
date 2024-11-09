describe('testing login account', () => {
    it('passes', () => {
      cy.visit('https://www.gmail.com/')
      
      Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here revents cypress from
        //falling the test
        return false
      })

      //testing login page
      cy.get('#identifierId').type('dummytestingqa15@gmail.com')
      cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb').click()
      cy.get('#password > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('dummy1234567890')
      cy.get('#passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb').click()
    })
  })