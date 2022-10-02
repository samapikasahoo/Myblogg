import React from "react";
import articles from "./article-content";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

const ArticlesList = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="sm:text-4xl text-2xl font-bold pt-6 text-purple-800 text-center">
        Don't miss these Destinations
      </h1>
      <div className="container py-6 mx-auto">
        <div className="flex flex-wrap m-4">
          <Articles articles={articles} />
        </div>
      </div>
      <div className="pt-13"><Footer/></div>
    </div>
  );
};

export default ArticlesList;
