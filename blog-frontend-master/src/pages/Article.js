import "whatwg-fetch";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import Articles from "../components/Articles";
import { CommentsList } from "../components/CommentsList";
import { AddCommentForm } from "../components/AddCommentForm";
import Footer from "../components/Footer";

const Article = () => {
    const name = useParams();
    const article = articles.find((article) => article.name === name.name);
    
    const [articleInfo, setArticleInfo] = useState({ comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name.name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        };
        fetchData();
    }, [name.name]);
    
    
    if(!article) return <h1>Article does not exist</h1>;
    const otherArticles = articles.filter((article) => article.name !== name.name);

  return (
    <div className="px-24 bg-gray-100">
      <h1 className="sm:text-4xl text-2xl font-bold pt-9 text-gray-900 text-center text-purple-800 pb-4">
      {article.title}
      </h1>
      {article.content.map((paragraph, index) =>
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
            {paragraph}
        </p>
      )}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />


      <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900 py-2 ">
        Other Articles:
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
      <div className="pt-8"><Footer/></div>
    </div>
  );
};

export default Article;
