// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs =require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description'
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
        type: 'list',
        name: 'license',
        message: 'Choose a License',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
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
        message: 'Enter GitHub username'
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        if (answers.license == 'Apache License 2.0') {
            answers.license = `Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (answers.license == 'GNU General Public License v3.0') {
            answers.license = `GNU General Public License v3.0 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        } else if (answers.license == 'MIT License') {
            answers.license = `MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        }
        else if(answers.license == 'BSD 2-Clause "Simplified" License') {
            answers.license = `BSD 2-Clause "Simplified" License [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
            licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        }
        else if(answers.license == 'BSD 3-Clause "New" or "Revised" License') {
            answers.license = `BSD 3-Clause "New" or "Revised" License [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
            licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        }
        else if(answers.license == 'Boost Software License 1.0') {
            answers.license = `Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        }
        else if(answers.license == 'Creative Commons Zero v1.0 Universal') {
            answers.license = `Creative Commons Zero v1.0 Universal [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
            licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
        }
        else if(answers.license == 'Eclipse Public License 2.0') {
            answers.license = `Eclipse Public License 2.0 [![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://www.eclipse.org/legal/epl-2.0/)`;
            licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://www.eclipse.org/legal/epl-2.0/)';
        }
        else if(answers.license == 'GNU Affero General Public License v3.0') {
            answers.license = `GNU Affero General Public License v3.0 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
            licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        }
        else if(answers.license == 'GNU General Public License v2.0') {
            answers.license = `GNU General Public License v2.0 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
        }
        else if(answers.license == 'Mozilla Public License 2.0') {
            answers.license = `Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        }
        else if(answers.license == 'The Unlicense') {
            answers.license = `The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
            licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        }
        else if(answers.license == 'None') {
            answers.license = 'N/A';
            licenseBadge = '';
        }

        const markdownText = generateMarkdown(answers);
        fs.writeFile('README-sample.md', markdownText, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
    });
};

// Function call to initialize app
init();