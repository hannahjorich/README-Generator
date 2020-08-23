// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  > ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)

  ## Installation
  Packages required to run this program are: ${data.installation}
  
  ## Usage
  Examples of how to use this program: ${data.usage}

  ## Tests
  To test, run the following command: ${data.tests}

  ## Contributors
  ${data.contributer}

  ## License
  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

`;
}

module.exports = generateMarkdown;
