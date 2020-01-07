-- Gave over 1Mil result 
-- Reason: The join of assignments add additional row to the joined table
-- SELECT teachers.name as teacher, 
--   students.name as student,
--   assignments.name as assignment,
--   (assistance_requests.completed_at - assistance_requests.started_at) as duration
-- FROM students
--   JOIN assignment_submissions ON (assignment_submissions.student_id = students.id)
--   JOIN assignments ON (assignments.id = assignment_id)
--   JOIN assistance_requests ON (assistance_requests.student_id = students.id)
--   JOIN teachers ON (teachers.id = teacher_id)
-- ORDER BY duration;


-- 20214 rows (WHY the discrepancy (vs 26299) ??!?! and why the values not match?)
-- Possible Reason: LHL hasn't updated change on course material, can ignore
SELECT teachers.name as teacher, students.name as student, assignments.name as assignment, (completed_at-started_at) as duration
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN assignments ON assignments.id = assignment_id
ORDER BY duration;