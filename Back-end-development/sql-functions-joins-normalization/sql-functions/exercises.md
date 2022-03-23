<h1>Exercicios 21.1</h1>

1 -

<pre><code>
SELECT 
    MAX(salary)
FROM
    hr.employees;

</pre></code>

2 - 

<pre><code>
SELECT 
    MAX(salary) - MIN(salary)
FROM
    hr.employees;

</pre></code>

3 - 

<pre><code>
SELECT 
    JOB_ID, AVG(salary) AS 'media'
FROM
    hr.employees
GROUP BY job_id
ORDER BY 'media' DESC;

</pre></code>

4 - 

<pre><code>
SELECT 
    SUM(salary)
FROM
    hr.employees;

</pre></code>

5 - 

<pre><code>
SELECT 
    MAX(salary) AS 'Maximum Salary',
    MIN(salary) AS 'Minimum Salary',
    SUM(salary) AS 'Sum of Salaries',
    ROUND(AVG(salary), 2) AS 'Average Salary'
FROM
    hr.employees;

</pre></code>

5 - 

<pre><code>
SELECT 
    COUNT(*)
FROM
    hr.employees
WHERE
    job_id = 'it_prog';

</pre></code>

6 - 

<pre><code>
SELECT 
    COUNT(*)
FROM
    hr.employees
WHERE
    job_id = 'it_prog';

</pre></code>

7 - 

<pre><code>
SELECT 
    job_id, SUM(salary) AS 'total of id'
FROM
    hr.employees
GROUP BY job_id;

</pre></code>

8 - 

<pre><code>
SELECT 
    job_id, SUM(salary) AS 'total of id'
FROM
    hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

</pre></code>

9 - 

<pre><code>
SELECT 
    job_id, AVG(salary) AS 'average salaries'
FROM
    hr.employees
WHERE
    job_id <> 'it_prog'
GROUP BY job_id
ORDER BY 'average salaries' DESC;

</pre></code>

10 - 

<pre><code>
SELECT 
    department_id,
    AVG(salary) AS 'average',
    COUNT(*) AS 'counter'
FROM
    hr.employees
GROUP BY department_id
HAVING `counter` > 10;

</pre></code>

11 - 

<pre><code>
UPDATE hr.employees 
SET 
    phone_number = REPLACE(phone_number, '515', '777')
WHERE
    phone_number LIKE '515%';

</pre></code>

12 - 

<pre><code>
SELECT 
    first_name
FROM
    hr.employees
WHERE
    LENGTH(first_name) >= 8; 

</pre></code>

13 - 

<pre><code>
SELECT 
    employee_id, first_name, LEFT(HIRE_DATE, 4) AS 'hiring year'
FROM
    hr.employees;

</pre></code>

14 - 

<pre><code>
SELECT 
    employee_id,
    first_name,
    DAY(HIRE_DATE) AS 'hiring day of month'
FROM
    hr.employees;

</pre></code>

15 - 

<pre><code>
SELECT 
    employee_id,
    first_name,
    MONTH(HIRE_DATE) AS 'hiring day of month'
FROM
    hr.employees;


</pre></code>

16 - 

<pre><code>
SELECT 
    UCASE(first_name)
FROM
    hr.employees;

</pre></code>

17 - 

<pre><code>
SELECT 
    LAST_NAME, hire_date
FROM
    hr.employees
WHERE
    MONTH(hire_date) = 7
        AND YEAR(hire_date) = 1987;

</pre></code>

18 - 

<pre><code>
SELECT 
    first_name,
    LAST_NAME,
    DATEDIFF(CURRENT_DATE(), hire_date) AS 'days at company'
FROM
    hr.employees

</pre></code>