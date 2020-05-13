const projects = require('../models/project.js');
class ProjectController {
    // Get all projects
    static getAllProjects(req, res) {
          return res.status(200).json({
                projects,
                message: "Got all projects",
          });
    }
    // Get a single project
    static getSingleProject(req, res) {
           const findProject = projects.find(project => project.id === parseInt(req.params.id, 10));
           if (findProject) {
               return res.status(200).json({
                     project: findProject,
                     message: "Got a single project record",
               });
           }
           return res.status(404).json({
                 message: "Project record not found",
           });
    }
}
module.exports = ProjectController;