# MERN-Stack-Quiz-Project
Quiz Game Full MERN Stack Application

Table of Contents

Description

Features

Technologies Used

Installation

Usage


Contributing

License


Description

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) quiz application that allows users to take quizzes, track scores, and compete with others. It features authentication, a leaderboard, and dynamic quiz generation.


Features

User authentication (JWT-based login/signup)

Dynamic quiz generation with multiple categories and difficulty levels

Timed quizzes with score tracking

Leaderboard to display top scorers

RESTful API for quiz management

Responsive and interactive UI using React


Technologies Used

Frontend: React, Redux, React Router, Tailwind CSS

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT (JSON Web Tokens), bcrypt.js

Database: MongoDB Atlas (or local MongoDB)


Installation

Prerequisites

Node.js installed

MongoDB (local or Atlas setup)

Steps

Clone the repository:

git clone https://github.com/your-username/mern-quiz-app.git
cd mern-quiz-app

Install dependencies:

cd backend
npm install
cd ../frontend
npm install

Set up environment variables:
Create a .env file in the backend directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start the backend server:

cd backend
npm start

Start the frontend server:

cd frontend
npm start

Open the app in your browser at http://localhost:3000



Usage

Sign up or log in to access the quiz

Select a category and difficulty level

Answer questions within the time limit

View your score and compare with others on the leaderboard


Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Authenticate and return JWT

Quiz Management

GET /api/quizzes - Get available quizzes

POST /api/quizzes/start - Start a new quiz session

POST /api/quizzes/submit - Submit answers and get a score


Leaderboard

GET /api/leaderboard - Retrieve top scores


Contributing



Feel free to contribute by opening issues or submitting pull requests.


License

This project is licensed under the MIT License.
