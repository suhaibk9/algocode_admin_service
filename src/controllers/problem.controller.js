const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/NotImplemented');
const addProblem = (req, res) => {
  try {
    throw new NotImplemented('addProblem');
  } catch (err) {
    console.log(err.stack);
    return res.status(err.statusCode).send(err.message);
  }
  finally {
    console.log("Add Problem");
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
