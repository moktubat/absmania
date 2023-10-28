import { BsCalendarEvent } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";
import moment from "moment";
import { useLoaderData } from "react-router-dom";

const ViewSingleBlog = () => {
  const blog = useLoaderData();
  const {imageUrl, blogTime, authorName, blogTitle, description} = blog;
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="m-16">
        <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-[#FFED00]">
          Blog
        </h1>

        <div className="flex flex-col md:flex-row gap-10 container mx-auto my-20 items-start justify-center">
          <div className="w-full md:w-3/5">
            <img src={imageUrl} alt="Blog Photo" className="w-full" />
            <div className="py-4 flex items-center gap-10 border-b border-black">
              <p className="inline-flex items-center gap-1 text-black font-semibold text-sm md:text-base">
                <BsCalendarEvent className=" text-gray-400" />
                {moment(blogTime).format("Do MMM, YYYY- hh:m a")}
              </p>
              <p className="inline-flex items-center gap-1 text-black font-semibold text-sm md:text-base">
                <PiUserCircle className="text-xl text-gray-400" />
                {authorName}
              </p>
            </div>

            <div className="my-10">
              <h1 className="text-black text-lg md:text-xl font-signature mb-8">
                {blogTitle}
              </h1>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex items-center gap-5 border-b border-black pb-10">
              <button className="px-3 py-1 bg-white hover:bg-[#ED0058] text-black hover:text-white border border-black hover:border-[#ED0058] rounded-md transition-all ease-in-out duration-300">
                News
              </button>
              <button className="px-3 py-1 bg-white hover.bg-[#ED0058] text-black hover.text-white border border-black hover.border-[#ED0058] rounded-md transition-all ease-in-out duration-300">
                Blog
              </button>
              <button className="px-3 py-1 bg-white hover.bg-[#ED0058] text-black hover.text-white border border-black hover.border-[#ED0058] rounded-md transition-all ease-in-out duration-300">
                Tips
              </button>
            </div>
            <div className="mt-10">
              <h1 className="text-black text-lg md:text-xl font-signature mb-10">
                Related Posts
              </h1>
            </div>
          </div>
          <div className="md:w-2/5 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewSingleBlog;
