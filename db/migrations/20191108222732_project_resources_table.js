exports.up = function(knex) {
    return knex.schema.createTable("projects_resources", table => {
      table.increments().primary();
      table.integer("project_id").unsigned();
      table.foreign("project_id").references("projects.id");
      table.integer("resource_id").unsigned();
      table.foreign("resource_id").references("resources.id");
      table.text("note");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects_resources");
  };