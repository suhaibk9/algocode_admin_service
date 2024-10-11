const { markdownSanitizer } = require('../utils/index');
class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    try {
      problemData.description = markdownSanitizer(problemData.description);
      return await this.problemRepository.createProblem(problemData);
    } catch (err) {
      throw err;
    }
  }
}
module.exports = ProblemService;
