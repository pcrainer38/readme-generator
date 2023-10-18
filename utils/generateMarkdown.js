// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  } else {
    return `![badge](https://img.shields.io/badge/license-${license})
    `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `[${license}](https://choosealicense.com/licenses/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  } else {
    return `This application is covered under the following license:
    ${renderLicenseLink(license)}`;
  }
}


// TODO: Create a function to generate markdown for README
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
  - [Credits](#credits) 
  - [License](#license) 
  - [Questions](#questions)
  - [Tests](#tests)

  ## Installation Instructions 
  
  ${data.installation}

  ## Usage 
 
  ${data.instructions}

  ## Credits   
 
  ${data.credits}
  
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
