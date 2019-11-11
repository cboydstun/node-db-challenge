exports.up = function(knex) {
    return knex.schema
    .createTable('projects', t =>{
        t.increments();
        t.string('name', 255).notNullable();
        t.string('description', 255);
        t.boolean('completed')
        .notNullable()
        .defaultTo(0);
    })

    .createTable('tasks', t =>{
        t.increments();
        t.string('description', 255).notNullable();
        t.string('notes', 255);
        t.boolean('completed')
        .notNullable()
        .defaultTo(0)
        t.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .createTable('resources', t =>{
        t.increments();

        t.string('name', 255).notNullable();
        t.string('description', 255)
    })
    .createTable('projects_resources', t =>{
        t.increments();

        t.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');


        t.integer('resource_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};