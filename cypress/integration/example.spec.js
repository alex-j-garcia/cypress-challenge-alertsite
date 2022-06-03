describe('AlertSite', () => {
  it('should be able to access the homepage', () => {
    cy.visit('https://uxm.stage.alertsite.com/');
  });
});