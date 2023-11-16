
const ProductList = ({ products }) => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  };

export default ProductList;