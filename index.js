//added requirement for fs module that will be used to write the new readme file
const fs = require('fs');
//added requirement to the inquirer module that will be used to ask questions and get the input that will be added to the readme file.
const inquirer = require('inquirer');
//added requirement to the "generateMarkdown" file that has the template literal for formatting the readme file content
const generate = require('./utils/generateMarkdown.js');

//categories to be used in the README file
// title and sections for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README file?',
        name: 'title',
    }
    {
        type: 'input',
        message: 'What is a description of your program?',
        name: 'description',
    }
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
    }
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    }
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribute',
    }
    {
        type: 'list',
        message: 'What is the license?',
        name: 'license',
        choices: ['choice1', 'choice2', 'choice3'],
    }
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    }
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
