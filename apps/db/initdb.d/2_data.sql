USE sample;

-- user_name=aaa, password=password
INSERT INTO
  account (user_name, password_hash, salt)
VALUES
  (
    'aaa',
    '$2a$10$UhHbeYW/0kl94zZR//zMtOt4FCZ3OFA07qa5ED/QTG/jXzD7H6SlW',
    '$2a$10$UhHbeYW/0kl94zZR//zMtO'
  );

-- user_name=bbb, password=password
INSERT INTO
  account (user_name, password_hash, salt)
VALUES
  (
    'bbb',
    '$2a$10$0yaSxRhvloRTvPusX/vbxe8JyZBqfdWlDgZ1UOAy.M4wtdaXiYI.i',
    '$2a$10$0yaSxRhvloRTvPusX/vbxe'
  );

INSERT INTO
  employee (id, name)
VALUES
  (1, "山田");

INSERT INTO
  employee (id, name)
VALUES
  (2, "鈴木");

INSERT INTO
  skill (employee_id, language)
VALUES
  (1, "JavaScript");

INSERT INTO
  skill (employee_id, language)
VALUES
  (1, "HTML");

INSERT INTO
  skill (employee_id, language)
VALUES
  (1, "CSS");

INSERT INTO
  skill (employee_id, language)
VALUES
  (2, "Java");
