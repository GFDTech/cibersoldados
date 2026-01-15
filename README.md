# Cibersoldados

Aplicación web MVP con frontend en React y backend en NestJS para enrolamiento, reputación y vitrina de talento.

## Estructura

- `frontend`: interfaz React (Vite).
- `backend`: API NestJS con endpoints de configuración, enrolamientos y logros.

## Backend

```bash
cd backend
npm install
npm run start:dev
```

API base: `http://localhost:3000/api`

Endpoints principales:

- `GET /api/config`
- `POST /api/enrollments`
- `POST /api/achievements`
- `GET /api/profile/:alias`

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Abrir `http://localhost:5173`.
