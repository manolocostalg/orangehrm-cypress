# 📦 Original Project

## 🧪 Project

**OrangeHRM Cypress**

Proyecto de automatización de pruebas de interfaz de usuario para la aplicación web OrangeHRM, desarrollado utilizando Cypress.

---

## 🎯 Original Objective

Automatizar escenarios funcionales y de validación de la página de Login de OrangeHRM utilizando Cypress.

---

## 🛠 Original Technology Stack

- Cypress 15.18.1
- JavaScript
- Node.js
- npm
- Git
- GitHub
- Visual Studio Code

---

## 📁 Original Structure

```text
orangehrm-ui-automation/
├── cypress/
│   ├── e2e/
│   │   └── orangehrm-ui-automation.cy.js
│   ├── fixtures/
│   │   ├── example.json
│   │   ├── profile.json
│   │   └── users.json
│   ├── screenshots/
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   └── videos/
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

> `screenshots/` y `videos/` son directorios generados por Cypress y excluidos del control de versiones mediante `.gitignore`.

---


## 🧪 Original Test Coverage

El proyecto contiene un único archivo de pruebas E2E:

`cypress/e2e/orangehrm-ui-automation.cy.js`

Se automatizan 6 casos:
- Verificación de carga de la página de Login.
- Validación de los elementos principales del formulario.
- Inicio de sesión con credenciales válidas.
- Inicio de sesión con contraseña incorrecta.
- Inicio de sesión con usuario incorrecto.
- Validación de campos Username y Password obligatorios.
---

## 🌐 Application Under Test

OrangeHRM Open Source Demo
- Base URL: https://opensource-demo.orangehrmlive.com/
- Módulo automatizado: Authentication / Login
---

## ⚙️ Original Cypress Configuration

El proyecto utiliza:
- baseUrl configurada para OrangeHRM.
- Grabación de video habilitada.
- Screenshots automáticos en caso de fallo.
- Directorios independientes para screenshots y videos.
- Configuración básica de setupNodeEvents.
---

## 📋 Original Execution

El proyecto dispone de scripts npm para:
- Abrir Cypress.
- Ejecutar las pruebas.
- Ejecutar las pruebas en Chrome.
- Ejecutar las pruebas en Microsoft Edge.
- Ejecutar las pruebas en Electron.
---

## 📌 Original Repository

El proyecto fue publicado originalmente en GitHub bajo el nombre:

    - orangehrm-ui-automatizacion
Durante la estandarización, el repositorio fue renombrado a:
     
    - orangehrm-cypress
   
El historial del repositorio existente se conserva.

---

## 📝 Original State

- El proyecto fue desarrollado utilizando Visual Studio Code y posteriormente publicado en GitHub.

- La automatización funcional existente se conserva como base del proyecto.

- La estandarización se enfocará en:
    - Organización del repositorio.
    - Documentación.
    - README.
    - Estructura de soporte documental.
    - Presentación profesional del proyecto.

- No se contempla una refactorización del código de automatización como parte de esta etapa.
