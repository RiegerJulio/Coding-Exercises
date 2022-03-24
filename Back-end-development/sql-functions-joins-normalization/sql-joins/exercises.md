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