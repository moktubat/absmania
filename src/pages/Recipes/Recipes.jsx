import AllRecipes from "./AllRecipes";
import Featured from "./Featured";

const Recipes = () => {
  return (
    <div>
      <div className="mx-16 pt-16 pb-16">
        <Featured></Featured>
        <AllRecipes></AllRecipes>
      </div>
    </div>
  );
};

export default Recipes;
