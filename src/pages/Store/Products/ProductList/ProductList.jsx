import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import { addToCart } from "../../../../api/fetch";
import Swal from "sweetalert2";

const ProductList = ({ products }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleAddToCart = (user, product) => {
    console.log(product);
    if (user && user.email) {
      addToCart(user, product)
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product added to cart",
              showConfirmButton: false,
            });
          }
        });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please login first",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {
            state: { from: location },
          });
        }
      });
    }
  };

  return (
    <div className="py-4 w-full">
      <h2 className="text-right text-[#FFED00] text-2xl font-semibold mb-6">
        Products
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentProducts.map((product, index) => (
          <li key={index} className="w-full">
            <div className="w-[350px] h-[500px] bg-white rounded-lg max-w-sm border">
              <div>
                <img
                  loading="lazy"
                  className="w-[350px] h-[320px] object-cover rounded-t-lg p-1"
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
                  <Link
                    onClick={() => handleAddToCart(product)}
                    className="text-[#FFED00] bg-black hover:bg-transparent border hover:text-black hover:border-black font-medium rounded-lg px-5 py-2.5 text-center"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center">
        {/* Pagination buttons */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-2 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-[#FFED00] text-black text-lg"
                : "bg-white text-black hover:bg-[#FFED00]"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
