<h1>Exercicios 21.2</h1>

Restaurei o banco de dados pixar.sql (esta commitado aqui) e executei os seguintes exercícios

1 - Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
<pre><code>
SELECT 
    mv.title, bo.domestic_sales, bo.international_sales
FROM
    Pixar.Movies AS mv
        INNER JOIN
    Pixar.BoxOffice AS bo ON bo.movie_id = mv.id;

</pre></code>

2 - Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
<pre><code>
SELECT 
    mv.title,
    (bo.domestic_sales + bo.international_sales) AS 'sales'
FROM
    Pixar.Movies AS mv
        INNER JOIN
    Pixar.BoxOffice AS bo ON bo.movie_id = mv.id
WHERE
    bo.domestic_sales < bo.international_sales;
    
</pre></code>

3 - Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
<pre><code>
SELECT 
    mv.title, bo.rating
FROM
    Pixar.Movies AS mv
        INNER JOIN
    Pixar.BoxOffice AS bo ON bo.movie_id = mv.id
ORDER BY rating DESC;
    
</pre></code>

4 - Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

<pre><code>
SELECT 
    th.name,
    th.location,
    mv.title,
    mv.director,
    mv.year,
    mv.length_minutes
FROM
    Pixar.Theater AS th
        LEFT JOIN
    Pixar.Movies AS mv ON th.id = mv.theater_id
ORDER BY th.name;
    
</pre></code>

5 - Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

<pre><code>
SELECT 
    th.id,
    th.name,
    th.location,
    mv.title,
    mv.director,
    mv.year,
    mv.length_minutes
FROM
    Pixar.Theater AS th
        RIGHT JOIN
    Pixar.Movies AS mv ON th.id = mv.theater_id
ORDER BY th.name;
    
</pre></code>