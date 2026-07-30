# Empresa UI Workspace

> Librería de componentes UI desarrollada con Angular, PrimeNG y Storybook.

---

# Descripción

Empresa UI es una librería de componentes reutilizables desarrollada sobre Angular y PrimeNG. Su objetivo es centralizar componentes, estilos y temas para facilitar el desarrollo de aplicaciones con una apariencia consistente.

Actualmente la librería incluye:

- Componentes reutilizables.
- Integración con PrimeNG.
- Sistema de temas personalizados.
- Documentación interactiva mediante Storybook.

---

# Tecnologías

- Angular 20
- PrimeNG 20.4.0
- PrimeUIX Themes
- Storybook 10
- TypeScript

---

# Requisitos

Antes de utilizar Empresa UI asegúrate de contar con el siguiente entorno:

| Herramienta | Versión |
|-------------|----------|
| Node.js | 22.12.0 o superior |
| npm | 10 o superior |
| Angular CLI | 20 |
| Angular | 20 |

Puedes verificar las versiones instaladas ejecutando:

```bash
node -v
npm -v
ng version
```

---

# Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
```

### 2. Ingresar al proyecto

```bash
cd empresa-ui-workspace
```

### 3. Instalar dependencias

```bash
npm install
```

---

# Configuración

La librería utiliza un proveedor para registrar la configuración global.

Ejemplo:

```ts
provideEmpresaUI({
    theme: 'hamburguesa'
});
```

Temas disponibles actualmente:

- hamburguesa
- oceanTheme
- forestTheme

---

# Scripts disponibles

## Ejecutar Storybook

```bash
ng run empresa-ui-workspace:storybook
```

## Ejecutar la aplicación Demo

```bash
ng serve demo
```

## Compilar la librería

```bash
ng build empresa-ui
```

---

# Arquitectura del proyecto

```
empresa-ui-workspace
│
├── .storybook
│
├── projects
│   ├── demo
│   └── empresa-ui
│       ├── components
│       ├── themes
│       ├── config
│       └── providers
└── dist
```

---

# Componentes UI

Los componentes disponibles se encuentran documentados en Storybook.

Ejemplos:

- Button
- Select

---

# Theming y estilos

Empresa UI permite cambiar el tema global mediante `provideEmpresaUI()`.

Ejemplo:

```ts
provideEmpresaUI({
    theme: 'hamburguesa'
});
```

---

# Accesibilidad

Los componentes están desarrollados sobre PrimeNG, aprovechando sus capacidades de accesibilidad y navegación mediante teclado.

Se recomienda validar la accesibilidad de cada componente incorporado a la librería.

---

# Testing

Para ejecutar las pruebas:

```bash
ng test
```

Storybook puede utilizarse para validar visualmente el comportamiento de los componentes.

---

# Convenciones de desarrollo

- Utilizar componentes Standalone.
- Mantener tipado estricto de TypeScript.
- Documentar cada componente mediante Storybook.
- Mantener la estructura de carpetas definida por la librería.
- Agregar nuevas funcionalidades mediante Pull Request.

---

# Contribución

1. Crear una rama a partir de `develop`.
2. Implementar los cambios.
3. Ejecutar pruebas y validar Storybook.
4. Crear un Merge Request para revisión.

---

## Desarrollo local

### Compilar la librería

```bash
ng build empresa-ui
```

### Crear el enlace local

```bash
cd dist/empresa-ui
npm link
```

### Consumir la librería desde el proyecto Demo

```bash
cd ../../projects/demo
npm link empresa-ui
```

Con esto el proyecto Demo utilizará la versión local de la librería sin necesidad de publicarla en un registro npm.

Si realizas cambios en la librería, vuelve a ejecutar:

```bash
ng build empresa-ui
```

para que el Demo utilice la versión compilada más reciente.