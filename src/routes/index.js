const { Router } = require('express');

const userRoutes = require("./users.routes")
const tasksRoutes = require("./tasks.routes")
const sessionsRoutes = require("./sessions.routes")


const routes = Router();
routes.use("/users", userRoutes);
routes.use("/task", tasksRoutes)
routes.use("/sessions", sessionsRoutes);

module.exports = routes;