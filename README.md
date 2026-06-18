<div align="center">

# 🚀 Blog API

### A Full-Featured REST API for Blogging Platform

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/JWT-Authentication-blue)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Upload-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

Built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **JWT Authentication**.

</div>

---

# ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes

### 📝 Blog Management

- Create Blog
- Read Blog
- Update Blog
- Delete Blog

### 🔎 Advanced Features

- Search Blogs
- Pagination
- Author Population
- Validation Middleware
- Global Error Handling

### ☁️ Media Upload

- Multer Integration
- Cloudinary Image Upload
- Blog Cover Images

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| Express.js | Backend Framework |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| Multer | File Upload |
| Cloudinary | Image Storage |
| Express Validator | Validation |

---

# 📂 Project Structure

```text
src/
│
├── config/
│   ├── db.js
│   └── cloudinary.js
│
├── controllers/
│   ├── authcontroller.js
│   ├── blogcontroller.js
│   └── uploadcontroller.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   ├── uploadMiddleware.js
│   └── validationMiddleware.js
│
├── model/
│   ├── User.js
│   └── Blog.js
│
├── routes/
│   ├── authRoutes.js
│   ├── blogRoutes.js
│   └── uploadRoutes.js
│
├── utils/
│   ├── apiError.js
│   └── generateToken.js
│
└── validation/
    ├── authValidation.js
    └── blogValidation.js
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/blog-api.git
cd blog-api
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Start Development Server

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:5000
```

---

# 🔗 API Endpoints

## Authentication

### Register

```http
POST /api/auth/register
```

```json
{
  "username": "abhinav",
  "email": "abhinav@example.com",
  "password": "password123"
}
```

---

### Login

```http
POST /api/auth/login
```

```json
{
  "email": "abhinav@example.com",
  "password": "password123"
}
```

---

### Profile

```http
GET /api/auth/profile
```

Requires JWT Token.

---

# 📝 Blog Routes

### Create Blog

```http
POST /api/blogs
```

```json
{
  "title": "Node.js Guide",
  "content": "Learning backend development..."
}
```

---

### Get All Blogs

```http
GET /api/blogs
```

---

### Pagination

```http
GET /api/blogs?page=1&limit=10
```

---

### Search

```http
GET /api/blogs?search=node
```

---

### Get Blog By ID

```http
GET /api/blogs/:id
```

---

### Update Blog

```http
PUT /api/blogs/:id
```

---

### Delete Blog

```http
DELETE /api/blogs/:id
```

---

# ☁️ Image Upload

### Upload Image

```http
POST /api/upload
```

Body:

```text
form-data
image -> File
```

Returns:

```json
{
  "success": true,
  "imageUrl": "https://res.cloudinary.com/..."
}
```

---

# 📊 Example Response

```json
{
  "success": true,
  "blog": {
    "_id": "685...",
    "title": "Node.js Guide",
    "content": "Learning backend...",
    "author": {
      "username": "abhinav",
      "email": "abhinav@example.com"
    }
  }
}
```

---

# 🛡️ Error Handling

Example:

```json
{
  "success": false,
  "message": "Blog not found"
}
```

---

# 🚀 Future Improvements

- ❤️ Likes System
- 💬 Comments
- 🏷️ Categories
- 👑 Role Based Access
- 🔄 Refresh Tokens
- 📚 Swagger Documentation
- 🐳 Docker Support
- ☁️ AWS Deployment

---

# 👨‍💻 Author

### Abhinav Anil

Backend Developer | DSA Enthusiast | Machine Learning Learner

---

<div align="center">

⭐ Star the repository if you found it useful!

</div>