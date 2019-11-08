const router = require("express").Router();
const projectController = require("../resources/projects/project.controller");

router.route("/projects/:id").get(projectController.getProjectById);

module.exports = router;