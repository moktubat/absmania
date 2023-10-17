import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import merch1 from "../../../assets/merch1.png";
import merch2 from "../../../assets/merch2.png";
import merch3 from "../../../assets/merch3.png";
import merch4 from "../../../assets/merch4.png";
import { Link } from "react-router-dom";
const Merch = () => {
  return (
    <div className="mx-16 my-16">
      <div className="flex items-center justify-between my-16">
        <h1 className="text-[#FFED00] text-2xl font-semibold">
          /// GET OUR MERCH
        </h1>
        <button className="btn  capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
          View All Products
        </button>
      </div>
      <div>
        <div>
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30 rounded-xl">
              <div className="">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={merch1}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] md:translate-y-[60%] flex-col items-center justify-center px-8 mb-3 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-2xl font-semibold text-white mb-8">Bag</h1>

                <div className="">
                  <Link to="/">
                  <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-transparent text-white border-[#FFED00] text-xl rounded-4xl">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30 rounded-xl">
              <div className="">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={merch2}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] md:translate-y-[60%] flex-col items-center justify-center px-8 mb-3 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-2xl font-semibold text-white mb-8">Pant</h1>

                <div className="">
                  <Link to="/">
                  <button className="btn mt-6 capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-transparent text-white border-[#FFED00] text-xl rounded-4xl">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30 rounded-xl">
              <div className="">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={merch3}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] md:translate-y-[60%] flex-col items-center justify-center px-8 mb-3 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-2xl font-semibold text-white mb-8">
                  Bottle
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

            <SwiperSlide className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30 rounded-xl">
              <div className="">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={merch4}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] md:translate-y-[60%] flex-col items-center justify-center px-8 mb-3 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-2xl font-semibold text-white mb-8">
                  T-shirt
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Merch;
