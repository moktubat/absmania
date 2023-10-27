import { useEffect, useState } from "react";
import { getAllBlogs } from "../../api/fetch";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(1);
  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="m-16">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
