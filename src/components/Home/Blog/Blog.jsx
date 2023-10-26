import moment from "moment/moment";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 4)));
  }, []);
  return (
    <div>
      <div className="mx-16 my-16">
        <div className="flex items-center justify-between my-16">
          <h1 className="text-[#FFED00] text-2xl font-semibold">///Blogs</h1>
          <button className="btn capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
            View All Blogs
          </button>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 space-y-4 md:space-y-0">
              {blogs.slice(0, 5).map((blog) => (
                <div
                  key={blog._id}
                  className="px-2 pt-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
                >
                  <div className="relative">
                    <img
                      className="w-full md:h-[190px] rounded-xl object-cover object-center"
                      src={blog?.imageUrl}
                      alt="Colors"
                      loading="lazy"
                    />
                    <p className="absolute top-0 right-0 bg-[#FFED00] text-black font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
                      {moment(blog?.blogTime).format("Do MMM, YYYY")}
                    </p>
                  </div>
                  <h1 className="mt-4 text-white text-2xl font-bold cursor-pointer">
                    {blog.blogTitle}
                  </h1>
                  <div className="my-4 text-white">
                    {blog.description.slice(0, 100)}
                    ...
                    <div className="my-4 flex space-x-1 items-center">
                      <span className="text-[#FFED00]">Category:</span>
                      <p>{blog.category}</p>
                    </div>
                    <button className="w-full btn bg-[#FFED00] text-black border-black hover:bg-black hover:text-[#FFED00] hover:border-[#FFED00]">
                      Read full blog
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
