# 🌟 StellarLaunch - Crowdfunding Blockchain Platform

Una plataforma de crowdfunding moderna construida en Stellar blockchain, diseñada para jóvenes emprendedores (18-30 años) que buscan financiar sus proyectos Web3 innovadores.

## ✨ Características

- 🔗 **Integración con Stellar Blockchain** - Todas las transacciones en testnet
- 💼 **Conexión con Freighter Wallet** - Gestión segura de fondos
- 🚀 **Lanzamiento de Proyectos** - Crea y publica tu idea en minutos
- 💰 **Sistema de Inversión** - Invierte en proyectos con Lumens (XLM)
- 📊 **Transparencia Total** - Todas las transacciones verificables en blockchain
- 🎁 **Recompensas en Tokens** - Los inversores reciben equity tokens al alcanzar objetivos

## 🛠️ Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Stellar SDK** - Integración blockchain
- **Freighter API** - Wallet connection
- **Tailwind CSS v4** - Estilos y diseño

## 🚀 Instalación y Setup

### Prerrequisitos

1. **Node.js** (v18 o superior)
2. **Freighter Wallet** - [Instalar extensión](https://www.freighter.app/)

### Pasos de Instalación

\`\`\`bash
# Clonar el repositorio
git clone <repository-url>
cd stellar-launch

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
\`\`\`

La aplicación estará disponible en `http://localhost:3000`

## 📱 Uso

### Para Emprendedores

1. **Conecta tu Wallet** - Click en "Conectar Wallet" en el header
2. **Lanza tu Proyecto** - Ve a "Lanzar Proyecto" y completa el formulario
3. **Recibe Inversiones** - Comparte tu proyecto y comienza a recibir fondos en Lumens

### Para Inversores

1. **Conecta tu Wallet Freighter** - Asegúrate de tener fondos en testnet
2. **Explora Proyectos** - Navega por los proyectos disponibles
3. **Invierte** - Selecciona un proyecto y envía Lumens
4. **Recibe Recompensas** - Obtén tokens cuando el proyecto alcance su objetivo

## 🔧 Configuración de Stellar Testnet

### Obtener Lumens de Prueba

1. Instala Freighter Wallet
2. Cambia a Testnet en la configuración
3. Copia tu dirección pública
4. Visita [Stellar Friendbot](https://laboratory.stellar.org/#account-creator?network=test) para obtener XLM de prueba

### Verificar Transacciones

Todas las transacciones pueden verificarse en:
- [Stellar Laboratory](https://laboratory.stellar.org/)
- [StellarExpert Testnet](https://stellar.expert/explorer/testnet)

## 📂 Estructura del Proyecto

\`\`\`
src/
├── components/
│   ├── Header.jsx          # Navbar con wallet connect
│   ├── Hero.jsx            # Sección principal con animaciones
│   ├── Features.jsx        # Beneficios de la plataforma
│   ├── ProjectsShowcase.jsx # Grid de proyectos
│   ├── HowItWorks.jsx      # Pasos del proceso
│   ├── Testimonials.jsx    # Testimonios de usuarios
│   ├── Footer.jsx          # Footer con newsletter
│   └── WalletConnect.jsx   # Componente de conexión wallet
├── pages/
│   ├── Home.jsx            # Página principal
│   ├── LaunchProject.jsx   # Formulario de creación
│   └── ProjectDetail.jsx   # Detalle e inversión
├── utils/
│   └── stellarService.js   # Funciones Stellar SDK
├── App.jsx                 # Router principal
├── main.jsx               # Entry point
└── index.css              # Estilos globales y tema
\`\`\`

## 🎨 Personalización

### Colores del Tema

Los colores se definen en `src/index.css` usando design tokens:

\`\`\`css
--color-background: 10 37 64;    /* Deep space blue */
--color-primary: 59 130 246;     /* Stellar blue */
--color-accent: 14 165 233;      /* Bright cyan */
\`\`\`

## 🚢 Deployment

### Build para Producción

\`\`\`bash
npm run build
\`\`\`

Los archivos optimizados estarán en `dist/`

### Deploy en Vercel

\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

### Deploy en Netlify

1. Conecta tu repositorio en Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## ⚠️ Notas Importantes

- **Testnet Only**: Esta aplicación usa Stellar Testnet. NO uses claves privadas de mainnet.
- **Freighter Required**: Los usuarios necesitan la extensión Freighter instalada.
- **Demo Purpose**: Los proyectos son ejemplos. En producción, necesitarías un backend para persistencia.

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🌟 Recursos

- [Stellar Documentation](https://developers.stellar.org/)
- [Freighter Wallet](https://www.freighter.app/)
- [Stellar Laboratory](https://laboratory.stellar.org/)
- [React Documentation](https://react.dev/)

---

Hecho con ❤️ para la comunidad de jóvenes innovadores Web3
