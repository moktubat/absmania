import moment from "moment";
import { useLoaderData } from "react-router-dom";

const ViewSingleBlog = () => {
  const blog = useLoaderData();
  const {
    _id,
    imageUrl,
    category,
    blogTime,
    authorName,
    authorImg,
    blogTitle,
    description,
  } = blog;
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="m-16">
        <div
          className="mb-4 md:mb-0 w-full h-96 max-w-screen-md mx-auto relative"
        >
          <img
            src={imageUrl}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href={_id}
              className="px-4 py-1 bg-[#FFED00] text-black font-bold inline-flex items-center justify-center mb-2"
            >
              {category}
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {blogTitle}
            </h2>
            <div className="flex mt-3">
              <img
                src={authorImg}
                className="h-10 w-10 rounded-full mr-2 object-cover border border-[#FFED00]"
              />
              <div>
                <p className="font-bold text-[#FFED00] text-sm">
                  {authorName}
                </p>
                <p className="font-bold text-[#FFED00] text-xs">
                  {" "}
                  {moment(blogTime).format("Do MMM, YYYY- hh:m a")}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-200 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewSingleBlog;
