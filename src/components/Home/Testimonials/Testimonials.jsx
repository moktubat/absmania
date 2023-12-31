import style from "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { useEffect, useState } from "react";
import { getAllTestimonials } from "../../../api/fetch";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTestimonials()
      .then((data) => setTestimonials(data))
      .finally(() => setLoading(false));
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className="pt-1 fitness_bg">
      <div className="md:mx-16 my-8">
        <div className="my-8">
          <h1 className="text-[#FFED00] text-2xl font-semibold">
            ///Testimonials
          </h1>
          <p className="text-3xl text-white font-bold">Our Client Reviews</p>
        </div>
        <Swiper
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Autoplay, Pagination]}
          className="md:h-96 h-[40rem] md:w-3/4"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img
                  src={testimonial.img}
                  alt="..."
                  className="h-32 rounded-xl"
                  loading=" lazy"
                />
                <div>
                  <p className="text-white sm:text-base text-sm">
                    {testimonial.review}
                  </p>
                  <Rating
                    className="py-3"
                    style={{ maxWidth: 100 }}
                    value={testimonial.rate}
                    readOnly
                  />
                  <h4 className="text-white text-xl font-medium">
                    {testimonial.name}
                  </h4>
                  <h5 className="text-white">{testimonial.profession}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
