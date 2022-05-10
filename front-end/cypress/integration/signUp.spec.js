/// <reference types="cypress" />

describe("Add a recommendation", () =>{
    beforeEach(()=>{
        cy.deleteAll();
    });

    it("Should list a new music after adding one", ()=>{

        const recommendation = {
            name: `${Date()}`,
            link: 'https://www.youtube.com/watch?v=j33C6tx8QtI&t=2s',
        }
        
        cy.visit("http://localhost:3000/");
        
        cy.intercept("GET", 'http://localhost:5000/recommendations').as('listRecommendation');
        
        cy.get('[placeholder="Name"]').type(recommendation.name);
        cy.get('[placeholder*="youtu.be/"]').type(recommendation.link);
        cy.get('[placeholder*="Name"]').siblings().last().click();

        cy.wait('@listRecommendation');
        
        cy.get('article').contains(recommendation.name);
    });

    after(() =>{
        cy.deleteAll();
    });
})

describe("Rate a recommendation", ()=> {
    beforeEach(()=>{
        cy.deleteAll();
        cy.createRecommendation();
    });

    it("Should add 1 to the note when pressing the up arrow", ()=> {
        cy.get('article div:last svg').first().click();
        cy.get('article').first().find('svg').first().parent().contains('1');
    });

    it("Should subtract 1 to the note when pressing the down arrow", ()=> {
        cy.get('article div:last svg').last().click();
        cy.get('article').first().find('svg').first().parent().contains('-1');
    });

    it("Should delete a recommendation when the rating reacts '-6'", ()=> {
        Cypress._.times(6, ()=>{
            cy.get('article div:last svg').last().click();  
        }); 
        cy.get('article').should('not.exist');
    });
});