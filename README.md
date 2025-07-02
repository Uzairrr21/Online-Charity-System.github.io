
# 🌐 Online Charity System (MERN Stack)

A simple and functional online platform that allows users to create and track charity campaigns. The application is built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and includes only 5 key forms for simplicity and clarity. All data is stored securely in a MongoDB database.

---

## 🧩 Core Features

-  **Login** – Secure login for users
-  **Register** – Create a new account
-  **Create Campaign** – Form to add a new charity campaign
-  **Feedback** – Users can submit suggestions or complaints
-  **Track Fund** – Monitor and display donation/fund progress

> ✅ All data is stored and fetched from MongoDB using a REST API.

---

## 🛠️ Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Frontend  | React.js + Vite      |
| Backend   | Node.js + Express.js |
| Database  | MongoDB              |
| Styling   | Tailwind CSS / CSS   |
| Package Manager | npm           |

---

## 📁 Project Folder Structure

```
Online-Charity-System/
│
├── Backend/
│   ├── models/             # Mongoose models
│   ├── node_modules/       # Backend dependencies
│   ├── app.js              # Express app setup
│   ├── index.js            # Backend entry point
│   ├── package.json        # Backend package config
│   ├── package-lock.json
│   └── vite.config.js
│
├── Frontend/
│   ├── node_modules/       # Frontend dependencies
│   ├── public/             # Public assets
│   ├── src/                # React components/pages
│   ├── package.json        # Frontend package config
│   ├── package-lock.json
│   ├── index.html
│   ├── vite.config.js
│   └── eslint.config.js
│
├── .gitignore
├── README.md
```

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Uzairrr21/Online-Charity-System.github.io.git
cd Online-Charity-System.github.io
```

### 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../Frontend
npm install
```

### 4. Create a `.env` File for Backend

Inside the `Backend/` folder, create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string (e.g., from MongoDB Atlas).

---

## ▶️ Running the App

### Start Backend (API Server)

```bash
cd Backend
npm start
```

### Start Frontend (React App)

Open a new terminal:

```bash
cd Frontend
npm run dev
```

Frontend: [http://localhost:5173](http://localhost:5173)  
Backend API: [http://localhost:5000](http://localhost:5000)

---

##  Available Pages/Routes

- `/login` – User login
- `/register` – User registration
- `/create-campaign` – Create charity campaigns
- `/feedback` – Send user feedback
- `/track-fund` – Track fundraising campaign progress

---

##  Contributing

Contributions are welcome!

1. Fork this repository
2. Create a new branch 
3. Commit your changes
4. Open a Pull Request

---

##  Author

**Uzair Moazzam**  
 GitHub: [@Uzairrr21](https://github.com/Uzairrr21)

---

> 📌 This project is built for educational and learning purposes only.

