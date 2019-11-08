const { Model } = require("objection");
const dbConfig = require("../../db/dbConfig");

Model.knex(dbConfig);

class Project extends Model {
  static get tableName() {
    return "projects";
  }

  static get IdColumn() {
    return "id";
  }

  static get relationMappings() {
    const Task = require("../tasks/task.model");
    const Resource = require("../resources/resource.model");
    return {
      tasks: {
        relation: Project.HasManyRelation,
        modelClass: Task,
        join: {
          from: "projects.id",
          to: "tasks.project_id"
        }
      },
      resources: {
        relation: Project.ManyToManyRelation,
        modelClass: Resource,
        join: {
          from: "projects.id",
          through: {
            from: "projects_resources.project_id",
            to: "projects_resources.resource_id"
          },
          to: "resources.id"
        }
      }
    };
  }
}

module.exports = Project;