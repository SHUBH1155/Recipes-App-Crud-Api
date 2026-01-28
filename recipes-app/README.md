$ -- Recipes App – Node.js & MongoDB CRUD API

This is a simple Recipes Management REST API built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
The application follows the **MVC architecture** and supports full CRUD operations.

---

$ -- Features

- Create a new recipe
- Get all recipes
- Get a recipe by ID
- Update a recipe
- Delete a recipe
- API documentation using Postman

---

$ -- Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- dotenv

---

$ -- API Endpoints

1. Create Recipe
** POST **
{
  "title": "Tea",
  "ingredients": ["Water", "Tea leaves", "Sugar"],
  "instructions": "Boil water and add tea leaves",
  "cookingTime": 5
}

Get All Recipes

2 -- GET

/api/recipes

3 -- Get Recipe By ID

GET

/api/recipes/:id

4 -- Update Recipe

PUT

/api/recipes/:id

5 -- Delete Recipe

DELETE

/api/recipes/:id

$ -- API Documentation

All API endpoints are documented using Postman.

Status

Project completed with all CRUD operations working successfully.


