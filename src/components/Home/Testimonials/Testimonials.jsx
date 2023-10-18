import avatar1 from "../../../assets/avatar1.jpg";
import avatar2 from "../../../assets/avatar2.jpg";
import avatar3 from "../../../assets/avatar3.jpg";
import avatar4 from "../../../assets/avatar4.jpg";
import avatar5 from "../../../assets/avatar5.jpg";
import style from "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { useState } from "react";

const Testimonials = () => {
  const testimonials = {
    testimonials_content: [
      {
        name: "Sarah Smith",
        img: avatar1,
        profession: "Yoga Instructor",
        rate: 5,
        review:
          "“AbsMania is not just a gym; it's a fitness haven! The trainers are top-notch, and the variety of classes they offer is impressive. I've seen incredible results and feel more motivated than ever. Highly recommended!”",
      },
      {
        name: "John Walker",
        img: avatar2,
        profession: "Personal Trainer",
        rate: 5,
        review:
          "“As a personal trainer, I have high standards for a gym. AbsMania exceeded my expectations. The equipment is excellent, the staff is friendly, and the atmosphere is inspiring. It's the perfect place to train clients.”",
      },
      {
        name: "Lisa Anderson",
        img: avatar3,
        profession: "Nutritionist",
        rate: 4,
        review:
          "“I've visited gyms all over, but AbsMania stands out. Their nutrition guidance complements the workouts, making it a holistic fitness experience. The trainers are knowledgeable and dedicated to helping you succeed.”",
      },
      {
        name: "Mark Davis",
        img: avatar4,
        profession: "IT Professional",
        rate: 4,
        review:
          "“I've been a member of AbsMania for a while, and it's a fantastic place to get in shape. The trainers are amazing, but I'd love to see more flexibility in class schedules to fit busy work hours.”",
      },

      {
        name: "Emily Roberts",
        img: avatar5,
        profession: "Student",
        rate: 5,
        review:
          "“AbsMania is my go-to gym. The energetic atmosphere keeps me motivated, and their classes are both fun and challenging. Affordable membership fees for students like me!”",
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState(0);
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
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Autoplay, Pagination]}
          className="md:h-96 h-[40rem] md:w-3/4"
        >
          {testimonials.testimonials_content.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={testimonial.img} alt="..." className="h-32 rounded-xl" />
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
