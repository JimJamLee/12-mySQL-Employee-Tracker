# 12-mySQL-Employee-Tracker


## Challenge User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```


## Challenge Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```


## General Info

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). This is a command-line application from used to manage a company's employee database, using Node.js, Inquirer, and MySQL.


## Applied Technologies

* [NPM](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/docs/)
* [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)
* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html)
* [Express.js](https://expressjs.com/en/guide/routing.html)
* [console.table](https://www.npmjs.com/package/console.table)
* [Dotenv](https://www.npmjs.com/package/dotenv)



## Application Functionality

The following video demos the functionality of this application:

![James Li Employee Tracker](./assets/12-mysql-employee-tracker-demo-gif.gif)

Link to the video demo:
https://drive.google.com/file/d/1E9nT26YegJrk55Ysq1STNUE7hTyrmnjl/view