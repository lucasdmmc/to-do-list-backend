exports.up = knex => knex.schema.createTable("task", table => {
  table.increments("id").primary();
  table.text("description").notNullable();
  table.boolean("finished")
});


exports.down = knex => knex.schema.dropTable("task")
