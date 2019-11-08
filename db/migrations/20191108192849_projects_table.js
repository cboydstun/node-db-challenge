exports.up = function(knex) {
    return knex.schema.createTable("projects", table => {
        table.increments().primary();
        table.text("name").notNullable();
        table.text("description");
        table.integer("is_completed").defaultTo(0);
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects")
  };