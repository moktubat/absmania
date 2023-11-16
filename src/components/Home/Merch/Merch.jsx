import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import bag from "../../../assets/bag.jpg";
import pant from "../../../assets/pant.jpg";
import bottle from "../../../assets/bottle.webp";
import tshirt from "../../../assets/tshirt.jpg";
import hoodie from "../../../assets/hoodie.jpg";
import supplement from "../../../assets/supplement.jpg";
import equipment from "../../../assets/equipment.jpg";
import gymcouple from "../../../assets/gymcouple.jpg";

const products = [
  { id: 1, image: bag, category: "Bags" },
  { id: 2, image: pant, category: "Pants" },
  { id: 3, image: bottle, category: "Bottles" },
  { id: 4, image: tshirt, category: "T-shirts" },
  { id: 5, image: hoodie, category: "Hoodies" },
  { id: 6, image: supplement, category: "Supplements" },
  { id: 7, image: equipment, category: "Equipments" },
  { id: 8, image: gymcouple, category: "Gym Wear" },
];

const Merch = () => {
  return (
    <div className="mx-16 my-16">
      <div className="flex items-center justify-between my-16">
        <h1 className="text-[#FFED00] text-2xl font-semibold">
          ///Get Our Merch
        </h1>
        <Link to="/store" className="btn capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
          View All Products
        </Link>
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
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30 rounded-xl"
            >
              <div className="h-[324px]">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={product.image}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] md:translate-y-[60%] flex-col items-center justify-center px-8 mb-3 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-2xl font-semibold text-white mb-10">
                  {product.category}
                </h1>
                <div className="">
                  <Link to="/">
                    <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-transparent text-white border-[#FFED00] text-xl rounded-4xl">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Merch;
