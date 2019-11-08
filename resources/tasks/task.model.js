const { Model } = require("objection");
const dbConfig = require("../../db/dbConfig");

Model.knex(dbConfig);

class Task extends Model {
  static get tableName() {
    return "tasks";
  }

  static get IdColumn() {
    return "id";
  }
}

module.exports = Task;