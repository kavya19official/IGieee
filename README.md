# 📱 IEEE IGDTUW Mobile App

A role-based mobile application built for managing and operating a university student professional society.

This app enables structured event management, recruitment workflows, and operational dashboards for Students, Organizers, and Admins — packaged as a native iOS app using Capacitor.

---

## 🚀 Overview

This is a mobile-first application built with:

- ⚛️ React
- 📘 TypeScript
- ⚡ Vite
- 📱 Capacitor (iOS Native Wrapper)

The app runs as a web application in development and as a native iOS app through Capacitor.

---

## 🎯 Core Features

### 🔐 Authentication
- Login system
- Role-based redirection
- Structured access control

### 👩‍🎓 Student Features
- Personalized dashboard
- Discover upcoming events
- Apply via recruitment portal
- View gallery and organization details

### 🧑‍💼 Organizer Features
- Create and manage events
- Track recruitment applications
- Manage society operations

### 🛡 Admin Features
- Full system oversight
- Administrative monitoring
- Role-level management

### 🎉 Event Discovery
- Explore upcoming and past events
- Organized event listings

### 📥 Recruitment Portal
- Structured onboarding system
- Application submission flow

### 🖼 Gallery
- Event highlights
- Community media section

---

## 🛠 Tech Stack

Frontend:
- React
- TypeScript
- Vite

Mobile:
- Capacitor (iOS)

Architecture:
- Role-based component structure
- Modular TypeScript types
- Centralized constants

---

## 📂 Project Structure

```
.
├── App.tsx
├── index.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── metadata.json
├── constants.ts
├── types.ts
│
├── Login.tsx
├── StudentDashboard.tsx
├── OrganizerDashboard.tsx
├── AdminDashboard.tsx
├── EventDiscovery.tsx
├── RecruitmentPortal.tsx
├── Gallery.tsx
├── AboutSection.tsx
│
├── ios/                # Native iOS project (Capacitor)
└── README.md
```

---

## 💻 Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

---

## 🚀 Run in Web Development Mode

```bash
npm run dev
```

Runs locally at:

```
http://localhost:8080
```

---

## 📱 Run as iOS App

### 1️⃣ Build frontend

```bash
npm run build
```

### 2️⃣ Sync with Capacitor

```bash
npx cap sync ios
```

### 3️⃣ Open in Xcode

```bash
npx cap open ios
```

### 4️⃣ Run from Xcode

- Product → Clean Build Folder
- Cmd + R

---

## ⚠️ Important Configuration

In `vite.config.ts`, ensure:

```ts
base: "./"
```

This is required for proper asset loading inside Capacitor.

---

## 🔄 Development Workflow

Whenever frontend changes are made:

```bash
npm run build
npx cap sync ios
```

Then run again from Xcode.

---

## 🧠 App Architecture

The system follows a role-based navigation model:

```
Login → Role Detection → Redirect to:

    Student → StudentDashboard
    Organizer → OrganizerDashboard
    Admin → AdminDashboard
```

Designed for scalability and future backend integration.

---

## 📈 Future Improvements

- Backend API integration
- Database connectivity
- Secure JWT authentication
- Push notifications
- Real-time updates
- App Store deployment
- Android support

---

## 👩‍💻 Author

Kavya Pandey  
Mobile App Developer

---

## 📜 License

This project is built for academic and development purposes.
