// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  https://img.shields.io/badge/license-${data.install}-green
  
  ## Table of Contents

  * [Description](#description)
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.test}
  
  ## Questions
  GitHub username: ${data.username}

  GitHub link: https://github.com/${data.username}

  You can reach me at ${data.email} for any questions!
  `;
}

module.exports = generateMarkdown;
