describe('TODO api testing', () => {

    it('mouse and key board events', ()=>{
        cy.viewport('iphone-6')
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('input[name="txtUsername"]').scrollIntoView().should('be.visible')
        cy.get('input[name="txtUsername"]').type('Admin')

        cy.get('input[name="txtPassword"]').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule').invoke('show').should('be.visible').trigger('mouseover')
        cy.wait(2000)
    })
})








   
    
    