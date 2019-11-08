exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("projects_resources")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("projects_resources").insert([
          { project_id: 1, resource_id: 1, note: "" },
          { project_id: 1, resource_id: 2, note: "" },
          { project_id: 1, resource_id: 3, note: "" },
          { project_id: 2, resource_id: 2, note: "" },
          { project_id: 2, resource_id: 5, note: "" },
          { project_id: 3, resource_id: 6, note: "" },
          { project_id: 3, resource_id: 4, note: "" }
        ]);
      });
  };
  