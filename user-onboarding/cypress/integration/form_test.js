describe('Quite App', () => {
    it('example test', () =>{
        expect(true).to.equal(true)
    })

    //helper functions
    const nameInput= () => cy.get('#nameInput')
    const emailInput= () => cy.get('#emailInput')
    const passwordInput= () => cy.get('#passwordInput')
    const ToSInput= () => cy.get('#ToSInput')
    const submitbutton= () => cy.get('[type="submit"]')

    beforeEach( () => cy.visit('http://localhost:3000'))

    it('visit website', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#nameInput').should('exist')
        cy.get('#emailInput').should('exist')
        passwordInput().should('exist')
        ToSInput().should('exist')
    })

    describe('Filling out the input', () =>{
        it('can type the inputs',() => {
            nameInput().type('Cody123').should('have.value','Cody123')
            emailInput().type('codysing123@asd.com')
            passwordInput().type('superpassword123')
            ToSInput().check().should('have.value','on')
            submitbutton().click()
        })
        
    })
})