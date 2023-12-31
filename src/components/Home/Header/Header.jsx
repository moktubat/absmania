import banner from "../../../assets/banner.png";
const Header = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
          <img src={banner} className="md:w-1/2 h-full rounded object-cover" loading=" lazy"/>
          <div className="md:w-1/2">
            <h1 className="text-white text-6xl font-light pb-3">make your</h1>
            <p className="text-white text-7xl font-bold">BODY SHAPE</p>
            <p className="py-8 text-white text-lg">
            As a multi-faceted fitness and health company which is encompassed by the talents of many diversely skilled professionals, we have sought to establish a set of mutually agreed core values to help underpin the success of our overall mission and ensuing philosophy.
            </p>
            <button className="btn bg-[#FFED00] text-black border-black hover:bg-black hover:text-[#FFED00] hover:border-[#FFED00]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
