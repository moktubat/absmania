import { MdOutlineSpeakerNotesOff } from "react-icons/md";
import style from "./About.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
const About = () => {
  return (
    <div className="aboutBg">
      <div className="mx-16 pt-16 pb-16">
        <div>
          <h1 className="text-white text-7xl font-light pb-4">
            get more out of your
          </h1>
          <p className="text-white text-7xl font-bold">Fitness Journey</p>
          <p className="text-white text-lg py-8">
            Join the community to track your progress
          </p>
          <p className="mb-8 text-white text-lg max-w-3xl">
            When we created Gym Base, we knew we wanted to be more than just a
            simple gym. Having worked in traditional gyms in the past, we knew
            we needed to create a concept that would provide our members with
            the most effective tools for success. This meant we needed to offer
            a wide range of classes both for children and adults.
          </p>
          <button className="btn bg-[#FFED00] text-black border-black hover:bg-black hover:text-[#FFED00] hover:border-[#FFED00]">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white shadow-lg p-4 rounded-lg hover:scale-105 duration-300">
            <MdOutlineSpeakerNotesOff className="text-5xl text-black"></MdOutlineSpeakerNotesOff>
            <p className="pt-3 text-lg text-black">No long-term contract</p>
            <p className="pt-3 text-lg text-black">
              Our popular month to month plan is offered as pay as you work-out
              with no longterm contract
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:scale-105 duration-300">
            <AiOutlineFieldTime className="text-5xl text-black"></AiOutlineFieldTime>
            <p className="pt-3 text-lg text-black">Excercise round the clock</p>
            <p className="pt-3 text-lg text-black">
              Take advantage from gym&apos;s benefits 24 hours a day, 7 days a week
              in each plans available
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:scale-105 duration-300">
            <CgGym className="text-5xl text-black"></CgGym>
            <p className="pt-3 text-lg text-black">Best equipment</p>
            <p className="pt-3 text-lg text-black">
              Practice on the best equipment global brands that addresses a wide
              range of people
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:scale-105 duration-300">
            <FaMobileAlt className="text-5xl text-black"></FaMobileAlt>
            <p className="pt-3 text-lg text-black">Dedicated gym app</p>
            <p className="pt-3 text-lg text-black">
              App users can book space at your gym&apos;s classes, with personal
              trainers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
