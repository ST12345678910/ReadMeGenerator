

const inquirer = require('inquirer')
const fs = require('fs')
const userQuestions = [
  {
    message: 'What is the project title?',
    type: 'input',
    name: 'title'
  },
  {
    message: 'What is the project description?',
    type: 'input',
    name: 'description'
  },
  {
    message: 'What are the installation instructions?',
    type: 'input',
    name: 'installation'
  },
  {
    message: 'What are the usage instructions?',
    type: 'input',
    name: 'usage'
  },
  {
    message: 'Choose a project license?',
    type: 'list',
    choices: ['MIT', 'Apache 2.0', 'Boost 1.0', 'BSD 2', 'BSD 3'],
    name: 'license'
  },
  {
    message: 'What are the contribution guidelines for the project?',
    type: 'input',
    name: 'contributing'
  },
  {
    message: 'What are the testing guidelines for the project?',
    type: 'input',
    name: 'testing'
  },
  {
    message: 'What is your Github username?',
    type: 'input',
    name: 'username'
  },
  {
    message: 'What is your email?',
    type: 'input',
    name: 'email'
  },
]

test('All Sections Included', () => {
  expect(userQuestions).toContainEqual({ "message": "What is the project title?", "name": "title", "type": "input" }, { "message": "What is the project description?", "name": "description", "type": "input" }, { "message": "What are the installation instructions?", "name": "installation", "type": "input" }, { "message": "What are the usage instructions?", "name": "usage", "type": "input" }, { "choices": ["MIT", "Apache 2.0", "Boost 1.0", "BSD 2", "BSD 3"], "message": "Choose a project license?", "name": "license", "type": "list" }, { "message": "What are the contribution guidelines for the project?", "name": "contributing", "type": "input" }, { "message": "What are the testing guidelines for the project?", "name": "testing", "type": "input" }, { "message": "What is your Github username?", "name": "username", "type": "input" }, { "message": "What is your email?", "name": "email", "type": "input" });
})