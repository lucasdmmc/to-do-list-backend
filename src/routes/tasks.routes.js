const { Router } = require("express")

const TasksController = require("../controller/TasksController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tasksController = new TasksController()

const tasksRoutes = Router()

tasksRoutes.use(ensureAuthenticated)

tasksRoutes.get("/", tasksController.index)
tasksRoutes.post("/", tasksController.create)
tasksRoutes.delete("/:id", tasksController.delete)
tasksRoutes.put("/:id", tasksController.update)

module.exports = tasksRoutes;