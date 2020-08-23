
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile); 

const questions = () => {
    return inquirer.prompt([
        {
          type: "input",
          message: "What is your user GitHub username?",
          name: "username"
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the title of your project?",
          name: "title"
        },
        {
          type: "input",
          message: "Please provide a short description of your project.",
          name: "description"
        },
        {
          type: "input",
          message: "What packages need to be installed to run your project.",
          name: "installation"
        },
        {
          type: "input",
          message: "What technologies were used to create your project.",
          name: "technology"
        },
        {
          type: "input",
          message: "Please provide an example of how your project can be used.",
          name: "usage"
        },
        {
          type: "list",
          name: "license",
          message: "What kind of license would you like to have?",
          name: "license",
          choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
        },
        {
          type: "input",
          message: "Including yourself, please list out all contributors",
          name: "contributer"
        },
        {
          type: "input",
          message: "What command is used to run a test",
          name: "tests",
        }
      ]);
    }; 

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
