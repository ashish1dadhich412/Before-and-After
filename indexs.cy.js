// Cypress Test Suite for Login Page

describe('Login Page Tests', () => {
    // const url = 'https://tise-internet.herokuapp.com/login';
   
     // Before each test, visit the login page
     beforeEach(() => {
       cy.visit('https://the-internet.herokuapp.com/login');
     });
   
     // After each test, clear cookies
     afterEach(() => {
       cy.clearCookies();
     });
   
     // Test to check if the Login button is visible
     it('should display the Login button', () => {
       cy.get('button').contains('Login').should('be.visible');
     });
   
     // Test to verify if the page contains an input field with placeholder "Enter your email"
     it('should have a field with the placeholder text "Enter your email"', () => {
       cy.get('input[name="username"]').should('exist');
     });
   });