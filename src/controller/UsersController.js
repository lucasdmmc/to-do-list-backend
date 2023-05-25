const knex = require("../database/knex")
const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/appError");
class UsersController {
  async create(request, response) {
    try {
      const { name, email, password } = request.body;

      const userExists = await knex("users").where({ email }).first();
  
      if(userExists) {
        throw new AppError("This email is in use")
      }

      const hashedPassword = await hash(password, 8)

      const user = await knex("users").insert({
        name,
        email,
        password: hashedPassword
      }).returning(["name", "email", "password"])
  
  
      response.status(201).json({ user })
    } catch(error) {
      response.status(400).json({ error: error.message })
    }

  }
}

module.exports = UsersController;