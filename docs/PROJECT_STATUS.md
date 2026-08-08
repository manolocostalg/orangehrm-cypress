# 📊 Project Status

## 🧪 Project

**OrangeHRM Cypress**

---

## 📌 Current Status

🟢 **Estandarización completada**

El proyecto cuenta con una automatización funcional para el módulo de autenticación de OrangeHRM, desarrollada con Cypress y publicada en GitHub.

La etapa de estandarización del proyecto ha sido completada, manteniendo el código de automatización existente sin refactorización.

El proyecto fue organizado y documentado siguiendo la estructura e identidad establecidas para el portafolio de QA Automation.

---

## ✅ Functional Status

La automatización existente contempla los siguientes escenarios:

- Verificación de carga de la página de Login.
- Validación de los elementos principales del formulario.
- Inicio de sesión con credenciales válidas.
- Inicio de sesión con contraseña incorrecta.
- Inicio de sesión con usuario incorrecto.
- Validación de campos Username y Password obligatorios.
- Acceso al Dashboard.
- Cierre de sesión (Logout).

**Total de casos automatizados:** 6

---

## 🛠 Current Technology Stack

- Cypress 15.18.1
- JavaScript
- Node.js
- npm
- Git
- GitHub
- Visual Studio Code

---

## 🌐 Application Under Test

**OrangeHRM Open Source Demo**

- Módulo: Authentication / Login
- Base URL: `https://opensource-demo.orangehrmlive.com/`

---

## 📁 Current Project Structure

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

Los directorios `screenshots/` y `videos/` son generados por Cypress durante la ejecución y están excluidos del control de versiones mediante `.gitignore`.

---

## 📚 Documentation Status
La documentación del proyecto ha sido estandarizada y se encuentra completa para el alcance actual.



| Documento | Estado |
|---|---|
| ORIGINAL_PROJECT.md | 🟢 Completado |
| PROJECT_BRIEF.md | 🟢 Completado |
| PROJECT_STATUS.md | 🟢 Completado |
| CONTEXT.md | 🟢 Completado |
| ROADMAP.md | 🟢 Completado |
| CHANGELOG.md | 🟢 Completado |
| README.md | 🟢 Completado |


---

## 🧹 Standardization Status

### Completado

- ✅ Análisis de la estructura original.
- ✅ Revisión de la configuración de Cypress.
- ✅ Revisión del archivo de pruebas E2E.
- ✅ Revisión de fixtures.
- ✅ Revisión del .gitignore.
- ✅ Revisión del package.json.
- ✅ Renombrado del repositorio en GitHub.
- ✅ Actualización del remote origin.
- ✅ Renombrado de la carpeta local.
- ✅ Creación de la estructura documental.
- ✅ Creación de ORIGINAL_PROJECT.md.
- ✅ Creación de PROJECT_BRIEF.md.
- ✅ Actualización de PROJECT_STATUS.md.
- ✅ Creación y actualización de CONTEXT.md.
- ✅ Creación y actualización de ROADMAP.md.
- ✅ Creación y actualización de CHANGELOG.md.
- ✅ Estandarización del README.md.
- ✅ Definición de los casos de prueba automatizados.
- ✅ Documentación de las evidencias generadas por Cypress.
- ✅ Revisión de la estructura final del repositorio.

---

## 🚫 Code Refactoring

La estandarización actual no contempla una refactorización del código de automatización existente.

El código funcional se conserva como fue desarrollado originalmente.

El trabajo actual se limita a:
- Organización.
- Documentación.
- Estandarización.
- Presentación profesional.
- Consistencia con el resto del portafolio.

Cualquier refactorización futura deberá tratarse como una etapa independiente.

---


## 📊 Project Health

| Área | Estado |
|---|:---:|
| Automatización funcional | 🟢 |
| Configuración Cypress | 🟢 |
| Git / GitHub | 🟢 |
| Documentación | 🟢 |
| Organización del proyecto | 🟢 |
| README | 🟢 |
| Estandarización general | 🟢 |

---

## 🎯 Next Steps
La etapa de estandarización se encuentra completada.

Las siguientes actividades corresponden a futuras mejoras o mantenimiento del proyecto y no forman parte de la estandarización actual:

1. Mantener actualizadas las dependencias de Cypress y Node.js.
2. Ampliar la cobertura de pruebas E2E en futuras iteraciones.
3. Incorporar nuevos módulos de OrangeHRM si se decide ampliar el alcance.
4. Evaluar una refactorización del framework en una etapa independiente.
5. Mantener actualizada la documentación ante cambios relevantes.

---

## 👨‍💻 Project Owner
- Manolo Costal
- QA Automation Engineer