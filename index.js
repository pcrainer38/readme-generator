// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input

const questions =  [
    {
        type: 'input',
        message: 'What is your project\'s title?',
        name: 'title',
    },
    {
        type:'input',
        message: 'Provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions for use.',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'What type of license is on your project if any?',
        name: 'license',
        choices: ['Apache License 2.0', 
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense'
        ]
    },
    {
        type: 'input',
        message: 'What is the link to your GitHub profile?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What type of tests have you created for your project and how do you run them?',
        name: 'tests'
    }
    ]
  
// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => writeToFile('sampleREADME.md', generateMarkdown({...response})))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
