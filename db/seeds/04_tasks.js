exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("tasks")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("tasks").insert([
          {
            project_id: 1,
            description: "collect financial record",
            note: "",
            is_completed: 1
          },
          {
            project_id: 1,
            description: "research new tax laws",
            note: "",
            is_completed: 0
          },
          {
            project_id: 1,
            description: "data enter",
            note: "",
            is_completed: 0
          },
          {
            project_id: 2,
            description: "decide travel destination",
            note: "",
            is_completed: 0
          },
          {
            project_id: 2,
            description: "call travel agent",
            note: "",
            is_completed: 0
          },
          {
            project_id: 2,
            description: "read chosen destination book",
            note: "",
            is_completed: 0
          },
          {
            project_id: 2,
            description: "preview the destination via Youtube",
            note: "",
            is_completed: 0
          },
          {
            project_id: 3,
            description: "make a drawing",
            note: "",
            is_completed: 0
          },
          {
            project_id: 3,
            description: "visit a home improvement store",
            note: "",
            is_completed: 0
          },
          {
            project_id: 3,
            description: "prepare a electric wood saw",
            note: "",
            is_completed: 0
          },
          {
            project_id: 3,
            description: "search for a paint color",
            note: "",
            is_completed: 0
          }
        ]);
      });
  };