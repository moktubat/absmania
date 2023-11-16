
const CategoryList = ({ categories, onSelectCategory }) => {

    return (
        <div>
            <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="cursor-pointer hover:underline"
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
        </div>
    );
};

export default CategoryList;