const express = require("express");
const serverless = require("serverless-http");
const projectRouter = require("./src/routes/project.js");
const isProduction = true;
// Instantiate express
const app = express();
// Set our port
const port = process.env.PORT || 8000;
// Register our routes in app
app.use("/projects", projectRouter);
app.get("/", function (req, res) {
  res.send("Clayton Mercer Projects!");
});
// uncomment for serverless lambda
if (isProduction) {
  module.exports.handler = serverless(app);
  module.exports.app = app;
  module.exports.isProduction = isProduction;
} else {
  module.exports.app = app;
  module.exports.isProduction = isProduction;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}
