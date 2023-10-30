import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getAllWorkOuts } from "../../../api/fetch";
import { Link } from "react-router-dom";

const Workout = () => {
  const [workOuts, setWorkOuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllWorkOuts()
      .then((data) => setWorkOuts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-1/4 mx-auto my-24">
        <img
          src="https://media.tenor.com/2JOBy0LSoX8AAAAi/toto-gym.gif"
          className="w-1/3 h-1/3 mx-auto "
          alt=""
        />
      </div>
    );
  }

  return (
    <div>
      <div className="my-16 mx-16 overflow-hidden">
        <div>
          <div className="flex items-center justify-between mb-16">
            <h1 className="text-[#FFED00] text-2xl font-semibold">
              ///Workout Programs
            </h1>
            <Link
              to="/workouts"
              className="btn capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl"
            >
              View All Programs
            </Link>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={4}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 35,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {workOuts.map((workOut) => (
              <SwiperSlide key={workOut._id} className="text-center mx-auto">
                <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group rounded-xl">
                  <div className="">
                    <img
                      className="object-cover w-full h-1/2 md:w-[290px] md:h-[430px] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={workOut.image}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] md:translate-y-[75%] flex-col items-center justify-center px-8 mb-3 gap-y-8 hover:gap-0 text-center transition-all duration-300 group-hover:translate-y-0">
                    <h1 className="text-2xl font-semibold text-white">
                      {workOut.name}
                    </h1>
                    <p className="py-8 text-white text-lg">
                      {workOut.description}
                    </p>
                    <div className="">
                      <Link to="/">
                        <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-transparent text-white border-[#FFED00] text-xl rounded-4xl">
                          View More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
                  Start Today
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Workout;
