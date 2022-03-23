<h1>Exercicios 21.1</h1>

Restaurei o banco de dados hr-cebf8bc2a5bb252bc470ae28943604c6.sql (esta commitado aqui) e executei os seguintes exercícios

1 - Escreva uma query que exiba o maior salário da tabela.

<pre><code>
SELECT 
    MAX(salary)
FROM
    hr.employees;

</pre></code>

2 - Escreva uma query que exiba a diferença entre o maior e o menor salário.

<pre><code>
SELECT 
    MAX(salary) - MIN(salary)
FROM
    hr.employees;

</pre></code>

3 - Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

<pre><code>
SELECT 
    JOB_ID, AVG(salary) AS 'media'
FROM
    hr.employees
GROUP BY job_id
ORDER BY 'media' DESC;

</pre></code>

4 - Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

<pre><code>
SELECT 
    SUM(salary)
FROM
    hr.employees;

</pre></code>

5 - Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

<pre><code>
SELECT 
    MAX(salary) AS 'Maximum Salary',
    MIN(salary) AS 'Minimum Salary',
    SUM(salary) AS 'Sum of Salaries',
    ROUND(AVG(salary), 2) AS 'Average Salary'
FROM
    hr.employees;

</pre></code>

6 - Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

<pre><code>
SELECT 
    COUNT(*)
FROM
    hr.employees
WHERE
    job_id = 'it_prog';

</pre></code>

7 - Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).

<pre><code>
SELECT 
    job_id, SUM(salary) AS 'total of id'
FROM
    hr.employees
GROUP BY job_id;

</pre></code>

8 - Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).

<pre><code>
SELECT 
    job_id, SUM(salary) AS 'total of id'
FROM
    hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

</pre></code>

9 - Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).

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

10 - Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

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

11 - Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .

<pre><code>
UPDATE hr.employees 
SET 
    phone_number = REPLACE(phone_number, '515', '777')
WHERE
    phone_number LIKE '515%';

</pre></code>

12 - Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

<pre><code>
SELECT 
    first_name
FROM
    hr.employees
WHERE
    LENGTH(first_name) >= 8; 

</pre></code>

13 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).

<pre><code>
SELECT 
    employee_id, first_name, LEFT(HIRE_DATE, 4) AS 'hiring year'
FROM
    hr.employees;

</pre></code>

14 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

<pre><code>
SELECT 
    employee_id,
    first_name,
    DAY(HIRE_DATE) AS 'hiring day of month'
FROM
    hr.employees;

</pre></code>

15 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).

<pre><code>
SELECT 
    employee_id,
    first_name,
    MONTH(HIRE_DATE) AS 'hiring day of month'
FROM
    hr.employees;


</pre></code>

16 - Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

<pre><code>
SELECT 
    UCASE(first_name)
FROM
    hr.employees;

</pre></code>

17 - Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

<pre><code>
SELECT 
    LAST_NAME, hire_date
FROM
    hr.employees
WHERE
    MONTH(hire_date) = 7
        AND YEAR(hire_date) = 1987;

</pre></code>

18 - Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .

<pre><code>
SELECT 
    first_name,
    LAST_NAME,
    DATEDIFF(CURRENT_DATE(), hire_date) AS 'days at company'
FROM
    hr.employees

</pre></code>