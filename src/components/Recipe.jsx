import React from "react";
import { HomeGrid } from "./HomeGrid";
import "./Recipe.scss";

function Recipe({ title, calories, image }) {
  return (
    <article className="recipe">
      <HomeGrid>
        <div className="img-container">
          <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
      </HomeGrid>
    </article>
  );
}

export default Recipe;
