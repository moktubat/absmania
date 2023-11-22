const CategoryList = ({ categories, onCategoryClick }) => {

  const getCategoryDisplayName = (category) => {
    const categoryMappings = {
      hot: "Hot Collection",
      tshirts: "T-Shirts",
      pants: "Pants",
      bottles: "Bottles",
      bags: "Bags",
      hoodies: "Hoodies",
      supplements: "Supplements",
      equipments: "Equipments",
      gymwears: "Gym-Wears",
    };

    // If there's a mapping for the category, use the mapped name; otherwise, use the original name
    return categoryMappings[category] || category;
  };

  return (
    <div>
      <div className="p-4">
        <h2 className="text-[#FFED00] text-2xl font-semibold mb-6">Categories</h2>
        <ul className="space-y-2">
        {categories.map((category, index) => (
          <li className="text-white hover:cursor-pointer" key={index} onClick={() => onCategoryClick(category)}>
            {getCategoryDisplayName(category)}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
