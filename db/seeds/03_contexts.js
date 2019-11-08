exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("contexts")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("contexts").insert([
          { name: "home improvement", note: "" },
          { name: "work at a computer", note: "" },
          { name: "improve family relationship", note: "" }
        ]);
      });
  };