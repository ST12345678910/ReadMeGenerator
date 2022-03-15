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
    choices: ['MIT', 'Apache 2.0', 'Boost 1.0', 'BSD 2', 'BSD 3' ],
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

inquirer.prompt(userQuestions)
.then(function (answers) {
    console.log(answers)
    let newReadme = `
# ${answers.title}
<img src="https://img.shields.io/badge/License-${answers.license}-blue.svg">
## Description
 ${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
 ${answers.usage}
## Contributing
 ${answers.contributing}
## Tests
 ${answers.testing}
## Questions
If you have any questions about the project or repository, open issue or contact me directly at <code>${answers.email}</code>. Find more of my projects @ <code>${answers.username}</code>
    `
    fs.writeFile('generatedReadMe.md', newReadme, function (err) { 
      })
  })
.catch(function (err) {
    return console.log(err)
  })
  