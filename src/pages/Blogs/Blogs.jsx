import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../api/fetch";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(1);

  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data));
  }, []);

  const blogsPerPage = 3;
  const indexOfLastBlog = currentBlog * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentBlog(i)}
          className={`px-3 py-1 rounded-md ${
            currentBlog === i
              ? "bg-[#FFED00] text-black"
              : "bg-black text-[#FFED00] border hover:border-[#FFED00]"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div className="m-16">
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 my-8">
          {/* <!-- post cards --> */}
          <div className="w-full lg:w-2/3">
            {currentBlogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog._id}`}
                className="rounded-lg w-full lg:flex mb-5 border border-[#FFED00]"
              >
                <div
                  className="h-52 lg:w-56 flex-none bg-cover text-center overflow-hidden opacity-75 rounded-l-lg"
                  style={{
                    backgroundImage: `url(${blog.imageUrl})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  title="deit is very important"
                ></div>
                <div className="bg-black pt-2 hover:bg-[#FFED00] text-white hover:text-black transition duration-500 rounded-r-lg px-4 flex flex-col justify-between leading-normal">
                  <div>
                    <h1 className="mt-3 md:mt-0 font-bold text-2xl mb-2">
                      {blog.blogTitle}
                    </h1>
                    <p className="text-base">
                      {blog.description.slice(0, 300)}...
                    </p>
                  </div>
                  <div className="flex mb-3">
                    <img
                      src={blog.authorImg}
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm capitalize">
                        {blog.authorName}
                      </p>
                      <p className="text-xs">
                        {" "}
                        {moment(blog.blogTime).format(
                          "Do MMM, YYYY- hh:m a"
                        )}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex justify-center pb-8 items-center space-x-2">
              <button
                onClick={() => setCurrentBlog(currentBlog - 1)}
                disabled={currentBlog === 1}
                className="px-3 py-1 rounded-md bg-white hover:bg-[#FFED00]"
              >
                Previous
              </button>
              {renderPageNumbers()}
              <button
                onClick={() => setCurrentBlog(currentBlog + 1)}
                disabled={currentBlog === totalPages}
                className="px-3 py-1 rounded-md bg-white hover:bg-[#FFED00]"
              >
                Next
              </button>
            </div>
          </div>

          {/* <!-- right sidebar --> */}
          <div className="w-full lg:w-1/3 px-3">
            {/* <!-- topics --> */}
            <div className="mb-4 text-white">
              <h5 className="font-bold text-lg uppercase text-[#FFED00] px-1 mb-2">
                {" "}
                Popular Topics{" "}
              </h5>
              <ul>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a href="#" className="flex items-center cursor-pointer">
                    <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                    Nutrition
                    <span className="ml-auto">23 articles</span>
                    <i className="bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a href="#" className="flex items-center cursor-pointer">
                    <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                    Food & Diet
                    <span className="ml-auto">18 articles</span>
                    <i className="bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a href="#" className="flex items-center cursor-pointer">
                    <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                    Workouts
                    <span className="ml-auto">34 articles</span>
                    <i className="bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a href="#" className="flex items-center cursor-pointer">
                    <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                    Immunity
                    <span className="ml-auto">9 articles</span>
                    <i className="bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- subscribe --> */}
            <div className="p-1 mt-4 mb-4 text-white">
              <h5 className="font-bold text-lg uppercase text-[#FFED00] mb-2">
                {" "}
                Subscribe{" "}
              </h5>
              <p>
                Subscribe to our newsletter. We deliver the best health related
                articles to your inbox
              </p>
              <input
                placeholder="Your email address"
                className="text-white bg-black rounded-t hover:outline-none focus:outline-none p-2 w-full mt-4 border border-[#FFED00]"
              />
              <button className="px-4 py-2 bg-[#FFED00] text-black rounded-b w-full font-bold capitalize tracking-wide">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
