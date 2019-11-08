const { Model } = require("objection");
const dbConfig = require("../../db/dbConfig");

Model.knex(dbConfig);

class Resource extends Model {
  static get tableName() {
    return "resources";
  }

  static get IdColumn() {
    return "id";
  }
}

module.exports = Resource;