# Workout Buddy

Workout Buddy is a full-stack workout tracking application. It lets users record exercises, view their workout history, and remove workouts they no longer need.

## Features

- View saved workouts, ordered from newest to oldest.
- Add a workout with an exercise title, weight/load (kg), and number of reps.
- Delete a workout.
- See when each workout was created (displayed as a relative time).
- Store workout data in MongoDB.

## Tech Stack

**Frontend**
- React
- React Router
- React Context API and `useReducer` for shared state
- `date-fns` for relative date formatting

**Backend**
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Project Structure

```text
Workout-Buddy/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── WorkoutDetails.jsx
│   │   │   └── WorkoutForm.jsx
│   │   ├── context/
│   │   │   └── WorkoutContext.jsx
│   │   ├── hooks/
│   │   │   └── useWorkoutsContext.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── index.jsx
│   └── package.json
│
└── backend/
    ├── controllers/
    │   └── workoutController.js
    ├── models/
    │   └── workoutModle.js
    ├── routes/
    │   └── workouts.js
    ├── server.js
    └── package.json
```

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- A MongoDB database, either a local MongoDB server or a MongoDB Atlas cluster
- Git (optional, for cloning the repository)

## Getting Started

### 1. Get the project

Clone the repository, or download and extract the project files.

```bash
git clone <your-repository-url>
cd <project-folder>
```

The project has separate frontend and backend applications. Install dependencies in both folders.

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection URI. For MongoDB Atlas, use the connection string from your cluster and make sure your database user and network access are configured.

Do not commit the `.env` file or share database credentials publicly.

### 3. Start the backend

From the `backend` directory, run:

```bash
npm run dev
```

The backend uses nodemon for development. It connects to MongoDB and then starts the Express server on the port configured in `.env` (4000 in the example above).

For a normal start, use:

```bash
npm start
```

### 4. Configure and start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm start
```

The React development server starts at:

```text
http://localhost:3000
```

The frontend's development proxy forwards `/api` requests to `http://localhost:4000`, so keep the backend running on port 4000 unless you also update the proxy in `frontend/package.json`.

## API Endpoints

The backend exposes the following REST API under `/api/workouts`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/workouts` | Retrieve all workouts |
| GET | `/api/workouts/:id` | Retrieve one workout by ID |
| POST | `/api/workouts` | Create a workout |
| DELETE | `/api/workouts/:id` | Delete a workout by ID |
| PATCH | `/api/workouts/:id` | Update a workout by ID |

### Workout data

A workout contains:

| Field | Type | Description |
|---|---|---|
| `title` | String | Exercise name/title |
| `load` | Number | Weight or load in kilograms |
| `reps` | Number | Number of repetitions |
| `createdAt` | Date | Automatically generated creation timestamp |
| `updatedAt` | Date | Automatically generated update timestamp |

Example request body for `POST /api/workouts`:

```json
{
  "title": "Bench Press",
  "load": 40,
  "reps": 10
}
```

## Available Scripts

### Frontend (`frontend/`)

| Command | Description |
|---|---|
| `npm start` | Start the React development server |
| `npm run build` | Create a production build |
| `npm test` | Run the test suite |

### Backend (`backend/`)

| Command | Description |
|---|---|
| `npm run dev` | Start the backend with nodemon |
| `npm start` | Start the backend with Node.js |

## Troubleshooting

- **MongoDB authentication failed:** Check `MONGO_URI`, the database username/password, and the Atlas network access rules.
- **Frontend cannot reach the API:** Confirm the backend is running on port `4000` and that the frontend proxy points to `http://localhost:4000`.
- **No workouts appear:** Confirm the database connection is successful and that workout records exist in the connected database.
- **Missing dependencies:** Run `npm install` separately inside both `frontend` and `backend`.

## Future Improvements

- Add workout editing to the frontend.
- Add stronger form validation and clearer loading/error states.
- Add user authentication and personal workout histories.
- Add filtering, sorting, and workout statistics.
- Add automated backend and frontend tests.

## License

No license has been specified for this project.
