import { useEffect } from "react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import trainers_bg from "./Trainer.css";

const Trainer = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch("/public/trainers.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data));
  }, []);

  return (
    <div className="p-3 w-screen my-auto trainers_bg">
      <div className="mx-16 my-16">
        <div className="flex items-center justify-between my-16">
          <h1 className="text-[#FFED00] text-2xl font-semibold">///Trainers</h1>
          <button className="btn capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
            View All Trainers
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={4}
          loop={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6"
        >
          {trainers.map((trainer) => (
            <SwiperSlide
              key={trainer._id}
              className="grid items-center justify-center"
            >
              <div className="group relative cursor-pointer items-center justify-center rounded-xl overflow-hidden">
                <div className="md:h-96 md:w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={trainer.image}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-x-[85%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-x-0">
                  <div>
                    <h1 className="text-3xl font-bold text-white">
                      {trainer.name}
                    </h1>
                    <h4 className="font-com text-lg text-[#FFED00]">
                      {trainer.profession}
                    </h4>
                    <h5 className="flex justify-center items-center gap-1 pb-3">
                      <span>
                        <MdEmail className="text-[#FFED00]"></MdEmail>
                      </span>
                      <a href={trainer.email} className="text-white">
                        {trainer.email}
                      </a>
                    </h5>
                    <p className="mb-3 text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {trainer.shortBio}
                    </p>
                    <p className="text-white">
                      Number of classes: {trainer.classesCount}
                    </p>
                  </div>
                  <div className="flex gap-x-3 text-md my-3">
                    <FaFacebook className="text-[#FFED00] text-2xl"></FaFacebook>
                    <FaTwitter className="text-[#FFED00] text-2xl"></FaTwitter>
                    <FaInstagram className="text-[#FFED00] text-2xl"></FaInstagram>
                    <FaLinkedin className="text-[#FFED00] text-2xl"></FaLinkedin>
                  </div>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trainer;
