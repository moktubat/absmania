import { useEffect, useState } from "react";
import RecipesSlider from "./RecipesSlider";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Filter recipes by category
  const highProteinRecipes = recipes.filter((recipe) => recipe.category === "High-Protein");
  const lowCarbRecipes = recipes.filter((recipe) => recipe.category === "Low-Carb");
  const dairyFreeRecipes = recipes.filter((recipe) => recipe.category === "Dairy-Free");
  const vegetarianRecipes = recipes.filter((recipe) => recipe.category === "Vegetarian");

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <RecipesSlider recipes={highProteinRecipes} title="High Protein Recipes" />
          <RecipesSlider recipes={lowCarbRecipes} title="Low Carb Recipes" />
          <RecipesSlider recipes={dairyFreeRecipes} title="Dairy Free Recipes" />
          <RecipesSlider recipes={vegetarianRecipes} title="Vegetarian Recipes" />
        </div>
      )}
    </div>
  );
};

export default AllRecipes;