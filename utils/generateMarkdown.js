// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![license tag](https://img.shields.io/badge/license-${data.license}-green)
  
  ## Table of Contents

  * [Description](#description)
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)

  * [License](#license)
  
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

  GitHub profile: https://github.com/${data.username}

  You can reach me at ${data.email} for any questions!

  ## License
  This application is covered under the following license: ${data.license}
  `;
}

module.exports = generateMarkdown;
