# Rick and Morty web

- Uso bun como package manager.
- Uso vite como empaquetador.
- Typescript is love, Typescript is life.
- Biblioteca: React, por que no?
- API: https://rickandmortyapi.com/api/character
- Voy a usar tailwind, para practicar.

El proyecto usa Zustand para el manejo del estado global, y React Router para la navegación entre páginas.

La idea es usar screaming architecture: 
    - [Gentleman Programming]("https://www.youtube.com/watch?v=lHwYP5UsgoQ")
    - [Uncle Bob]("https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html")

## Animaciones:

En vez de crear las mias, puedo usar:
   - [midudev tailwind animations]("https://tailwindcss-animations.vercel.app/")

## Deploy:

Voy a deployarlo en Vercel, asi que ahora tengo que usar las branches de git para no andar rompiendo el main.

## Estructura del Proyecto

```
rick-and-morty/
├── public/
│   ├── font/
│   │   └── MISFITS.woff2
│   └── vite.svg
├── src/
│   ├── about/
│   │   └── About.tsx                    # Página sobre el proyecto
│   ├── assets/
│   │   ├── about-profile.jpg
│   │   ├── background.webp
│   │   ├── GithubIcon.svg
│   │   ├── react.svg
│   │   └── XIcon.svg
│   ├── characters/
│   │   ├── components/
│   │   │   ├── CharacterDetail.tsx      # Detalle individual de personaje
│   │   │   └── CharacterItem.tsx        # Card de personaje en grid
│   │   └── Characters.tsx               # Página principal de personajes
│   ├── Footer/
│   │   └── Footer.tsx                   # Componente footer de la app
│   ├── NavBar/
│   │   └── NavBar.tsx                   # Barra de navegación
│   ├── RoutesNotFound/
│   │   └── RoutesNotFound.tsx           # Página 404
│   ├── store/
│   │   └── CharacterStore.ts            # Store global con Zustand
│   ├── App.css                          # Estilos globales
│   ├── App.tsx                          # Componente raíz
│   ├── AppContainer.tsx                 # Container principal
│   ├── AppRouter.tsx                    # Configuración de rutas
│   ├── config.ts                        # Configuración de la app
│   ├── index.css                        # Estilos base y Tailwind
│   ├── main.tsx                         # Punto de entrada
│   ├── types.d.ts                       # Definiciones de tipos TypeScript
│   └── vite-env.d.ts                    # Tipos de Vite
├── .env                                 # Variables de entorno
├── .env.example                         # Variables de entorno de ejemplo
├── .gitignore                           # Archivos ignorados por git
├── bun.lockb                            # Lock file de Bun
├── eslint.config.js                     # Configuración de ESLint
├── index.html                           # HTML base
├── package.json                         # Dependencias y scripts
├── README.md                            # Documentación del proyecto
├── tsconfig.app.json                    # Config TypeScript para la app
├── tsconfig.json                        # Config TypeScript principal
├── tsconfig.node.json                   # Config TypeScript para Node
└── vite.config.ts                       # Configuración de Vite
```

### Características principales:

- **Screaming Architecture**: La estructura grita lo que hace cada módulo
- **Búsqueda de personajes**: Barra de búsqueda con resultados en tiempo real
- **Navegación**: Router con páginas de listado, detalle y about
- **Estado global**: Manejo centralizado con Zustand
- **Responsive**: Diseño adaptable con Tailwind CSS (trabajando en eso, xD)
- **TypeScript**: Tipado fuerte en todo el proyecto
