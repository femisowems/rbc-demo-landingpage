# RBC Demo Landing Page

A modern, responsive landing page demo for RBC (Royal Bank of Canada), built with Angular 18 and Tailwind CSS. This project serves as a showcase for high-performance financial dashboard components and user authentication flows.

## 🚀 Key Features

### 🔐 Authentication Suite
Complete user journey pages including:
- **Login & Registration**: Secure entry and account creation flows.
- **Login with QR**: Modern QR-based authentication demo.
- **Forgot Password & Lock Screen**: Comprehensive security recovery states.
- **Logout**: Graceful session termination.

### 🧩 Interactive Components
- **Advanced Dashboard**: Real-time financial data visualization demos.
- **Dynamic Swiper**: Smooth, touch-enabled carousels for promotional content.
- **Smart FAQ**: Collapsible sections for quick information retrieval.
- **Back-to-Top**: Enhanced navigation for long-scrolling pages.
- **Top Navbar**: Responsive navigation with modern UI tokens.

## 🛠️ Tech Stack

- **Framework**: [Angular 18](https://angular.dev/) (with SSR Support)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Angular](https://lucide.dev/)
- **Animations**: [Swiper](https://swiperjs.com/)
- **Build Tool**: [Angular CLI](https://github.com/angular/angular-cli)
- **Server**: [Express](https://expressjs.com/) (Node.js)

## 📦 Project Structure

```text
src/app/
├── auth-pages/    # Login, Register, Forgot Password flows
├── components/    # Reusable UI elements (Navbar, Footer, FAQs)
├── common/        # Shared services and utilities
├── demos/         # Main landing page demo implementations
├── helper/        # Custom directives and helper functions
server.ts          # SSR Express Server Entry
```

## ⌨️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation
```bash
npm install
```

### Development Server (Client-side)
Run `npm run start` (or `ng serve`) for a dev server. Navigate to `http://localhost:4200/`.

> [!NOTE]
> If you see a `TS2307` error in an existing `ng serve` terminal after the upgrade, simply restart the process to pick up the new SSR dependencies.

### Server Side Rendering (SSR)
To build and run the SSR version:
```bash
# 1. Build both browser and server bundles
npm run build

# 2. Start the SSR server
npm run serve:ssr:rbc-insight-edge
```
Navigate to `http://localhost:4000/`.

### Build
Run `npm run build` (or `ng build`) to build the project. The build artifacts will be stored in the `dist/` directory.

## 🤝 Contribution

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Generated with ❤️ for RBC Demo Landing Page*
