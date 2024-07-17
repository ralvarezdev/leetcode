#
Write your MySQL query statement below
WITH Delivery_First_Order AS (SELECT f.customer_id AS customer_id, f.order_date AS order_date, customer_pref_delivery_date AS customer_pref_delivery_date FROM (SELECT *, ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY order_date) AS rownum FROM Delivery) AS f WHERE rownum=1),
Total AS(SELECT (SELECT COUNT(*) FROM Delivery_First_Order AS f WHERE f.order_date=f.customer_pref_delivery_date)*100.0/COUNT(*) AS percentage FROM Delivery_First_Order)
SELECT ROUND(t.percentage, 2) AS immediate_percentage
FROM Total AS t