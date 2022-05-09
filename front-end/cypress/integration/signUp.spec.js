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
        
        //cy.intercept("POST", 'http://localhost:5000/recommendations').as('addRecommendation');
        cy.intercept("GET", 'http://localhost:5000/recommendations').as('listRecommendation');
        
        cy.get('[placeholder="Name"]').type(recommendation.name);
        cy.get('[placeholder*="youtu.be/"]').type(recommendation.link);
        cy.get('[placeholder*="Name"]').siblings().last().click();

        cy.wait('@listRecommendation');
        
        cy.get('article').contains(recommendation.name);
    });
})

describe("Rate a recommendation", ()=> {
    beforeEach(()=>{
        cy.deleteAll();
    });

    it("Should add 1 to the note when pressing the up arrow", ()=>{

        cy.get('article').first().find('svg').click();
    })


});