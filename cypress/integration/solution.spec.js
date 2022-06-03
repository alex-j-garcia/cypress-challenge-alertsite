describe('Login form', () => {
  it('should login with valid credentials', () => {
    // Given
    const email = 'rilofa4340@falkyz.com';
    const password = 'Waverly!123';

    // When
    cy.visit('https://uxm.stage.alertsite.com/');
    cy.get('#id_email').type(email);
    cy.get('#id_password').type(password);
    cy.get('input[type="submit"]').click();

    // Then
    cy.get('div.btn.new.filterPill.btn-filter', { timeout: 20000 })
      .should('be.visible');
  })
});