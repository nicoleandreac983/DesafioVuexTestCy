describe('Prueba de envío de mensaje desde Child a Parent', () => {
  it('Verifica que el mensaje se envíe correctamente desde Child a Parent', () => {
    // Visita el componente Parent
    cy.visit('/parent')

    // Escribe un mensaje en el campo de texto del Child
    cy.get('.input').type('¡Hola desde el Child!')

    // Haz clic en el botón "Enviar" del Child
    cy.get('.btn').click()

    // Verifica que el mensaje se haya recibido en el Parent
    cy.get('p').should('contain', 'Mensaje recibido desde el hijo: ¡Hola desde el Child!')
  })
})
