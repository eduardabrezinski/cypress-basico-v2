///<reference types="Cypress" />

//const { functionsIn } = require("cypress/types/lodash");

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

  it('seleciona um produto (Mentoria) por seu valor', function () {
    cy.get('select')
      .select('mentoria')
      .should('have.value', 'mentoria')

  })
  it('seleciona um produto (Blog) por seu índice', function () {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })
  it('marcar o tipo de atendimento "Ajuda"', function () {
    cy.get('[type="radio"]')
      .check('ajuda')
      .should('be.checked')
  })
  it('marcar o tipo de atendimento "Elogio"', function () {
    cy.get('[type="radio"]')
      .check('elogio')
      .should('be.checked')
  })
  it('marcar o tipo de atendimento "Feedback"', function () {
    cy.get('[type="radio"]')
      .check('feedback')
      .should('be.checked')
  })
  it('Usando outro seletor CS para marcar o Radio : "Ajuda"', function () {
    cy.get('input[type="radio"][value="ajuda"]')
      .check()
      .should('be.checked')
  })
  it('Usando outro seletor CS para marcar o Radio : "Elogio"', function () {
    cy.get('input[type="radio"][value="elogio"]')
      .check()
      .should('be.checked')
  })
  it('Usando outro seletor CS para marcar o Radio : "Feedback"', function () {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })
  it('Marca cada tipo de atendimento, encadeia os radios na mesma função', function () {
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function ($radio) {
        cy.wrap($radio)
          .check()
        cy.wrap($radio)
          .should('be.checked')
      })
  })
  it('Marcar ambos os checkboxes e desmarcar o útimo', function () {
    cy.get('[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')

  })



  it('Marcar o checkbox de Telefone e validar mensagem de erro ao submenter o formulário', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('Eduarda Luzia')

    cy.get('#lastName')
      .should('be.visible')
      .type('Brezinski')

    cy.get('#email')
      .should('be.visible')
      .type('eduarda@tat.com')

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
  it('seleciona um arquivo da pasta fixtures', function () {
    cy.get('#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function ($file) {
        //console.log($file) Traz informações no console do navegador, olhar em Files para obter nome do arquivo
        expect($file[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo da pasta fixtures - usar drag-drop', function () {
    cy.get('#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(function ($file) {
        //console.log($file) Traz informações no console do navegador, olhar em Files para obter nome do arquivo
        expect($file[0].files[0].name).to.equal('example.json')
      })
  })
  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function () {
    cy.fixture('example.json').as('simpleFile')
    cy.get('#file-upload')
      .should('not.have.value')
      .selectFile('@simpleFile')
      .should(function ($file) {
        expect($file[0].files[0].name).to.equal('example.json')
      })

  })
  it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function () {
    cy.get('#privacy a')
      .should('have.attr', 'target', '_blank')
  })
  it('acessa a página da política de privacidade removendo o target e então clicando no link', function () {
    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('CAC TAT - Política de privacidade')
      .should('be.visible')
  })

});
