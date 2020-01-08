const { Pool } = require('pg');

const cohort = process.argv.slice(2)[0] || 'JUL02';

console.log(cohort);
if (!cohort) {
  console.log("Need cohort name");
  process.exit(1);
}

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name ILIKE $1
ORDER BY teacher
`, [`%${cohort}%`])
.then(res => {
  console.log("Returning results");
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher} `);
  })
});

