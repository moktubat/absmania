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
        <div className="mb-4 md:mb-0 w-full h-96 max-w-screen-md mx-auto relative">
          <div className="relative overflow-hidden">
            <img
              src={imageUrl}
              className="left-0 top-0 w-full md:w-[760px] h-full md:h-[420px] z-0 object-cover rounded"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          </div>
          <div className="px-4 absolute bottom-0 left-0 z-20">
            <a
              href={_id}
              className="px-4 py-1 bg-[#FFED00] text-black font-bold inline-flex items-center justify-center mb-2 rounded"
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
                <p className="font-bold text-[#FFED00] text-sm">{authorName}</p>
                <p className="font-bold text-[#FFED00] text-xs">
                  {" "}
                  {moment(blogTime).format("Do MMM, YYYY- hh:m a")}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-20 text-gray-200 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewSingleBlog;
