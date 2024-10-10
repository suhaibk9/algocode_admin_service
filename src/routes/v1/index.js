const express = require('express');
const problemRouter = express.Router();
problemRouter.use('/problems', require('./problem.routes'));
module.exports = problemRouter;