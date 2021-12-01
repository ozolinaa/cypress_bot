// Adding new methods for custom commands added in ./commands.js
// good to know when working with this file - https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable {
    /**
     * Find element(s) elements using `data-test` attribute value.
     * @example cy.findTestElements('module.test.key')
     */
    findTestElements(attr: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Get element(s) using `data-test` attribute value.
     * @example
     * //return any element with the attr `data-test=name`
     * cy.getByDataTestAttr('module.test.key')
     */
    getByDataTestAttr(
      attr: string,
      options?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >
    ): Chainable<JQuery<HTMLElement>>;
  }
}
