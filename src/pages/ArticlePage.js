import { useParams } from "react-router-dom";
import articles from "./ArticleContent";
import NotFoundPage from "./NotFoundPage";
const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  if (!article) return <NotFoundPage />;

  return (
    <div>
      <h1>{article.title}</h1>
      <div>
        {article.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
