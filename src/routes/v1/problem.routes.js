const problemRouter = require('express').Router();
const { ProblemController } = require('../../controllers/index');
//Add Problem Route
problemRouter.post('/', ProblemController.addProblem);
//Get All Problems Route
problemRouter.get('/', ProblemController.getProblems);
//Get Problem Route By Id
problemRouter.get('/:id', ProblemController.getProblem);
//Delete Problem Route By Id
problemRouter.delete('/:id', ProblemController.deleteProblem);
module.exports = problemRouter;
