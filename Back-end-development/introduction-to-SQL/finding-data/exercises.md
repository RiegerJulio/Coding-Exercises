<h1>Exercicios 20.2</h1>

Para realizar os exercícios do 1 ao 15, restaure o banco de dados seguinte.

<pre><code>
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
</code></pre>

1 - Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
<pre><code>
  USE Scientists;
  SELECT 'This is SQL Exercise, Pratice and Solution';

</pre></code>
2 - Escreva uma query para exibir três números em três colunas.
<pre><code>
  SELECT 1, 2, 3;

</pre></code>
3 - Escreva uma query para exibir a soma dos números 10 e 15. 
<pre><code>
  SELECT 10 + 15;

</pre></code>
4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
<pre><code>
  SELECT 20 * 2;

</pre></code>
5 - Escreva uma query para exibir todas as informações de todos os cientistas.
<pre><code>
  SELECT * FROM Scientists;
  
</pre></code>
6 - Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
<pre><code>
  SELECT 
    Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho'
  FROM
    Projects;

</pre></code>
7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
<pre><code>
  SELECT 
    Name
  FROM
    Scientists
  ORDER BY Name ASC;

</pre></code>
8 - Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
<pre><code>
  SELECT 
  	Name
  FROM
    Projects
  ORDER BY Name DESC;

</pre></code>
9 - Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
<pre><code>
  SELECT 
	concat('O projeto ', Name, 'precisou de ', Hours, 'para ser concluido.')
  FROM
    Projects;

</pre></code>
10 - Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
<pre><code>
  SELECT 
	Name, Hours
  FROM
    Projects
    order by Hours DESC LIMIT 3;

</pre></code>
11 - Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
<pre><code>
  SELECT DISTINCT
    Project
  FROM
    AssignedTo;

</pre></code>
12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
<pre><code>
  SELECT 
    Name
  FROM
    Projects
  ORDER BY Hours
  LIMIT 1;

</pre></code>
13 - Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
<pre><code>
  SELECT 
    Name
  FROM
    Projects
  ORDER BY Hours DESC
  LIMIT 1 OFFSET 1;

</pre></code>
14 - Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
<pre><code>
  SELECT 
    *
  FROM
    Projects
  ORDER BY Hours ASC
  LIMIT 5;

</pre></code>
15 - Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de 
cientistas.
<pre><code>
  SELECT 
    CONCAT('Existem ',
            COUNT(name),
            ' cientistas na tabela Scientists.') AS 'Quantidade de cientistas'
  FROM
    Scientists;

</pre></code>