const { Router } = require('express');

const todoRoutes = require("./todo.routes")

const routes = Router();
routes.use("/todo", todoRoutes)

module.exports = routes;