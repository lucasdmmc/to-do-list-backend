const { verify } = require("jsonwebtoken")
const authConfig = require("../configs/auth")

const ensureAuthenticated = (request, response, next) => {

  try {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
      throw new Error("JTW Token unauthorized")
    }
  
    const [, token] = authHeader.split(" ")

    const { sub: user_id } = verify(token, authConfig.jwt.secret)
    
    request.user = {
      id: Number(user_id),
    };

    return next();


  } catch (error) {
    response.status(401).json({ error: error.message })
  }
}

module.exports = ensureAuthenticated;