import React from "react";
import { HomeGrid } from "./HomeGrid";

function Recipe({ title, calories, image }) {
  return (
    <HomeGrid>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt={title} />
    </HomeGrid>
  );
}

export default Recipe;
