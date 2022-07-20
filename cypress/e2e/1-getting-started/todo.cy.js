/// <reference types="cypress" />


describe('Flipkart test',()=>{
  it('Flipkart login', ()=>{
    cy.visit("https://www.flipkart.com")
    
    cy.get("._1_3w1N").click();
    cy.get("._2IX_2-.VJZDxU").first().type("9353521623");
    cy.get("._2IX_2-._3mctLh.VJZDxU").type("Arch1896*");
    cy.get("._2KpZ6l._2HKlqd._3AWRsL").click();
    cy.wait(8000);
    cy.get('input[name="q"]').type("watches").type('{enter}');
    //cy.get(".IRpwTa").first().click();
    //cy.get('._2r_T1I').first().click()
    cy.get('._2r_T1I > a').first().invoke('removeAttr', 'target').click()
    //cy.get('._2r_T1I').first().click()
    cy.get('._2KpZ6l._2U9uOA._3v1-ww').click().wait(2000)
    cy.go('back')
  })
})