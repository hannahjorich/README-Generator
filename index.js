
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path")

const questions = [
        {
          type: "input",
          message: "What is your user GitHub username?",
          name: "username",
          validate: (answer) => {
              if(answer !== "") {
                  return true
              }
              return "No blank fields"
          }
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email",
          validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "No blank fields"
        }
        },
        {
          type: "input",
          message: "What is the title of your project?",
          name: "title",
          validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "No blank fields"
        }
        },
        {
          type: "input",
          message: "Please provide a short description of your project.",
          name: "description",
          validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "No blank fields"
        }
        },
        {
          type: "input",
          message: "What packages need to be installed to run your project.",
          name: "installation",
          validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "No blank fields"
        }
        },
        {
          type: "input",
          message: "What technologies were used to create your project.",
          name: "technology",
          validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "No blank fields"
        }
        },
        {
          type: "input",
          message: "Please provide an example of how your project can be used.",
          name: "usage",
          validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "No blank fields"
        }
        },
        {
          type: "list",
          name: "license",
          message: "What kind of license would you like to have?",
          name: "license",
          choices: [
            {
            name: "MIT",
            value: "MIT"
            },
            {
            name:"APACHE 2.0",
            value: "APACHE%202.0"
            },
            {
            name:"GPL v3",
            value: "GPL%20v3"
            },
            {
            name:"BSD 3",
            value: "BSD%203"
            },
            {
            name:"None",
            value: "None"
            }
          ]},
        {
          type: "input",
          message: "Including yourself, please list out all contributors",
          name: "contributer",
          validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "No blank fields"
        }
        },
        {
          type: "input",
          message: "What command is used to run a test",
          name: "tests",
          validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "No blank fields"
        }
        }
      ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
       writeToFile("README.md", generateMarkdown(answers))
    })
}
// function call to initialize program
init();
