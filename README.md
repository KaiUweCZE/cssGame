# CSS Play 🎮

## Overview

_CSS Play_ is an interactive learning platform that makes CSS accessible and fun through gamification. Users can progress through carefully designed levels, challenge themselves with community-created content, or unleash their creativity by designing their own levels.

🎯 **[Try it live](https://play-css.netlify.app)** (Launch: 20.4.2024)

## ✨ Features

- 🎓 **Progressive Learning Path**

  - Carefully designed levels with increasing difficulty
  - Unlock new learning materials and tools after each completion
  - Real-time feedback on your CSS solutions

- 🎨 **Level Creation**

  - Design and share your own CSS challenges
  - Test other users' creative levels

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account (free tier is sufficient)

### Environment Setup

1. **Backend Configuration**

   ```bash
   cd backend/
   cp .env.example .env
   # Fill in your environment variables in .env
   ```

   Required environment variables:

   - `MONGO_URI`: MongoDB Atlas connection string (create a free cluster at mongodb.com/atlas)
   - `PORT`: Server port (default: 3000)
   - `JWT_SECRET`: Secret for JWT authentication
   - `RESEND_API_KEY`: API key for email services

2. **Frontend Configuration**
   ```bash
   cd frontend/
   cp .env.example .env
   # Fill in your environment variables in .env
   ```
   Required environment variables:
   - `CLOUDINARY_URL`: For image uploads
   - `CLOUDINARY_API_KEY`: Cloudinary API key

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/KaiUweCZE/cssGame.git
   cd cssGame
   ```

2. **Backend Setup**

   ```bash
   cd backend/
   npm install
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd frontend/
   npm install
   npm start
   ```

## 🛠️ Tech Stack

- **Frontend**:

  - React.js
  - SCSS/CSS Modules
  - Cloudinary (image handling)

- **Backend**:
  - Node.js
  - Express
  - MongoDB Atlas
  - JWT Authentication

## 🤝 Contact

Have questions? Feel free to reach out!
