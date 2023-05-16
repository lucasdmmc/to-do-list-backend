const knex = require("../database/knex")

class TasksController {
  async create(request, response) {
    try {
      const { description, finished } = request.body;
      const  user_id  = request.user.id;

      const existingTask = await knex("tasks").where({ description }).first();

      if (existingTask) {
        throw new Error("Task already exists.");
      }

      const [task] = await knex("tasks").insert({ 
        user_id,
        description, 
        finished
      });

      return response.status(201).json({ task });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async update(request, response) {
    try {
      const user_id = request.user.id;
      const { description, finished } = request.body;

      const existingTask = await knex("tasks").where({ user_id }).first();
      if (!existingTask) {
        throw new Error("Task not found.");
      }

      await knex("tasks").where({ user_id }).update({ description, finished });

      response.status(200).json({ description, finished });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      const existingTask = await knex("tasks").where({ id }).first();
      if (!existingTask) {
        throw new Error("Task not found.");
      }

      await knex("tasks").where({ id }).delete();

      return response.status(201).send({ message: "The Task was deleted" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async index(request, response) {
    try {
      const [tasks] = await knex("tasks").select();

      return response.status(200).json({ tasks });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

module.exports = TasksController;