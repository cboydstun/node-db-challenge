const db = require("../../db/dbConfig");

const getProject = projectID => {
  return db
    .select(
      "p.id",
      "p.name",
      "p.description as project_description",
      "p.is_completed as project_completed",
      "t.id as task_id",
      "t.description as task_description",
      "t.note as task_note",
      "t.is_completed as task_completed"
    )
    .from("projects as p")
    .innerJoin("tasks as t", "t.project_id", "p.id")

    .where("p.id", projectID)
    .then(projects => {
      const tasks = projects.map(project => {
        return {
          id: project.task_id,
          description: project.task_description,
          notes: project.task_note,
          completed: project.task_completed === 1
        };
      });

      return {
        id: projects[0].id,
        name: projects[0].name,
        description: projects[0].project_description,
        completed: projects[0].is_completed === 1,
        tasks
      };
    });
};

module.exports = {
  getProject
};