import React from "react";
import './Item.css';
import { Link } from "react-router-dom";
import '../../boton/Boton.css'
const Item = ({ image, title, price, category, description, id }) => {
  return (
    <div className="containerItem">

      <div className="card">
        <div className="imageStock">
          <img src={image} alt="Guitarra" />
        </div>

        <div className="infoItem">
          <h2 className="title">{title}</h2>
        </div>
        <Link to={`/shop/${category}/${id}`}>
          <div className="container ">
            <button className="button type2 ">
              Ver más...
            </button>
          </div></Link>
      </div>
    </div>
  );
};

export default Item;

