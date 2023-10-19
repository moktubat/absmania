import recipes1 from "../../../assets/recipes1.png";
import recipes2 from "../../../assets/recipes2.png";
import recipes3 from "../../../assets/recipes3.png";
import recipes4 from "../../../assets/recipes4.png";
import recipes5 from "../../../assets/recipes5.png";
const Recipes = () => {
  return (
    <div>
      <div className="mx-16 my-16">
        <div className="flex items-center justify-between my-16">
          <h1 className="text-[#FFED00] text-2xl font-semibold">/// Recipes</h1>
          <button className="btn  capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
            View All Recipes
          </button>
        </div>
        <div className="md:flex gap-8">
          <div className="md:w-2/3">
            <div className="md:flex justify-center items-center gap-8">
              <div>
                <img
                  src={recipes1}
                  className="w-full md:w-[1100px] md:h-[400px] rounded-lg md:rounded-[48px]"
                  alt=""
                />
              </div>
              <div className="my-4">
                <h2 className="text-3xl text-white font-bold">
                  Protein-packed power bowl
                </h2>
                <p className="my-4 text-white">
                  A colorful protein-packed power bowl filled with flavorful,
                  meaty grilled satay tofu and an array of vibrant veggies on a
                  bed of fluffy quinoa. Completed with a healthy and delicious
                  satay dipping sauce and crushed roasted peanuts. Delicious!
                </p>
                <button className="btn capitalize hover:bg-[#FFED00] hover:text-black hover:border-black bg-black text-white border-[#FFED00] rounded-2xl">
                  View Full Recipe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="white"
                    className="hover:fill-black"
                  >
                    <g clipPath="url(#clip0_1_253)">
                      <path d="M0 17.4209V15.4834C0.0678125 14.9651 0.118671 14.4444 0.205858 13.9302C0.754817 10.705 2.16919 7.91585 4.46594 5.58762C6.78367 3.23759 9.57367 1.76267 12.8303 1.1903C13.3954 1.091 13.9645 1.02884 14.5312 0.952148H16.4687C16.9967 1.02077 17.5279 1.07163 18.0518 1.16124C20.9629 1.65934 23.5414 2.87593 25.7445 4.83926C28.4425 7.23853 30.1281 10.219 30.7627 13.7816C30.8628 14.3467 30.9241 14.9118 31 15.4834V17.4209C30.9779 17.4974 30.9611 17.5754 30.9499 17.6542C30.7683 20.0349 30.0878 22.2655 28.851 24.3039C26.392 28.3492 22.8334 30.8365 18.1713 31.7148C17.6062 31.8206 17.0411 31.8763 16.4712 31.9521H14.5337C14.4577 31.93 14.3803 31.9133 14.302 31.9021C11.16 31.651 8.34255 30.5563 5.88596 28.5874C2.83117 26.1396 0.93888 22.9815 0.239766 19.1227C0.135625 18.5592 0.0783073 17.9884 0 17.4209ZM15.5065 2.23978C7.69187 2.23251 1.29247 8.62545 1.28763 16.4481C1.28278 24.2708 7.67089 30.6564 15.496 30.6686C23.321 30.6807 29.7075 24.2788 29.7124 16.4578C29.7172 8.63676 23.3299 2.24624 15.5065 2.23978Z" />
                      <path d="M16.1514 20.3272H7.91134C6.97892 20.3272 6.46548 19.8194 6.46387 18.8926C6.46387 17.2581 6.46387 15.6234 6.46387 13.9883C6.46387 13.0946 6.98296 12.578 7.87178 12.5772H16.1506V12.2405C16.1506 10.898 16.1506 9.55629 16.1506 8.21457C16.1506 7.88762 16.2111 7.60426 16.5421 7.46783C16.8731 7.33139 17.1363 7.47832 17.3768 7.71889C20.0856 10.433 22.7962 13.145 25.5087 15.8548C25.9438 16.2899 25.9462 16.6104 25.516 17.0415C22.8051 19.7529 20.0928 22.4633 17.3793 25.1725C17.2645 25.2987 17.1222 25.3967 16.9635 25.4591C16.5324 25.5956 16.1562 25.2799 16.1562 24.7891C16.1506 23.4369 16.1562 22.0846 16.1562 20.7324L16.1514 20.3272ZM7.76603 19.0404H16.5195C17.2646 19.0404 17.4374 19.2163 17.4374 19.9736C17.4374 20.9725 17.4374 21.9711 17.4374 22.9694C17.4374 23.0502 17.4487 23.1349 17.4519 23.1753L24.1524 16.4796L17.4406 9.76376C17.4406 10.806 17.4406 11.9047 17.4406 13.0026C17.4406 13.6662 17.242 13.8632 16.5712 13.8632H7.77168L7.76603 19.0404Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_253">
                        <rect
                          width="31"
                          height="31"
                          fill="white"
                          transform="translate(0 0.952148)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-3">
            <div className="md:flex items-center gap-2">
              <img src={recipes2} className="w-[92px] h-[92px] rounded-lg" alt="" />
              <p className="my-4 text-white text-xl font-medium hover:underline-offset-8 hover:underline ">
                High Protein Recipes
              </p>
            </div>
            <div className="md:flex items-center gap-2">
            <img src={recipes3} className="w-[92px] h-[92px] rounded-lg" alt="" />
              <p className="my-4 text-white text-xl font-medium hover:underline-offset-8 hover:underline ">
              Low Carb Recipes
              </p>
            </div>
            <div className="md:flex items-center gap-2">
            <img src={recipes4} className="w-[92px] h-[92px] rounded-lg" alt="" />
              <p className="my-4 text-white text-xl font-medium hover:underline-offset-8 hover:underline ">
              Dairy Free Recipes
              </p>
            </div>
            <div className="md:flex items-center gap-2">
              <img src={recipes5} className="w-[92px] h-[92px] rounded-lg" alt="" />
              <p className="my-4 text-white text-xl font-medium hover:underline-offset-8 hover:underline ">
              Vegetarian Recipes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
