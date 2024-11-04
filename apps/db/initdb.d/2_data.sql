SET CHARACTER_SET_CLIENT = utf8mb4;
SET CHARACTER_SET_CONNECTION = utf8mb4;

USE sample;

INSERT INTO employee (id, name) VALUES (1, "山田");
INSERT INTO employee (id, name) VALUES (2, "鈴木");

INSERT INTO skill (employee_id, language) VALUES (1, "JavaScript");
INSERT INTO skill (employee_id, language) VALUES (1, "HTML");
INSERT INTO skill (employee_id, language) VALUES (1, "CSS");
INSERT INTO skill (employee_id, language) VALUES (2, "Java");
