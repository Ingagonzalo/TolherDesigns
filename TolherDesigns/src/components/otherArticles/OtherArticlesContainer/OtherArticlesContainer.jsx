import "./OtherArticlesContainer.css";
import OtherArticlesList from "../OtherArticlesList/OtherArticlesList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../utils/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

const OtherArticlesContainer = () => {
  const { categoryId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const queryRef = !categoryId
      ? collection(db, "otherArticles")
      : query(collection(db, "items"), where("categoryId", "==", categoryId));

    getDocs(queryRef).then((res) => {
      const resultados = res.docs.map((doc) => {
        const newItem = {
          id: doc.id,
          ...doc.data(),
        };
        return newItem;
      });
      setData(resultados);
    });
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <div>
        {!data ? <h3>Cargando...</h3> : <OtherArticlesList data={data} />}
      </div>
    </div>
  );
};

export default OtherArticlesContainer;
