// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${licenseBadge}
## Description
${data.description}
## Table of Contents
1. [Installation](https://github.com/${data.questions}/${data.title}#installation)
2. [Usage](https://github.com/${data.questions}/${data.title}#usage)
3. [License](https://github.com/${data.questions}/${data.title}#license)
4. [Contributing](https://github.com/${data.questions}/${data.title}#contributing)
5. [Tests](https://github.com/${data.questions}/${data.title}#tests)
6. [Questions?](https://github.com/${data.questions}/${data.title}#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions?
Reach me on [GitHub](https://github.com/${data.questions})`;
}

module.exports = generateMarkdown;
