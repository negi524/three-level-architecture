CREATE SCHEMA IF NOT EXISTS sample;
USE sample;

SET CHARACTER_SET_CLIENT = utf8mb4;
SET CHARACTER_SET_CONNECTION = utf8mb4;

-- 従業員テーブルを作成する
CREATE TABLE IF NOT EXISTS employee
(
  id          INT(10) NOT NULL comment '従業員ID',
  name        VARCHAR(40) NOT NULL comment '従業員名',
  created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP comment 'レコード作成日時',
  updated_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment 'レコード更新日時',
  PRIMARY KEY(id)
) comment '従業員テーブル';


-- skillテーブルを作成する
CREATE TABLE IF NOT EXISTS skill
(
  id            INT(10) NOT NULL AUTO_INCREMENT comment 'スキルID',
  employee_id   INT(10) NOT NULL comment '従業員ID',
  language      VARCHAR(40) NOT NULL comment 'プログラミング言語',
  PRIMARY KEY(id),
  FOREIGN KEY(employee_id) REFERENCES employee(id)
) comment 'スキル情報';
