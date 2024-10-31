const mongoose = require('mongoose');
const { Schema } = mongoose;
const problemSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  difficulty: {
    type: String,
    default: 'easy',
    enum: ['easy', 'medium', 'hard'],
    required: [true, 'Difficulty is required'],
  },
  testCases: [
    {
      input: {
        type: String,
        enum: ['CPP', 'JAVA', 'PYTHON'],
        required: [true, 'Input is required'],
      },
      output: {
        type: String,
        required: [true, 'Output is required'],
      },
    },
  ],
  codeStubs: [
    {
      language: {
        type: String,
        required: [true, 'Language is required'],
      },
      startSnippet: {
        type: String,
        required: [true, 'Start Snippet is required'],
      },
      endSnippet: {
        type: String,
        required: [true, 'End Snippet is required'],
      },
    },
  ],
  editorial: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model('Problem', problemSchema);

/**
 Sample Problem Document:-
 const problem = new Problem({
  title: 'Add Two Numbers',
  description: 'Write a function that takes two numbers and returns their sum.',
  difficulty: 'easy',
  testCases: [
    {
      input: '1, 2',
      output: '3',
    },
    {
      input: '10, 15',
      output: '25',
    },
  ],
  editorial: 'To solve this problem, simply add the two input numbers together using the + operator.'
});

problem.save();



Another way for testCases is using subschema:-
const testCaseSchema = new Schema({
  input: {
    type: String,
    required: [true, 'Input is required'],
  },
  output: {
    type: String,
    required: [true, 'Output is required'],
  },
});

const problemSchema = new Schema({
    testCases: [testCaseSchema],
});
 */
