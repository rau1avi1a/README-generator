// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs =require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description'
    },
    {
        type: 'input',
        name: 'table',
        message: 'Table of Contents'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Lisence'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //add fs code to save file
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(questions);
        writeToFile('README.md', markdownText);
    });
}

// Function call to initialize app
init();
