const logger = require('../config/logger.config');
const InternalServerError = require('../errors/InternalServerError');
const NotFound = require('../errors/NotFoundError');
const { Problem } = require('../models/index');
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        testCases: problemData.testCases ? problemData.testCases : [],
        codeStubs: problemData.codeStubs ? problemData.codeStubs : [],
        editorial: problemData.editorial ? problemData.editorial : null,
      });
      if (!problem) {
        throw new InternalServerError('Problem not created');
      }
      return problem;
    } catch (err) {
      throw new InternalServerError(err.message);
    }
  }
  async getAllProblems() {
    try {
      const problems = await Problem.find();
      return problems;
    } catch (err) {
      throw new InternalServerError(err.message);
    }
  }
  async getProblemById(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      return problem;
    } catch (err) {
      if (err.name === 'CastError') throw new NotFound('Problem', problemId);
      throw err;
    }
  }
  async updateProblem(problemId, problemData) {
    try {
      const findProblem = await Problem.findById(problemId);
      if (!findProblem) {
        logger.error(`Problem with id ${problemId} not found`);
        throw new NotFound('Problem', problemId);
      }
      //new: true is used to return the updated document
      const problem = await Problem.findByIdAndUpdate(problemId, problemData, {
        new: true,
      });
      return problem;
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFound('Problem', problemId);
      }
      throw err;
    }
  }

  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        // logger.error(`Problem with id ${id} not found`);
        throw new NotFound('Problem', id);
      }
      return problem;
    } catch (err) {
      logger.error(`Problem with id ${id} not found`);
      if (err.name === 'CastError') {
        throw new NotFound('Problem', id);
      }
      throw err;
    }
  }
}
module.exports = ProblemRepository;
