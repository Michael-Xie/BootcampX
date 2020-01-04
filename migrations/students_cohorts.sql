CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  start_date DATE,
  end_date DATE
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  phone VARCHAR(20),
  github VARCHAR(200),
  start_date DATE,
  end_date DATE,
  cohort_id INTEGER
);