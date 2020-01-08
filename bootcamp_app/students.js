const { Pool } = require('pg');

const cohort = process.argv.slice(2)[0];
const maxResult = process.argv.slice(2)[1] || 5;

console.log(cohort, maxResult);
if (!cohort || !maxResult) {
  console.log("Need cohort name and result limit");
  process.exit(1);
}

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res);
// })
// .catch(err => console.error('query error', err.stack));
const queryString =`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.name ILIKE $1
LIMIT $2;
`;
const values = [`%${cohort}%`, maxResult];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});