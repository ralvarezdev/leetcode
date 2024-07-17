#
Write your MySQL query statement below
SELECT a1.machine_id, ROUND(AVG(a1.avg_activity_time), 3) AS processing_time
FROM (SELECT a1.machine_id, a1.process_id, MAX(a1.timestamp) - MIN(a1.timestamp) AS avg_activity_time
      FROM Activity AS a1
      GROUP BY a1.machine_id, a1.process_id) AS a1
GROUP BY a1.machine_id;