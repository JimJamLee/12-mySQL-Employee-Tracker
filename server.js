const inquirer = require("inquirer");
const express = require("express");
const { viewAllEmployees, viewAllRoles, viewAllDepartments, addNewEmployee, addNewRole, addNewDept, updateRole } = require('./helpers/dbfuncs');

require('dotenv').config()

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dbAction = () => {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'desiredAction',
            choices: [
                    'View All Employees',
                    'View All Roles',
                    'View All Departments',
                    'Add New Employee',
                    'Add New Role',
                    'Add New Department',
                    'Update Existing Employee Role',
                ],
            },
        ])
    .then((selection) => {
            switch (selection.desiredAction) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'Add New Employee':
                    addNewEmployee();
                    break;
                case 'Add New Role':
                    addNewRole();
                    break;
                case 'Add New Department':
                    addNewDept();
                    break;    
                case 'Update Existing Employee Role':
                    updateRole();
                    break;
            }
        })
}

dbAction();

// Default response for any other request 
// app.use((req, res) => {
//     res.status(404).end;
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


module.exports = dbAction;