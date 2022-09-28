const inquirer = require("inquirer");
const sqlQuery = require("./index");
const cTable = require("console.table");
const db = require('./index');


function viewAllEmployees() {
    const dbAction = require("../server");
    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => dbAction());
}

function viewAllRoles() {
    const dbAction = require("../server");
    db.allRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => dbAction());
}

function viewAllDepartments() {
    const dbAction = require("../server");
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => dbAction());
}


// Add an employee
function addNewEmployee() {
    const dbAction = require("../server");
    inquirer.prompt([
        {
            name: "first_name",
            message: "Enter the employee's first name:"
        },
        {
            name: "last_name",
            message: "Enter the employee's last name:"
        }
    ])
        .then(res => {
            let firstName = res.first_name;
            let lastName = res.last_name;

            db.allRoles()
                .then(([rows]) => {
                    let roles = rows;
                    const roleChoices = roles.map(({ id, title }) => ({
                        name: title,
                        value: id
                    }));

                    inquirer.prompt({
                        type: "list",
                        name: "roleId",
                        message: "Enter the employee's role:",
                        choices: roleChoices
                    })
                        .then(res => {
                            let roleId = res.roleId;

                            db.allEmployees()
                                .then(([rows]) => {
                                    let employees = rows;
                                    const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                                        name: `${first_name} ${last_name}`,
                                        value: id
                                    }));

                                    managerChoices.unshift({ name: "None", value: null });

                                    inquirer.prompt({
                                        type: "list",
                                        name: "managerId",
                                        message: "Indicate the employee's manager:",
                                        choices: managerChoices
                                    })
                                        .then(res => {
                                            let employee = {
                                                manager_id: res.managerId,
                                                role_id: roleId,
                                                first_name: firstName,
                                                last_name: lastName
                                            }

                                            db.addEmployee(employee);
                                        })
                                        .then(() => console.log(
                                            `Added ${firstName} ${lastName} to the database`
                                        ))
                                        .then(() => dbAction())
                                })
                        })
                })
        })
}




// Add a role
function addNewRole() {
    const dbAction = require("../server");
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));

            inquirer.prompt([
                {
                    name: "title",
                    message: "Enter the name of the new role:"
                },
                {
                    name: "salary",
                    message: "Enter the salary of the new role:"
                },
                {
                    type: "list",
                    name: "department_id",
                    message: "Indicate which department the new role falls under:",
                    choices: departmentChoices
                }
            ])
                .then(role => {
                    db.addRole(role)
                        .then(() => console.log(`Added ${role.title} to the database`))
                        .then(() => dbAction())
                })
        })
}


// Add a department
function addNewDept() {
    const dbAction = require("../server");
    inquirer.prompt([
        {
            name: "name",
            message: "Enter the name of the new department:"
        }
    ])
        .then(res => {
            let name = res;
            db.addDepartment(name)
                .then(() => console.log(`Added ${name.name} to the database`))
                .then(() => dbAction())
        })
}


// Update an employee's role
function updateRole() {
    const dbAction = require("../server");
    
    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));
            inquirer.prompt([
                {
                    type: "list",
                    name: "employeeId",
                    message: "Indicate which employee's role needs to be updated:",
                    choices: employeeChoices
                }
            ])
                .then(res => {
                    let employeeId = res.employeeId;
                    db.allRoles()
                        .then(([rows]) => {
                            let roles = rows;
                            const roleChoices = roles.map(({ id, title }) => ({
                                name: title,
                                value: id
                            }));

                            inquirer.prompt([
                                {
                                    type: "list",
                                    name: "roleId",
                                    message: "Enter this employee's new role:",
                                    choices: roleChoices
                                }
                            ])
                                .then(res => db.updateEmployeeRole(employeeId, res.roleId))
                                .then(() => console.log("Employee role updated"))
                                .then(() => dbAction())
                        });
                });
        })
}

module.exports = { viewAllRoles, viewAllEmployees, viewAllDepartments, addNewEmployee, addNewDept, addNewRole, updateRole };