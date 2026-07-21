# 🧪 Automatización de Pruebas UI con Cypress - OrangeHRM

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
orangehrm-ui-automatizacion/
│
├── cypress/
│   ├── e2e/
│   │   └── orangehrm-ui-automation.cy.js
│   ├── fixtures/
│   └── support/
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Instalación

### Clonar el repositorio

```bash
git clone https://github.com/manolocostalg/orangehrm-ui-automatizacion.git
```

### Acceder al proyecto

```bash
cd orangehrm-ui-automatizacion
```

### Instalar las dependencias

```bash
npm install
```

---

## ▶️ Ejecución de las pruebas

### Abrir la interfaz gráfica de Cypress

```bash
npx cypress open
```

### Ejecutar la prueba en Google Chrome

```bash
npm run prueba-chrome
```

### Ejecutar la prueba en Microsoft Edge

```bash
npm run prueba-edge
```

### Ejecutar la prueba en Electron

```bash
npm run prueba-electron
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

| ID | Caso de prueba | Estado |
|:---:|----------------|:------:|
| TC-01 | Verificar carga de la página de Login | ✅ |
| TC-02 | Validar los elementos principales de la interfaz | ✅ |
| TC-03 | Inicio de sesión con credenciales válidas | ✅ |
| TC-04 | Inicio de sesión con usuario inválido | ✅ |
| TC-05 | Inicio de sesión con contraseña inválida | ✅ |
| TC-06 | Validación de campos obligatorios | ✅ |
| TC-07 | Verificar acceso al Dashboard | ✅ |
| TC-08 | Verificar cierre de sesión (Logout) | ✅ |

---

## 📸 Evidencias

Este apartado incluirá capturas de pantalla de la ejecución de las pruebas automatizadas y de los principales escenarios validados.

**Ejemplo:**

```text
docs/
├── login-page.png
├── dashboard.png
├── cypress-open.png
└── test-passed.png
```

Una vez agregadas las imágenes podrán mostrarse así:

```markdown
![Página de Login](docs/login-page.png)

![Dashboard](docs/dashboard.png)

![Prueba Exitosa](docs/test-passed.png)
```

---

## 🚀 Cómo ejecutar este proyecto

1. Clonar el repositorio.
2. Instalar las dependencias mediante `npm install`.
3. Ejecutar Cypress con `npx cypress open` o utilizar alguno de los scripts definidos en `package.json`.
4. Seleccionar el navegador deseado y ejecutar la prueba automatizada.

---

## 📊 Estado del proyecto

🟢 **Proyecto finalizado y publicado** como parte de mi portafolio de **QA Automation Engineer**.

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