class BasePage {
  visit(url) {
    cy.visit(url)
  }
}

export default new BasePage();