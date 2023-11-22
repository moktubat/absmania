import { useEffect, useState } from "react";
import CategoryList from "./CategoryList/CategoryList";
import ProductList from "./ProductList/ProductList";
import { getAllShopProducts } from "../../../api/fetch";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("hot");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllShopProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return (
      <div className="w-1/4 mx-auto my-24">
        <img
          src="https://media.tenor.com/2JOBy0LSoX8AAAAi/toto-gym.gif"
          className="w-1/3 h-1/3 mx-auto "
          alt=""
        />
      </div>
    );
  }
  return (
    <div className="m-16">
      <div className="md:flex">
        <CategoryList
          categories={categories}
          onCategoryClick={handleCategoryClick}
          selectedCategory={selectedCategory}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Products;
