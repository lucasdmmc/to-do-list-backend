const { Router } = require("express")

const TaskController = require("../controller/TaskController")
const taskController = new TaskController()

const taskRoutes = Router()

taskRoutes.get("/", taskController.index)
taskRoutes.post("/new", taskController.create)
taskRoutes.delete("/:id", taskController.delete)
taskRoutes.put("/:id/edit", taskController.update)

module.exports = taskRoutes;