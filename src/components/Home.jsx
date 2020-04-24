import React, { useState, useEffect } from "react";
import RecipeList from "./Recipe";
import Recipe from "./Recipe";

import styled from "styled-components";

const HomeStyled = styled.div`
  border: 2x solid black;
  margin: 10px 30px 30px 10px;
`;
function Home() {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=che&app_id=007adabf&app_key=712d67ca5d1c3571fdd3cdeed5f996a1`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <div className="recipes-card">
      <HomeStyled>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </HomeStyled>
    </div>
  );
}

export default Home;
