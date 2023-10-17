import gallery1 from '../../../assets/gallery1.jpg'
import gallery2 from '../../../assets/gallery2.jpg'
import gallery3 from '../../../assets/gallery3.jpg'
import gallery4 from '../../../assets/gallery4.jpg'

const Gallery = () => {
  return (
    <div>
      <div className="mx-16 my-16">
        <div className="">
          <h1 className="text-[#FFED00] text-2xl font-semibold">///Gallery</h1>
        </div>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 my-16">
          <div className="grid grid-cols-2 md:grid-cols-12 grid-rows-1 gap-8">
            <div className="md:col-span-4">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg md:rounded-[48px] bg-gray-100 shadow-lg md:h-80">
                <img
                  src={gallery1}
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg md:rounded-[48px] bg-gray-100 shadow-lg md:h-80">
                <img
                  src={gallery2}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg md:rounded-[48px] bg-gray-100 shadow-lg md:h-80">
                <img
                  src={gallery3}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg md:rounded-[48px] bg-gray-100 shadow-lg md:h-80">
                <img
                  src={gallery4}
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
            


            <div className="md:col-span-2">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg md:rounded-[48px] bg-gray-100 shadow-lg md:h-80">
                <img
                  src={gallery2}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg md:rounded-[48px] bg-gray-100 shadow-lg md:h-80">
                <img
                  src={gallery3}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg md:rounded-[48px] bg-gray-100 shadow-lg md:h-80">
                <img
                  src={gallery4}
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="group relative flex h-48 items-end overflow-hidden rounded-lg md:rounded-[48px] bg-gray-100 shadow-lg md:h-80">
                <img
                  src={gallery1}
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
