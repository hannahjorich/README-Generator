// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.username}

  *[Installation](#installation)

  *[Description](#Description)

  ## Description
  > ${data.description}

  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

`;
}

module.exports = generateMarkdown;
