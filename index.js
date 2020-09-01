var inquirer = require("inquirer");
var fs = require('fs');
var question = answers();
const answersJSON = JSON.stringify(answers, null, 2);

inquirer.prompt(question).then(answersJSON => {
    var theTitle = answersJSON.title

    fs.writeFile(theTitle + ".md", generateReadME(answersJSON), function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");
    })
});

function generateReadME(answers) {

    return (
        `![NPM License](https://img.shields.io/npm/l/${answers.license})
## Title
        ${answers.title}
            
## Description 
        ${answers.description}

## Table of Contents
        ${answers.table}

## Install
        ${answers.install}

## Usage
        ${answers.usage}

## License
        ${answers.license}

## Contributers
        ${answers.contributing}

## Test
        ${answers.tests}

## Email for questions regarding the project
        ${answers.email}
        ${"github.com" + answers.contributing }

`

    )
}

function answers() {
    return [{

            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Give a description of the project:",
            name: "description"
        },
        {
            type: "input",
            message: "List a Table of contents:",
            name: "table"
        },
        {
            type: "input",
            message: "What is required for Installation?",
            name: "install"
        },
        {
            type: "input",
            message: "Usage information of the Project:",
            name: "usage"
        },
        {
            type: "list",
            message: "License for the Project:",
            choices: ["BSD", "MIT", "GPL"],
            name: "license"

        },
        {
            type: "input",
            message: "Github profile names of members that contributed to the Project:",
            name: "contributing",
        },
        {
            type: "input",
            message: "Tests:",
            name: "tests",
        },
        {
            type: "input",
            message: "Enter your Email for user questions regarding this project:",
            name: "email"



        }


    ]
};