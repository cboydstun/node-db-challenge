exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("projects")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("projects").insert([
          {
            name: "prepare quarterly taxes",
            description: "business bookkeeping",
            is_completed: 0
          },
          {
            name: "plan a family vacation",
            description: "celebrating anniversary",
            is_completed: 0
          },
          {
            name: "build a garden storage space",
            description: "tools container",
            is_completed: 0
          }
        ]);
      });
  };