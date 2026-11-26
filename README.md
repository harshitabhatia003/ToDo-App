
# ToDo App 

A full-stack ToDo application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). This app allows users to manage tasks efficiently with persistent storage and a responsive user interface.

## Features

* ✅ Create, update, and delete tasks
* 📁 Persistent data storage with MongoDB
* ⚡ RESTful API with Express.js & Node.js
* 💻 Responsive frontend built with React
* 🔐 Scalable structure suitable for deployment

## Tech Stack

* **Frontend:** React.js, HTML, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/harshitabhatia003/ToDo-App.git
   cd ToDo-App
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Configure environment variables in a `.env` file (e.g., MongoDB URI, port, etc.).

5. Run the backend:

   ```bash
   npm start
   ```

6. Run the frontend in a separate terminal:

   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | /api/todos      | Fetch all todos   |
| POST   | /api/todos      | Create a new todo |
| PUT    | /api/todos/\:id | Update a todo     |
| DELETE | /api/todos/\:id | Delete a todo     |

## License

This project is licensed under the MIT License.
