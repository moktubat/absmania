import style from "./WorkoutHeader.css";
const WorkoutHeader = () => {
  return (
    <div>
      <div className="workOutBg">
        <div className="p-16">
        <h1 className="text-white text-7xl font-light pb-4">
            workout
          </h1>
          <p className="text-white text-7xl font-bold">With Us</p>
          <p className="my-8 text-white text-lg max-w-3xl">
          A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!.
          </p>
          <button className="btn bg-[#FFED00] text-black border-black hover:bg-transparent hover:text-white hover:border-[#FFED00]">
            Join with us!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutHeader;
