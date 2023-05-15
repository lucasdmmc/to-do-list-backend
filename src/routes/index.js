const { Router } = require('express');

const taskRoutes = require("./task.routes")

const routes = Router();
routes.use("/task", taskRoutes)

module.exports = routes;