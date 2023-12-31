
// Returns license badge, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      
    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      
    default:
      return '';
  }
}


// Returns license link, if there is no license return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `[${license}](https://opensource.org/licenses/)`;
  }
}

// Returns the type of license on the project, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  } else {
    return `This application is covered under the following license:
    ${renderLicenseLink(license)}`;
  }
}


function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Badge
  ${renderLicenseBadge(data.license)}

  ## Description 
  
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contributing](#contributing) 
  - [License](#license) 
  - [Questions](#questions)
  - [Tests](#tests)

  ## Installation Instructions 
  
  ${data.installation}

  ## Usage 
 
  ${data.instructions}

  ## Contributing   
 
  ${data.contributing}
  
  ## License 
 
  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  - ${data.github}
  - ${data.email}
  
   ## Tests 
  
   ${data.tests}
`;
}

module.exports = generateMarkdown;
