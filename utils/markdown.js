// Create a function that returns a license badge based on which license is passed in

function makeBadge (label, message, color="green") {
    
  return `![${label} ${message}](https://img.shields.io/badge/${label}-${message}-${color})`;
}


// function to generate markdown for README
function generateMarkdown(payload) {
  return `# Title: ${payload.title} ${makeBadge("license", payload.license)}

## License
This project is under the ${payload.license} license.

## Description
${payload.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
${payload.installation}

## Usage
${payload.usage}

## Contributing
${payload.contribution}

## Test
${payload.test}

## GitHub Page
${payload.username}
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
https://github.com/${payload.username}/${payload.title}

## Email
${payload.email}

`
}

module.exports = {
  generateMarkdown};



  