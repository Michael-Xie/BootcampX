SELECT cohorts.name as name, AVG(completed_at - started_at) as average_assistance_request_time
FROM assistance_requests
  JOIN students ON (student_id = students.id)
  JOIN cohorts ON (cohort_id = cohorts.id)
GROUP BY cohorts.name
ORDER by average_assistance_request_time DESC 
LIMIT 1;