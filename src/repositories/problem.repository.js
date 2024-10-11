const InternalServerError = require('../errors/InternalServerError');
const { Problem } = require('../models/index');
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        testCases: problemData.testCases ? problemData.testCases : [],
        editorial: problemData.editorial ? problemData.editorial : null,
      });
      return problem;
    } catch (err) {
      throw new InternalServerError(err.message);
    }
  }
}
module.exports = ProblemRepository;
