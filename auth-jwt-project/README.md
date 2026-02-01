$ ---  User Authentication and Authorization API (JWT)

$ --- Project Description

This is a Node.js REST API for User Authentication and Authorization using JSON Web Tokens (JWT).  
The project is built using Express.js and MongoDB (Mongoose) following the MVC architecture.

It allows users to:
- Register an account
- Login with email and password
- Receive a JWT token
- Access protected routes using Bearer Token authentication
- Fetch authenticated user profile

---

$ --= Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcryptjs
- Postman (for API testing)

Authentication Flow

1. User registers using `/api/auth/register`
2. Password is hashed using bcrypt
3. JWT token is generated on successful registration/login
4. Token is sent to client
5. Client sends token in Authorization header
6. Protected routes verify token using middleware
7. User data is attached to `req.user`

Features Implemented --- 

User Registration

User Login

Password Hashing

JWT Token Generation

Protected Routes

User Profile Fetch

MVC Architecture

Error Handling & Validation