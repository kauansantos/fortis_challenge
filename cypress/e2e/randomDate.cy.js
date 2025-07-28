
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

describe('Fortis Games - Random Date Generator', () => {
  const startDate = dayjs('2024-01-05');
  const endDate = dayjs('2025-11-25');

  beforeEach(() => {
    cy.visit('/');
  });

  it('generates and validates 4 random dates within range', () => {
    
    // Step 1 - Pick 4 random dates
    cy.get('input[name="num"]').clear().type('4');

    // Step 2 - Set Start Date
    cy.get('[name="start_day"]').select('5');
    cy.get('[name="start_month"]').select('January');
    cy.get('[name="start_year"]').select('2024');

    // Step 3 - Set End Date
    cy.get('[name="end_day"]').select('25');
    cy.get('[name="end_month"]').select('November');
    cy.get('[name="end_year"]').select('2025');

    // Step 4 - Submit
    cy.get('input[value="Get Dates"]').click();

    // Step 5 - Assertions
    cy.get('[style="line-height: 1.4em; margin-left: 2em"]')
      .should('exist') 
      .invoke('text')
      .then((text) => {
        const dateLines = text.trim().split('\n').filter(line => /^\d{4}-\d{2}-\d{2}$/.test(line));

        // Assert there are 4 dates
        expect(dateLines.length).to.equal(4);

        // Assert all dates are within range
        dateLines.forEach(dateStr => {
          const parsed = dayjs(dateStr);
          expect(parsed.isSameOrAfter(startDate)).to.be.true;
          expect(parsed.isSameOrBefore(endDate)).to.be.true;
        });
      });
  });
});
