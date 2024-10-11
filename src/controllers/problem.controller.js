const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/NotImplementedError');
const { ProblemService } = require('../services/index');
const { ProblemRepository } = require('../repositories/index');
const problemService = new ProblemService(new ProblemRepository());
const addProblem = async (req, res, next) => {
  try {
    const problem = req.body;
    const newProblem = await problemService.createProblem(problem);
    return res.status(StatusCodes.CREATED).json(newProblem);
  } catch (error) {
    next(error);
  }
};
const getProblems = (req, res) => {
  return res.status(StatusCodes.NOT_IMPLEMENTED).send('Not implemented');
};
const getProblem = (req, res) => {
  return res.status(StatusCodes.NOT_IMPLEMENTED).send('Not implemented');
};
const updateProblem = (req, res) => {
  return res.status(StatusCodes.NOT_IMPLEMENTED).send('Not implemented');
};
const deleteProblem = (req, res) => {
  return res.status(StatusCodes.NOT_IMPLEMENTED).send('Not implemented');
};
module.exports = {
  addProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem,
};
