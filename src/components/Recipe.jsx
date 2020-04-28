import React from "react";
import { HomeGrid } from "./HomeGrid";
import "./Recipe.scss";

function Recipe({ title, calories, image }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card-group">
        <div className="card  h-100">
          <img src={image} alt={title} class="card-img-top" />

          <div class="card-block">
            <h3 class="card-title">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
