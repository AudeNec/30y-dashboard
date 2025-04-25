# 🧭 30-Year Habit Tracker – Backend Project

This project was created during my time at [Wild Code School](https://www.wildcodeschool.com/) as part of a backend-focused module. I chose to build a personal habit tracking app to monitor key lifestyle activities—like exercise, nutrition, and well-being—throughout the year of my 30th birthday.

The project is built on a **custom JavaScript monorepo**, using the **React-Express-MySQL** stack, following the v7.1.7 architecture taught by the school.

---

## 📦 Tech Stack & Tooling

This monorepo comes pre-configured with modern tools to help write clean, scalable, and production-quality code, while staying accessible for learning purposes.

### Core Technologies

- **Frontend**: React + Vite  
- **Backend**: Node.js with Express  
- **Database**: MySQL  

### Development Tools

- **Vite** – Lightning-fast frontend development experience  
- **Concurrently** – Run multiple scripts (server & client) in one terminal  
- **Husky** – Git hooks for linting, pre-commits, etc.  
- **Biome** – All-in-one code formatter and linter (alternative to ESLint + Prettier)  
- **Supertest** – HTTP testing for Node.js APIs  

---

## 📁 Monorepo Structure
```
├── client       # React frontend
├── server       # Express backend
├── bin          # Utility scripts (e.g., clean)
├── .gitignore
├── package.json # Workspace management
```

---

## 🚀 Getting Started

### 1. Clone the repo
### 2. Install dependencies
npm install
### 3. Set up environment variables
Create a .env file in both the server/ and client/ directories.
## 🛠️ Available Scripts

The following scripts are available from the root directory using `npm run <script>`:

| Script           | Description                                              |
|------------------|----------------------------------------------------------|
| `dev`            | Starts both client and server using `concurrently`       |
| `dev:client`     | Starts only the React frontend                           |
| `dev:server`     | Starts only the Express backend                          |
| `build`          | Builds all workspaces (if present)                       |
| `check`          | Runs Biome and type checks across the monorepo           |
| `clean`          | Runs cleanup script from `./bin/clean`                   |
| `db:migrate`     | Runs DB migrations (backend only)                        |
| `db:seed`        | Seeds the database with initial data (backend only)      |
| `test`           | Runs tests across all workspaces                         |
| `start`          | Starts the backend server                                |
| `prepare`        | Prepares Git hooks with Husky                            |
