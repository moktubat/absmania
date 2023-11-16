import style from "./StoreHeader.css";
const StoreHeader = () => {
  return (
    <div>
      <div className="storeBg">
        <div className="p-16">
        <h1 className="text-white text-7xl font-light pb-4">
        epic fitness
          </h1>
          <p className="text-white text-7xl font-bold">Essentials Await You!</p>
          <p className="my-8 text-white text-lg max-w-3xl">
          Discover Top-Quality Gym Gear and Active-wear in Our Ultimate Store for Strength, Style, and Success!
          </p>
          <button className="btn bg-[#FFED00] text-black border-black hover:bg-transparent hover:text-white hover:border-[#FFED00]">
            Shop now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
