//User questions for README.md

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Project Description: "
        },
        {
            type: "input",
            name: "installation",
            message: "Installation Process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Whats the Usage?"
        },
        {
            type: "list",
            name: "license",
            message: "License: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
                "none"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Contributors?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "How to reporte issues? "
        },
        {
            type: "input",
            name: "username",
            message: "GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Email: "
        }
    ]);
} 