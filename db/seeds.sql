INSERT INTO departments (name)
VALUES ("Finance"),
       ("Legal"),
       ("Operations"),
       ("Quality"),
       ("R&D"),
       ("Sales")

INSERT INTO roles (title, salary, department_id)
VALUES ("Financial Analyst", 75000, 1),
       ("Senior Accountant", 95000, 1),
       ("Compliance Officer", 85000, 2),
       ("Legal Analyst", 65000, 2),
       ("Operations Director", 200000, 3),
       ("Process Engineer", 100000, 3),
       ("Quality Director", 130000, 4),
       ("Quality Engineer", 95000, 4),
       ("Research Scientist", 100000, 5),
       ("Development Engineer", 110000, 5),
       ("Account Manager", 85000, 6),
       ("Sales Rep", 75000, 6)

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Connor", "Kent", 1, 2),
       ("Clark", "Kent", 2, NULL),
       ("Harvey", "Dent", 3, NULL)
       ("Matt", "Murdock", 4, 3)
       ("Bruce", "Wayne", 5, NULL),
       ("Dick", "Grayson", 6, 5),
       ("James", "Howlett", 7, NULL),
       ("Laura", "Kinney", 8, 7),
       ("Ray", "Palmer", 9, 5),
       ("Tony", "Stark", 10, 5),
       ("Oliver", "Queen", 11, NULL),
       ("Clint", "Barton", 12, 11)

