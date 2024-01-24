"use client";
import React, { useState, useEffect } from "react";

interface Article {
  article: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://cdn.builder.io/api/v3/content/articles?apiKey=6e139f4f71454a88b3f01ee85b1a35b5"
      )
        .then((response) => {
          if (!response.ok) {
            // Handle the error, you can throw an exception or handle it in another way
            console.error(response.status);
          }

          // If you need to access the response body, you can do the following:
          return response.json();
        })
        .then((data) => {
          setArticles(data.results[0].data.articles);
        })
        .catch((error) => {
          // Handle fetch error
          console.error(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.article.id}>
          <h2>{article.article.title}</h2>
          <img src={article.article.image} alt={article.article.title} />
          <p>{article.article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
