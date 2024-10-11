const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/NotImplementedError');
const { ProblemService } = require('../services/index');
const { ProblemRepository } = require('../repositories/index');
const problemService = new ProblemService(new ProblemRepository());
const addProblem = async (req, res, next) => {
  try {
    const problem = req.body;
    const newProblem = await problemService.createProblem(problem);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Problem created successfully',
      data: newProblem,
      error: false,
    });
  } catch (error) {
    next(error);
  }
};
const getProblems = async (req, res, next) => {
  try {
    const allProblems = await problemService.getAllProblems();
    if (allProblems.length === 0)
      return res.status(StatusCodes.OK).json({
        success: true,
        message: 'No problems found',
        data: [],
        error: false,
      });
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problems fetched successfully',
      data: allProblems,
      error: false,
    });
  } catch (error) {
    next(error);
  }
};
const getProblem = async (req, res, next) => {
  try {
    const problemId = req.params.id;
    const problem = await problemService.getProblemById(problemId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problem fetched successfully',
      data: problem,
      error: false,
    });
  } catch (error) {
    next(error);
  }
};
const updateProblem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const problem = req.body;
    const updatedProblem = await problemService.updateProblem(id, problem);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problem updated successfully',
      data: updatedProblem,
      error: false,
    });
  } catch (err) {
    next(err);
  }
};
const deleteProblem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const problem = await problemService.deleteProblem(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problem deleted successfully',
      data: problem,
      error: false,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  addProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem,
};
