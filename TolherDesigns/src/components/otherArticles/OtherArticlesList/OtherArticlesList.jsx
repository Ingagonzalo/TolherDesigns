import OtherArticle from "../OtherArticles/OtherArticle";

const OtherArticlesList = ({ data = [] }) => {
  return (
    <div className="OtherArticlesList">
      {data.map((article) => (
        <OtherArticle
          key={article.id}
          image={article.imageId}
          description={article.description}
          price={article.price}
          title={article.title}
          category={article.categoryId}
          id={article.id}
        />
      ))}
    </div>
  );
};

export default OtherArticlesList;
