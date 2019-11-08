exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("contexts_tasks")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("contexts_tasks").insert([
          { context_id: 2, task_id: 1, note: "" },
          { context_id: 2, task_id: 3, note: "" },
          { context_id: 2, task_id: 3, note: "" },
          { context_id: 1, task_id: 6, note: "" },
          { context_id: 1, task_id: 8, note: "" },
          { context_id: 3, task_id: 4, note: "" },
          { context_id: 3, task_id: 7, note: "" }
        ]);
      });
  };