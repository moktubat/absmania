const ProductList = ({ products }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Products</h2>
      <ul className="space-y-2">
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
