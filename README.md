# BlogiFy 📝

**BlogiFy** is a modern, responsive, and feature-rich blogging platform built using **Node.js, Express, and MongoDB**.  
It allows users to easily create, manage, and publish their own blog posts with a clean and user-friendly interface.

---

## 🚀 Features

### 🔐 User Authentication
- Secure **Sign Up and Sign In**
- Authentication using **JSON Web Tokens (JWT)**
- Cookie-based session handling

### 📝 Blog Management
Users can perform full **CRUD operations** on blogs:
- Create blog posts
- Read blog posts
- Update blog posts
- Delete blog posts

### 👤 Profile Management
- Personalized user profiles
- Profile image upload support

### 🎨 Responsive UI
- Modern UI built with **Tailwind CSS**
- Fully responsive and mobile-friendly design

### 🛡️ Secure Routing
- Protected routes using custom **authentication middleware**
- Ensures secure access to user data and blog management

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| EJS | Templating engine |
| Tailwind CSS | Styling |
| JSON Web Tokens (JWT) | Authentication |
| Cookie Parser | Cookie handling |
| Multer | File uploads |

---

## 📦 Prerequisites

Make sure the following are installed on your system:

- **Node.js (LTS Version)**
- **MongoDB**
  - Local MongoDB installation  
  or  
  - MongoDB compass connection string

---
## 3️ Setup Environment Variables

Create a `.env` file in the root folder.

```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---
⭐ If you like this project, please **give it a star on GitHub!**
