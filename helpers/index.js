const connection = require("../config/connection");

class employeeDB {

    constructor(connection) {
        this.connection = connection;
    }

    // Show all employees
    allEmployees() {
        return this.connection.promise().query(
            "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS departments, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees manager on manager.id = employees.manager_id;"
        );
    }

    // Add an employee
    addEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employees SET ?", employee);
    }

    // Update the given employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query(
            "UPDATE employees SET role_id = ? WHERE id = ?",
            [roleId, employeeId]
        );
    }


    // Show all managers
    allManagers(employeeId) {
        return this.connection.promise().query(
            "SELECT id, first_name, last_name FROM employees WHERE id != ?",
            employeeId
        );
    }

    // Show all roles
    allRoles() {
        return this.connection.promise().query(
            "SELECT roles.id, roles.title, departments.name AS departments, roles.salary FROM roles LEFT JOIN departments on roles.department_id = departments.id;"
        );
    }

    // Create a new role
    addRole(role) {
        return this.connection.promise().query("INSERT INTO roles SET ?", role);
    }

    // Show all departments
    allDepartments() {
        return this.connection.promise().query(
            "SELECT departments.id, departments.name FROM departments;"
        );
    }

    // Add a department
    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO departments SET ?", department);
    }

}

module.exports = new employeeDB(connection);