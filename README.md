# Fathom Marine Consultants

This project is a full-stack web application for marine dashboard management.
# LIVE LINK ===>>  https://fathomarine-assignment.vercel.app/

## Frontend

The frontend is built with:

- **React 19**: For building user interfaces.
- **Vite**: For fast development and build tooling.
- **React Router DOM**: For client-side routing.
- **Tailwind CSS**: For utility-first CSS styling.
- **Axios**: For HTTP requests to the backend.
- **ESLint**: For code linting and quality.
- **Context API**: For authentication state management.

### Main Features

- **Authentication**: Signup and login with JWT-based authentication.
- **Dashboard**: Displays user info, dummy metrics, and marine port data.
- **Sidebar Navigation**: Quick links to dashboard sections.
- **Marine Data Table**: Searchable and paginated list of major world ports.
- **Responsive Design**: Looks good on desktop and mobile.

### Folder Structure

```
frontend/
  ├── public/
  ├── src/
  │   ├── App.jsx
  │   ├── AuthContext.jsx
  │   ├── Dashboard.jsx
  │   ├── DummyCards.jsx
  │   ├── Login.jsx
  │   ├── Signup.jsx
  │   ├── Sidebar.jsx
  │   ├── WelcomeCard.jsx
  │   ├── MarineData.jsx
  │   └── ...
  ├── index.html
  ├── package.json
  ├── vite.config.js
  └── ...
```

### How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Linting

Run ESLint to check code quality:
```sh
npm run lint
```

---

See [frontend/package.json](frontend/package.json) for all dependencies and scripts.

