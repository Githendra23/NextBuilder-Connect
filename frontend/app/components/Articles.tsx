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
          if (!response.ok) console.error(response.status);

          return response.json();
        })
        .then((data) => {
          setArticles(data.results[0].data.articles);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {articles.map((article) => (
        <div
          key={article.article.id}
          className="m-4 w-72 md:w-[48rem] bg-white border border-transparent rounded-md shadow-lg flex flex-col items-center"
        >
          <div className="h-auto md:h-96 w-full">
            <img
              className="object-cover w-full h-auto md:h-full mb-3 rounded-t-md"
              src={article.article.image}
              alt={article.article.title}
            />
          </div>

          <div className="pt-2 px-5">
            <h2 className="mb-5 sm:text-xl md:text-2xl text-lg">
              {article.article.title}
            </h2>

            <p className="mb-10 w-full text-justify text-xs md:text-base sm:text-sm">
              {article.article.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
