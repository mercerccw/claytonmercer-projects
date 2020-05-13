const express = require('express');
const ProjectController = require('../controllers/projectController.js');
const router = express.Router();
// router.get('/getAllProjects', (req, res) => {
//     res.send('Got them!');
// });
router.get('/getAllProjects', (req, res) => {
    ProjectController.getAllProjects(req, res);
});
router.get('/getProject/:id', (req, res) => {
    ProjectController.getSingleProject(req, res);
});
module.exports = router;