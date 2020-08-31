var inquirer = require("inquirer");
var fs = require('fs');
var question = answers();
const answersJSON = JSON.stringify(answers, null, 2);
// JSON.stringify(answersJSON, undefined, 2)
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
    // `## Title
    //      ${answers.title}`
    //     ` \n
    //     ## Description \n
    //     ${answers.description}`
    return (
        `![NPM License](https://img.shields.io/npm/l/${answers.license})`


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
            message: " what is required for Installation:",
            name: "install"
        },
        {
            type: "input",
            message: "Usage information of the Project:",
            name: "usage"
        },
        {
            type: "list",
            message: "License for the Project",
            choices: ["BSD", "MIT", "GPL"],
            name: "license"

        },
        {
            type: "input",
            message: "Contributing members of the Project:",
            name: "contributing",
        },
        {
            type: "input",
            message: "Tests",
            name: "tests",
        },
        {
            type: "input",
            message: "Enter your Email for user questions regarding this project:",
            name: "For questions in regards to this project email me at:"


        }


    ]
};