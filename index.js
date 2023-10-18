// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create a function to initialize app
// TODO: Create an array of questions for user input
function init() {
const questions = inquirer.prompt ([
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
        'Eclipse Public License 2.0'
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
    ]).then((response) => 
    fs.writeFile('sampleREADME.md', `# ${response.title}\n\n## Description\n\n ${response.description}\n\n ## Table of Contents\n\n #### [Installation](#installation)\n\ #### [Usage](#usage)\n #### [Credits](#credits)\n #### [License](#license)\n #### [Questions](#questions)\n #### [Tests](#tests)\n\n ### Installation Instructions\n\n ${response.installation}\n\n### Usage\n\n ${response.instructions}\n\n### Credits\n\n ${response.credits}\n\n### License\n\n ${response.license}\n\n### Questions\n\n ${response.github}\n ${response.email}\n\n### Tests\n\n ${response.tests}`, (err) => err ? console.log(error) : console.log('success')));
    
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   
}




// Function call to initialize app
init();
