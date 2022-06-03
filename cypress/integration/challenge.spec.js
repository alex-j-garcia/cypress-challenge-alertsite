describe('Login form', () => {
  it('should login with valid credentials', () => {
    // Given
    const email = 'rilofa4340@falkyz.com';
    const password = 'Waverly!123';

    // When
    /*
     * Enter credentials and log in to the application.
     */
    cy.visit('https://uxm.stage.alertsite.com/');

    // Then
    /*
     * Assert that you have logged in successfully. DO NOT
     * use the assertion already provided below. DO NOT assert
     * for the title of the page, either. Instead, target an
     * element that would only be visible after login.
     *
     * IMPORTANT:
     *
     * User can target any HTML element on the dashboard
     * after login, but they MUST assert the login was successful
     * in some way.
     *
     * Any assertion could fail due to a slow connection causing
     * a slower load of the dashboard. In this case, find a
     * workaround.
     */
    cy.url().should(
      'include',
      'https://uxm.stage.alertsite.com/ui/#/app/2/monitor/dashboard/'
    );
  })
});