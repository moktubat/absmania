import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from "./Workout.css";
import workout1 from "../../../assets/workout1.jpg";
import workout2 from "../../../assets/workout2.jpg";
import workout3 from "../../../assets/workout3.jpg";
import workout4 from "../../../assets/workout4.jpg";
import workout5 from "../../../assets/workout5.jpg";

const Workout = () => {
  return (
    <div>
      <div className="my-16 mx-16 overflow-hidden">
        <h1 className="text-white text-4xl font-bold pb-6">
          Workout Programs
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={4}
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
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="text-center relative">
            <img
              src={workout1}
              className="w-full md:w-[210px] h-full md:h-[460px] object-cover object-center bg-black opacity-40 bg-opacity-100"
              alt=""
            />
            <p
              className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold"
              id="rotate-text"
            >
              Beginner Friendly
            </p>
            <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
              Start Today
            </button>
          </SwiperSlide>
          <SwiperSlide className="text-center relative">
            <img
              src={workout2}
              className="w-full md:w-[210px] h-full md:h-[460px] object-cover object-center bg-black opacity-40 bg-opacity-100"
              alt=""
            />
            <p
              className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold"
              id="rotate-text"
            >
              Moderate to Advanced
            </p>
            <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
              Start Today
            </button>
          </SwiperSlide>
          <SwiperSlide className="text-center relative">
            <img
              src={workout3}
              className="w-full md:w-[210px] h-full md:h-[460px] object-cover object-center bg-black opacity-40 bg-opacity-100"
              alt=""
            />
            <p
              className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold"
              id="rotate-text"
            >
              Weight Loss
            </p>
            <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
              Start Today
            </button>
          </SwiperSlide>
          <SwiperSlide className="text-center relative">
            <img
              src={workout4}
              className="w-full md:w-[210px] h-full md:h-[460px] object-cover object-center bg-black opacity-40 bg-opacity-100"
              alt=""
            />
            <p
              className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold"
              id="rotate-text"
            >
              No Equipment
            </p>
            <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
              Start Today
            </button>
          </SwiperSlide>

          <SwiperSlide className="text-center relative">
            <img
              src={workout5}
              className="w-full md:w-[210px] h-full md:h-[460px] object-cover object-center bg-black opacity-40 bg-opacity-100"
              alt=""
            />
            <p
              className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold"
              id="rotate-text"
            >
              Strength Training
            </p>
            <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
              Start Today
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Workout;
