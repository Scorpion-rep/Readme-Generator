const inquirer = require("inquirer");
const markdown = require("./utils/markdown");

// object destructuring
const {generateMarkdown} = require("./utils/markdown")
const fs = require("fs");
const path = require("path");
// Goal is creating an app that generates README.md

// app should ask for userinput
inquirer.prompt ([
    {       // project title
        message: "What is Title of your project?",
        name: "title",
        type: "input",
    },
    {       //description
        message: "Please give the description of your project?",
        name: "description",
        type: "input",
    },
    {       // installation instruction
        message: "What neccessary dependencies must be installed to run this app?",
        name: "installation",
        type: "input",
    },
    {       // usage information
        message: "What is this app used for?",
        name: "usage",
        type: "input",
    },
    {       // constribution guidelines 
        message: "What are contribution guidelines?",
        name: "contribution",
        type: "input",
    },
    {       // test instructions
        message: "What command to be used to test this app?",
        name: "test",
        type: "input",
    },
    {       // license
        message: "Please select a license",
        name: "license",
        type: "list",
        choices: [
            "MIT",
            "ISC",
            "Apache"
        ]
    },
    {   // Questions for user's details          
        message: "What is your GitHub username?",
        name: "username",
        type: "input",
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input",
    }
       
]).then(function(answers) {
    console.log(answers);

    // Once we get everything use info to generate Readme.md

    const md = generateMarkdown(answers);

    console.log(md);

    // save the string into a file
    const outputPath = path.join(__dirname, "output", "readme.md");

    fs.writeFileSync(outputPath, md);
})

