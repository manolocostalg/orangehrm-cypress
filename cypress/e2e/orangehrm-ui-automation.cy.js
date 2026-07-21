describe('OrangeHRM UI Automation', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    describe('Login Page', () => {

        it('Debe cargar correctamente la página de login', () => {

            // Verificar que la URL sea correcta
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            // Verificar que el logo superior sea visible
            cy.get('.orangehrm-login-branding > img')
                .should('be.visible');

            // Verificar que el logo lateral sea visible
            cy.get('.orangehrm-login-logo > img')
                .should('be.visible');

        });

        it('Debe mostrar correctamente todos los elementos principales del formulario', () => {

            // Verificar el título Login
            cy.get('.oxd-text--h5')
                .should('be.visible')
                .and('have.text', 'Login');

            // Verificar Username
            cy.get('[name="username"]')
                .should('be.visible')
                .and('have.attr', 'placeholder', 'Username');

            // Verificar Password
            cy.get('[name="password"]')
                .should('be.visible')
                .and('have.attr', 'placeholder', 'Password');

            // Verificar botón Login
            cy.get('button[type="submit"]')
                .should('be.visible')
                .and('contain.text', 'Login');

            // Verificar enlace Forgot your password?
            cy.get('.orangehrm-login-forgot > .oxd-text')
                .should('be.visible')
                .and('contain.text', 'Forgot your password?');

            // Verificar footer de redes sociales
            cy.get('.orangehrm-login-footer-sm')
                .should('be.visible');

        });

    });

    describe('Login', () => {

        it('Debe permitir iniciar sesión con credenciales válidas', () => {

            // Ingresar credenciales válidas
            cy.get('[name="username"]')
                .should('be.visible')
                .type('Admin');

            cy.get('[name="password"]')
                .should('be.visible')
                .type('admin123');

            // Clic en Login
            cy.get('button[type="submit"]')
                .should('be.visible')
                .click();

            // Confirmar navegación al Dashboard
            cy.location('pathname')
                .should('include', '/dashboard');

            // Validar encabezado del Dashboard
            cy.contains('h6', 'Dashboard')
                .should('be.visible');

            // Abrir menú del usuario
            cy.get('.oxd-userdropdown-tab')
                .should('be.visible')
                .click();

            // Cerrar sesión
            cy.contains('.oxd-userdropdown-link', 'Logout')
                .should('be.visible')
                .click();

            // Validar regreso al Login
            cy.location('pathname')
                .should('include', '/auth/login');

        });

        it('Debe mostrar un mensaje de error con contraseña incorrecta', () => {

            // Ingresar credenciales con contraseña incorrecta
            cy.get('[name="username"]')
                .should('be.visible')
                .type('Admin');

            // Ingresar contraseña incorrecta
            cy.get('[name="password"]')
                .should('be.visible')
                .type('admin1234');

            // Clic en Login
            cy.get('button[type="submit"]')
                .click();

            // Validar mensaje de error
            cy.get('.oxd-alert-content > .oxd-text')
                .should('be.visible')
                .and('have.text', 'Invalid credentials');

            // Validar que la URL sigue siendo la de login
            cy.location('pathname')
                .should('include', '/auth/login');

        });

        it('Debe mostrar un mensaje de error con usuario incorrecto', () => {

            // Ingresar credenciales con usuario incorrecto
            cy.get('[name="username"]')
                .should('be.visible')
                .type('Admin1');

            // Ingresar contraseña correcta
            cy.get('[name="password"]')
                .should('be.visible')
                .type('admin123');

            // Clic en Login
            cy.get('button[type="submit"]')
                .click();

            // Validar mensaje de error
            cy.get('.oxd-alert-content > .oxd-text')
                .should('be.visible')
                .and('have.text', 'Invalid credentials');

            // Validar que la URL sigue siendo la de login
            cy.location('pathname')
                .should('include', '/auth/login');

        });

        it('Debe validar que Username y Password son obligatorios', () => {

            // Clic en Login sin ingresar credenciales
            cy.get('button[type="submit"]')
                .click();

            // Deben aparecer dos mensajes Required
            cy.get('.oxd-input-field-error-message')
                .should('have.length', 2);

            // Validar que los mensajes de error sean "Required"
            cy.get('.oxd-input-field-error-message')
                .first()
                .should('have.text', 'Required');

            // Validar que los mensajes de error sean "Required"
            cy.get('.oxd-input-field-error-message')
                .last()
                .should('have.text', 'Required');

        });

    });

});