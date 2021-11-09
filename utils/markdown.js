// Create a function that returns a license badge based on which license is passed in

function makeBadge (label, message, color="green") {
    
  return `![${label} ${message}](https://img.shields.io/badge/${label}-${message}-${color})`;
}


// function to generate markdown for README
function generateMarkdown(payload) {
  return `# Title: ${payload.title} ${makeBadge("license", payload.license)}

## License
This project is under the ${payload.license} license

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Description
${payload.description}

## Installation
${payload.installation}

## Usage
${payload.usage}

## Contributing
${payload.contribution}

## Test
${payload.test}

## Questions
I learned programming language at ${payload.question} UWA. If you have any questions, please contact me at the Info below

## GitHub
${payload.username}
![GitHub license](https://img.shields.io/badge/license-MIT-orange.svg)
https://github.com/${payload.username}/${payload.title}

## Email address
${payload.email}

`
}

module.exports = {
  generateMarkdown};



  