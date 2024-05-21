///<reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })


  it('Preencher Formulário de Cadastro', function () {
    cy.title()
      .should('eq', 'Central de Atendimento ao Cliente TAT')

  })
  it('Preenche os campos obrigatórios e envia o formulário', function () {
    const longTest = 'Estou colocando um testo longo para testar o tempo de execução do teste, testetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetesteteste'

    cy.get('#firstName')
      .should('be.visible')
      .type('Eduarda Luzia')

    cy.get('#lastName')
      .should('be.visible')
      .type('Brezinski')

    cy.get('#email')
      .should('be.visible')
      .type('eduarda@tat.com')

    cy.get('#phone')
      .should('be.visible')
      .type('4799990000')

    cy.get('#product')
      .should('be.visible')
      .select('Mentoria')

    cy.get('[type="radio"]')
      .check('elogio')

    cy.get('[type="checkbox"]')
      .check('email')

    cy.get('#open-text-area')
      .should('be.visible')
      .type(longTest, { delay: 0 })

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('[class="success"]')
      .should('be.visible')
    //.should('have.value', 'Mensagem enviada com sucesso.')        

  })

  it('Exibir mensagem de erro ao submeter formulário com um email com formatação inválida', function () {
    cy.get('#firstName')
      .should('be.visible')
      .type('Eduarda')

    cy.get('#lastName')
      .should('be.visible')
      .type('Brezinski')

    cy.get('#email')
      .should('be.visible')
      .type('eduarda@tatcom')

    cy.get('#open-text-area')
      .should('be.visible')
      .type('Gostaria de maiores informações referente a mentoria')

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('[class="error"]')
      .should('be.visible')
  })

  it('Campo telefone deve aceitar apenas números', function () {

    cy.get('#phone')
      .type('abcdefghij')
      .should('have.value', '')

  })

  it('Exibir mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
    cy.get('#firstName')
      .should('be.visible')
      .type('Eduarda Luzia')

    cy.get('#lastName')
      .should('be.visible')
      .type('Brezinski')

    cy.get('#email')
      .should('be.visible')
      .type('eduarda@tat.com')

    cy.get('#product')
      .should('be.visible')
      .select('Mentoria')

    cy.get('[type="radio"]')
      .check('elogio')

    cy.get('[type="checkbox"]')
      .check('phone')

    cy.get('#open-text-area')
      .should('be.visible')
      .type('Gostaria de maiores informações referente a mentoria')

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('[class="error"]')
      .should('be.visible')
  })

  it('Preenche e limpar os campos nome, sobrenome, email e telefone', function () {

    cy.get('#firstName')
      .should('be.visible')
      .type('Eduarda Luzia')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .should('be.visible')
      .type('Brezinski')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .should('be.visible')
      .type('eduarda@tat.com')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('47 999909990')
      .clear()
      .should('have.value', '')

  })
  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('[class="error"]')
      .should('be.visible')
  })
  it('Enviar um formuário com sucesso usando um comando customizado', function () {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('[class="success"]').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', function () {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')

  })

  it('seleciona um produto (Mentoria) por seu valor (value)', function () {
    cy.get('select')
      .select('mentoria')
      .should('have.value', 'mentoria')

  })
  it.only('seleciona um produto (Blog) por seu índice', function () {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })



});
