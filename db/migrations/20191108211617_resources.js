exports.up = function(knex) {
    return knex.schema.createTable("resources", table => {
      table.increments().primary();
      table.text("name").notNullable();
      table.text("description");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resources");
  };