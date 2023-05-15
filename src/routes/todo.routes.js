const { Router } = require("express")

const TodoController = require("../controller/TodoController")
const todoController = new TodoController()

const todoRoutes = Router()

todoRoutes.get("/", todoController.index)
todoRoutes.post("/new", todoController.create)
todoRoutes.delete("/:id", todoController.delete)
todoRoutes.put("/:id/edit", todoController.update)

module.exports = todoRoutes;