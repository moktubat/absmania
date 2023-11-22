const ProductList = ({ products }) => {
  return (
    <div className="py-4 w-full">
      <h2 className="text-right text-[#FFED00] text-2xl font-semibold mb-6">
        Products
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <li key={index} className="w-full">
            <div className="w-[350px] h-[500px] bg-white rounded-lg max-w-sm">
              <div>
                <img
                  className="w-[350px] h-[350px] object-cover rounded-t-lg p-2"
                  src={product.image}
                  alt="product image"
                />
              </div>
              <div className="px-2 pb-5">
                <h3 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
                  {product.name}
                </h3>
                <h3 className="text-gray-900 tracking-tight py-2 dark:text-white">
                  {product.description}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
