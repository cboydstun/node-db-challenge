exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("resources")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("resources").insert([
          {
            name: "pen & paper",
            description: "for writing a plan"
          },
          {
            name: "computer",
            description: "for only works"
          },
          {
            name: "an accountant",
            description: "professional helps"
          },
          {
            name: "library",
            description: "for borrowing learning materials"
          },
          {
            name: "online booking sites",
            description: "travel booking"
          },
          {
            name: "home improvement stores",
            description: "supplies"
          },
          {
            name: "neighborhood handyman",
            description: "extra pair of hands"
          },
          {
            name: "mobile phone",
            description: "convenience lookup tool"
          }
        ]);
      });
  };