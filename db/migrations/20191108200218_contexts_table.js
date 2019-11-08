exports.up = function(knex) {
    return knex.schema.createTable("contexts", table => {
      table.increments().primary();
      table.text("name").notNullable();
      table.text("note");
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("contexts");
  }