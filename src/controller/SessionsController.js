const knex = require("../database/knex")
const { compare } = require("bcryptjs")
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")
const AppError = require("../utils/appError")
class SessionControler {
  async create(request, response) {
    try {
      const { email, password } = request.body
      
      const user = await knex("users").where({ email }).first();
      console.log(user)

      if(!user) {
        throw new AppError("E-mail/password is not available")
      }

      const passwordMatched = await compare(password, user.password)

      if (!passwordMatched) {
        throw new AppError("E-mail/password is not available")
      }

      const { secret, expiresIn } = authConfig.jwt;
      const token = sign({}, secret, {
        subject: String(user.id),
        expiresIn
      })
      return response.status(201).json({ user, token })
    } catch (error) {
      return response.status(401).json({ error: error.message })

    }

  }
}

module.exports = SessionControler;