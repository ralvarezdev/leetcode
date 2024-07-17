#
Write your MySQL query statement below
SELECT w2.id
FROM (SELECT w1.id          AS  id,
             w1.recordDate  AS  second_recordDate,
             w1.temperature AS  second_temperature,
             LAG(w1.recordDate) OVER (ORDER BY w1.recordDate) AS first_recordDate ,LAG(w1.temperature) OVER (ORDER BY w1.recordDate) AS first_temperature
      FROM Weather AS w1) AS w2
WHERE w2.second_temperature IS NOT NULL
  AND DATE_ADD(w2.second_recordDate, INTERVAL -1 DAY) = w2.first_recordDate
  AND w2.second_temperature > w2.first_temperature
ORDER BY w2.id;