import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const RecipesSlider = ({ recipes, title }) => {
  return (
    <div className="mt-20 mx-4">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="text-lg text-white py-6">
        Start your day right with these easy peasy ideas. Some can even be
        prepared ahead of time!
      </p>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={4}
          loop={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
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
          className="mySwiper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6"
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe._id} className="grid items-center justify-center">
              <div className="group relative cursor-pointer items-center justify-center rounded-xl overflow-hidden">
                <div className="md:h-96 md:w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={recipe.image}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-x-[85%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-x-0">
                  <div>
                    <h1 className="text-3xl font-bold text-white">{recipe.name}</h1>
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

export default RecipesSlider;