
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Eduarda Luzia')
    cy.get('#lastName').type('Brezinski')
    cy.get('#email').type('eduarda@tat.com')
    cy.get('#open-text-area').type('Gostaria de maiores informações referente a mentoria')
    cy.contains('button', 'Enviar').click()
})