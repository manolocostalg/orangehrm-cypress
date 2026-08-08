# 🧪 OrangeHRM — Automatización de Pruebas UI con Cypress

## 📌 Descripción

Este proyecto consiste en la automatización de pruebas de interfaz de usuario (UI) para la aplicación web **OrangeHRM**, desarrollada utilizando **Cypress**.

El objetivo es validar el funcionamiento del módulo de autenticación mediante la automatización de escenarios positivos y negativos, verificando el comportamiento esperado de la aplicación y aplicando buenas prácticas en el desarrollo de pruebas automatizadas.

Este proyecto forma parte de mi portafolio como **QA Automation Engineer** y demuestra la implementación de pruebas UI utilizando Cypress, JavaScript y Node.js.

---

## 🎯 Objetivos

- Automatizar el flujo de autenticación de OrangeHRM.
- Validar escenarios positivos y negativos del proceso de inicio de sesión.
- Verificar el funcionamiento de los principales elementos de la interfaz.
- Ejecutar pruebas automatizadas en distintos navegadores.
- Aplicar buenas prácticas en la organización de proyectos con Cypress.
- Documentar el proyecto para facilitar su instalación y ejecución.

---

## 🛠 Tecnologías utilizadas

- Cypress
- JavaScript
- Node.js
- npm
- Git
- GitHub

---

## 🧩 Competencias demostradas

Durante el desarrollo de este proyecto se aplicaron los siguientes conocimientos:

- Automatización de pruebas de interfaz de usuario (UI).
- Validación de escenarios positivos y negativos.
- Smoke Testing.
- Validación de formularios.
- Uso de Assertions para verificar resultados.
- Localización de elementos mediante selectores CSS.
- Organización de proyectos con Cypress.
- Ejecución de pruebas desde línea de comandos.
- Ejecución Cross-Browser (Chrome, Microsoft Edge y Electron).
- Gestión de dependencias mediante npm.

---

## 📁 Estructura del proyecto

```text
orangehrm-cypress/
├── cypress/
│   ├── e2e/
│   │   └── orangehrm-ui-automation.cy.js
│   ├── fixtures/
│   │   ├── example.json
│   │   ├── profile.json
│   │   └── users.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── docs/
│   ├── CHANGELOG.md
│   ├── CONTEXT.md
│   ├── ORIGINAL_PROJECT.md
│   ├── PROJECT_BRIEF.md
│   ├── PROJECT_STATUS.md
│   └── ROADMAP.md
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

### Principales directorios

* `cypress/e2e/` — Contiene los escenarios de prueba E2E.
* `cypress/fixtures/` — Contiene archivos JSON utilizados como datos de prueba.
* `cypress/support/` — Contiene archivos de soporte y configuración de Cypress.
* `docs/` — Contiene la documentación técnica y de seguimiento del proyecto.
* `cypress/screenshots/` — Directorio generado por Cypress para capturas de fallos.
* `cypress/videos/` — Directorio generado por Cypress para videos de ejecución.

Los directorios `screenshots/` y `videos/` son generados durante la ejecución y están excluidos del control de versiones mediante `.gitignore`.

---

## ⚙️ Instalación

### Clonar el repositorio

```bash
git clone https://github.com/manolocostalg/orangehrm-cypress.git
```

### Acceder al proyecto

```bash
cd orangehrm-cypress
```

### Instalar las dependencias

```bash
npm install
```

---

## ▶️ Ejecución de las pruebas

### Abrir Cypress en modo interactivo

```bash
npx cypress open
```
Permite ejecutar las pruebas desde la interfaz gráfica de Cypress y seleccionar el navegador disponible.

### Ejecutar todas las pruebas

```bash
npm run run
```
Ejecuta todas las pruebas mediante la línea de comandos.


### Ejecutar las pruebas en Google Chrome
```bash
npm run prueba-chrome
```

### Ejecutar las pruebas en Microsoft Edge
```bash
npm run prueba-edge
```

### Ejecutar las pruebas en Electron
```bash
npm run prueba-electron
```

Los scripts de ejecución están definidos en `package.json` y utilizan el archivo:
```bash
cypress/e2e/orangehrm-ui-automation.cy.js
```

---

## ✅ Escenarios automatizados

La automatización implementa pruebas sobre el módulo de autenticación de **OrangeHRM**.

Las validaciones realizadas incluyen:

- Verificación de la carga de la página de Login.
- Validación de los elementos principales de la interfaz.
- Inicio de sesión con credenciales válidas.
- Inicio de sesión con usuario inválido.
- Inicio de sesión con contraseña inválida.
- Validación de mensajes de error.
- Validación de campos obligatorios.
- Acceso correcto al Dashboard.
- Cierre de sesión (Logout).

---

## 📋 Casos de prueba automatizados

| ID | Caso de prueba | Validaciones principales | Estado |
|:---:|----------------|--------------------------|:------:|
| TC-01 | Verificar carga de la página de Login | URL de Login y visibilidad de los logotipos | ✅ |
| TC-02 | Validar elementos principales del formulario de Login | Título, Username, Password, botón Login, recuperación de contraseña y redes sociales | ✅ |
| TC-03 | Iniciar sesión con credenciales válidas | Acceso al Dashboard, validación del encabezado, Logout y regreso al Login | ✅ |
| TC-04 | Iniciar sesión con contraseña incorrecta | Mensaje `Invalid credentials` y permanencia en Login | ✅ |
| TC-05 | Iniciar sesión con usuario incorrecto | Mensaje `Invalid credentials` y permanencia en Login | ✅ |
| TC-06 | Validar campos Username y Password obligatorios | Validación de dos mensajes `Required` | ✅ |

### 📊 Resumen

- **Total de casos automatizados:** 6
- **Casos positivos:** 1
- **Casos negativos:** 3
- **Casos de validación de interfaz:** 1
- **Casos de validación de campos obligatorios:** 1
- **Estado:** ✅ Automatizados

---

## 📸 Evidencias

El proyecto utiliza las funcionalidades de evidencia integradas en Cypress para generar automáticamente:

- Capturas de pantalla cuando una prueba falla.
- Videos de las ejecuciones realizadas en modo headless.

Los archivos generados durante las ejecuciones se almacenan localmente en:

```text
cypress/
├── screenshots/
└── videos/
```
Estos directorios están excluidos del control de versiones mediante `.gitignore`.


---

## 🚀 Cómo ejecutar el proyecto

Para ejecutar el proyecto localmente:

1. Clonar el repositorio:
```bash
git clone https://github.com/manolocostalg/orangehrm-cypress.git
```

2. Acceder al directorio del proyecto:
```bash
cd orangehrm-cypress
```

3. Instalar las dependencias:
```bash
npm install
```

4. Ejecutar Cypress mediante la interfaz gráfica:
```bash
npx cypress open
```

5. Seleccionar E2E Testing.

6. Seleccionar el navegador disponible.

7. Ejecutar el archivo:
```bash
cypress/e2e/orangehrm-ui-automation.cy.js
```

También es posible ejecutar las pruebas directamente desde la línea de comandos utilizando los scripts definidos en `package.json`.

---


## 📊 Estado del proyecto

### Automatización

🟢 **Finalizada**

El proyecto cuenta con una suite de pruebas E2E funcional para validar el módulo de autenticación de OrangeHRM.

Los escenarios automatizados contemplan:

- Carga de la página de Login.
- Validación de elementos principales.
- Inicio de sesión con credenciales válidas.
- Validación de credenciales inválidas.
- Validación de campos obligatorios.
- Acceso al Dashboard.
- Cierre de sesión.

### Estandarización

🟡 **En proceso**

Actualmente el proyecto se encuentra en una etapa de estandarización para alinearlo con la estructura, documentación e identidad visual establecidas para el portafolio de QA Automation.

Esta etapa contempla:

- Organización del repositorio.
- Estandarización de la documentación.
- Actualización del README.
- Organización de la estructura documental.
- Revisión de evidencias.
- Revisión final del repositorio.

La estandarización **no contempla una refactorización del código de automatización existente**.

---

## 👨‍💻 Autor

**Manolo Costal**

QA Automation Engineer

GitHub:  
https://github.com/manolocostalg

LinkedIn:  
https://www.linkedin.com/in/manolocostal/

---

⭐ Si este proyecto fue de tu interés, te invito a visitar el resto de mi portafolio disponible en GitHub.