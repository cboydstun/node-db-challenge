exports.up = function(knex) {
    return knex.schema.createTable("tasks", table => {
      table.increments().primary();
      table.integer("project_id").unsigned();
      table.foreign("project_id").references("projects.id");
      table.text("description").notNullable();
      table.text("note");
      table
        .integer("is_completed")
        .notNullable()
        .defaultTo(0);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks");
  };