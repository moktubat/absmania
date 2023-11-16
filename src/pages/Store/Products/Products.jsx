import { useState } from "react";
import CategoryList from "./CategoryList/CategoryList";
import ProductList from "./ProductList/ProductList";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
//   const [loading, setLoading] = useState(true);
  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ];

  const products = [
    { id: 1, name: "Product 1", categoryId: 1 },
    { id: 2, name: "Product 2", categoryId: 1 },
    { id: 3, name: "Product 3", categoryId: 2 },
    { id: 4, name: "Product 4", categoryId: 2 },
    { id: 5, name: "Product 5", categoryId: 3 },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : products;

//   if (loading) {
//     return (
//       <div className="w-1/4 mx-auto my-24">
//         <img
//           src="https://media.tenor.com/2JOBy0LSoX8AAAAi/toto-gym.gif"
//           className="w-1/3 h-1/3 mx-auto "
//           alt=""
//         />
//       </div>
//     );
//   }
  return (
    <div className="flex">
      <CategoryList
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Products;
