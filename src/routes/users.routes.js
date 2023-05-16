const { Router } = require("express")
const UsersController = require("../controller/UsersController")
const usersController = new UsersController()

const userRoutes = Router()

userRoutes.post("/", usersController.create)
// userRoutes.get("/", userController.index)
// userRoutes.delete("/:id", userController.delete)
// userRoutes.put("/:id/edit", userController.update)

module.exports = userRoutes;