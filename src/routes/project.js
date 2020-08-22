const express = require("express");
const ProjectController = require("../controllers/projectController.js");
const router = express.Router();

router.get("/", (req, res) => {
  ProjectController.getAllProjects(req, res);
});
router.get("/:id", (req, res) => {
  ProjectController.getSingleProject(req, res);
});
module.exports = router;
