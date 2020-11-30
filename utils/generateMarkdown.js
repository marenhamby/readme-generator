// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
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
