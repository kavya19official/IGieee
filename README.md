# 🎓 University Professional Society Platform

A scalable, role-based web application designed to manage and operate a university student professional society.

This platform enables structured event management, recruitment workflows, and operational dashboards for different user roles.

---

## 🚀 Features

### 🔐 Authentication
- Secure login system
- Role-based access control
- Automatic dashboard redirection

### 👩‍🎓 Student Dashboard
- Personalized dashboard
- Discover upcoming events
- Apply through recruitment portal
- View gallery and organization details

### 🧑‍💼 Organizer Dashboard
- Create and manage events
- Monitor recruitment applications
- Manage society operations

### 🛡 Admin Dashboard
- Full platform oversight
- Monitor user roles
- Administrative controls

### 🎉 Event Discovery
- Browse and explore events
- Structured event listings
- Easy access interface

### 📥 Recruitment Portal
- Application submission system
- Structured onboarding flow

### 🖼 Gallery
- Event highlights
- Media showcase
- Community engagement section

---

## 🛠 Tech Stack

- ⚛️ React
- 📘 TypeScript
- ⚡ Vite
- 🎨 Component-Based Architecture
- 📦 Modular File Structure

---

## 📂 Project Structure

```
.
├── App.tsx                 # Root application component
├── index.tsx               # Entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
├── metadata.json           # Project metadata
├── constants.ts            # Application constants
├── types.ts                # Type definitions
│
├── Login.tsx               # Authentication page
├── StudentDashboard.tsx    # Student interface
├── OrganizerDashboard.tsx  # Organizer interface
├── AdminDashboard.tsx      # Admin interface
├── EventDiscovery.tsx      # Event listing & discovery
├── RecruitmentPortal.tsx   # Recruitment workflow
├── Gallery.tsx             # Media & highlights
├── AboutSection.tsx        # About the organization
│
└── README.md
```

---

## 💻 Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

---

## 🚀 Run Development Server

```bash
npm run dev
```

Application runs locally at:

```
http://localhost:8080
```

---

## 🏗 Build for Production

```bash
npm run build
```

This generates optimized production files in the `dist/` folder.

---

## 🧠 Architecture Overview

The system follows a role-based modular architecture:

- `App.tsx` controls routing and role detection
- Dashboards are separated by responsibility
- Shared types are centralized in `types.ts`
- Constants stored in `constants.ts`
- Clean separation of UI and logic

This ensures:

- Scalability
- Maintainability
- Clear role boundaries
- Easy future backend integration

---

## 🔒 Role-Based Flow

```
Login → Role Identification → Redirect to:

    Student → StudentDashboard
    Organizer → OrganizerDashboard
    Admin → AdminDashboard
```

---

## 📈 Future Enhancements

- Backend API integration
- Database connectivity
- JWT authentication
- Role persistence
- Real-time event updates
- Analytics dashboard
- Deployment to production (Vercel / AWS)
- Mobile packaging via Capacitor

---

## 🎯 Use Case

Designed for:

- University student societies
- Technical chapters
- Professional campus organizations
- Recruitment-driven student bodies

---

## 👩‍💻 Author

Kavya Pandey  
Built as a structured university operations platform.

---

## 📜 License

This project is for educational and development purposes.
