#
Write your MySQL query statement below
SELECT e.name, b.bonus
FROM Employee AS e
         LEFT JOIN Bonus AS b ON b.empId = e.empId
WHERE b.bonus IS NULL
   OR b.bonus < 1000;