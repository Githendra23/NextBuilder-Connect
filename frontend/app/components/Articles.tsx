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
    <div className="flex flex-row flex-wrap justify-center">
      {articles.map((article) => (
        <div
          key={article.article.id}
          className="m-4 w-[48rem] bg-white border border-transparent rounded-sm shadow-lg"
        >
          <div className="flex flex-col justify-center items-center h-full">
            <div className="h-48 w-full relative">
              <img
                className="object-cover w-full h-full mb-3"
                src={article.article.image}
                alt={article.article.title}
              />
            </div>

            <div className=" px-5">
              <h2 className="mb-5 text-2xl">{article.article.title}</h2>
              <p className="mb-10 w-full text-justify">
                {article.article.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
