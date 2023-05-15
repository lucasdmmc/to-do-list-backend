const knex = require("../database/knex")

class TodoController {
  async create(request, response) {
    const { id, description, finished } = request.body;

    const todo = await knex("todo").insert({
      id,
      description,
      finished,
    }).returning(["id", "description", "finished"])

    return response.status(201).json({ todo })
  }

  async update(request, response) {
    const { id } = request.params;
    const { description, finished } = request.body;

    await knex("todo").where({ id }).update({ description, finished })

    response.status(200).json({ description, finished })
  }

  async delete(request, response) {
    const { id } = request.params;
    await knex("todo").where({ id }).delete()
    return response.status(201).send({ message: "The todo was deleted" })
  }

  async index(request, response) {
    const setTodos = await knex("todo").select()

    return response.status(200).json({ setTodos })
  }
}

module.exports = TodoController;