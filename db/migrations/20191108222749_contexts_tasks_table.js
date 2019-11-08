exports.up = function(knex) {
    return knex.schema.createTable("contexts_tasks", table => {
      table.increments().primary();
      table.integer("context_id").unsigned();
      table.foreign("context_id").references("contexts.id");
      table.integer("task_id").unsigned();
      table.foreign("task_id").references("tasks.id");
      table.text("note");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("contexts_tasks");
  };