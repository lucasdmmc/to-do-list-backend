exports.up = knex => knex.schema.createTable("tasks", table => {
  table.increments("id");
  table.text("description").notNullable();
  table.boolean("finished");

  table.timestamp("created_at").default(knex.fn.now());

  table.integer("user_id").references("id").inTable("users");
});


exports.down = knex => knex.schema.dropTable("tasks")


