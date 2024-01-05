import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleWorkout = () => {
  const workout = useLoaderData();
  const [tabStates, setTabStates] = useState([]);
  const handleToggle = (idx) => {
    const newTabStates = new Array(tabStates.length).fill(false);
    newTabStates[idx] = !tabStates[idx];
    setTabStates(newTabStates);
  };

  if (!workout) {
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
    <div>
      <div className="my-32">
        <div className="w-full mx-8 md:mx-0 md:flex justify-center gap-16">
          <figure className="md:w-1/3">
            <img
              className="w-80 h-80 md:w-[452px] md:h-[544px] object-cover rounded-2xl"
              src={workout.image}
              alt="Album"
              loading="lazy"
            />
          </figure>
          <div className="md:w-2/4">
            <h2 className="text-[#FFED00] text-5xl font-bold mt-5 md:mt-0">
              {workout.name}
            </h2>
            <p className="text-white my-5 mr-16 md:mr-0">{workout.description}</p>
            <div className="flex justify-between mr-24 md:mr-0">
              <ul>
                <p className="text-[#FFED00] text-2xl md:text-base mb-2">Benefits: </p>
                {workout.benefits.map((benefit, index) => (
                  <li key={index} className="text-white">
                    {benefit}
                  </li>
                ))}
              </ul>

              <ul>
                <p className="text-[#FFED00] text-2xl md:text-base mb-2">Equipments: </p>
                {workout.equipments.map((equipment, index) => (
                  <li key={index} className="text-white">
                    {equipment}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[#FFED00] my-5">
              Duration: <span className="text-white">{workout.duration}</span>
            </p>
            <p className="text-[#FFED00] my-5 mr-20 md:mr-0">
              Safety Guide Lines:{" "}
              <span className="text-white">{workout.safetyGuidelines}</span>
            </p>
          </div>
        </div>
        <div className="m-8 md:m-16">
          <div>
          <div className="w-full md:flex justify-center gap-16">
              <div className="md:w-3/5">
                <h2 className="text-xl font-semibold text-[#FFED00] mb-2 md:ms-4">
                  FAQ.
                </h2>
                <ul className="flex flex-col">
                  {workout.faqs.map((faq, index) => (
                    <li key={index} className="my-2">
                      <h2
                        onClick={() => handleToggle(index)}
                        className="flex flex-row justify-between items-center font-semibold px-4 py-3 cursor-pointer"
                      >
                        <span className="text-white">{faq.question}</span>
                        <svg
                          className={`fill-current text-[#FFED00] h-6 w-6 transform transition-transform duration-500 ${
                            tabStates[index] ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                        </svg>
                      </h2>
                      <div
                        className="border-l-2 border-[#FFED00] overflow-hidden max-h-0 transform transition-transform duration-500"
                        style={
                          tabStates[index]
                            ? { maxHeight: "100%" }
                            : { maxHeight: "0" }
                        }
                      >
                        <p className="p-3 text-gray-100">{faq.answer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-2/5">
                <div>
                  <p className="text-xl font-semibold text-[#FFED00] mb-2 md:ms-4">Instructors:</p>
                  <div className="flex justify-between">
                    {workout.instructors.map((instructor, index) => (
                      <div key={index} className="text-white">
                        <img
                          src="https://cdn-icons-png.flaticon.com/256/8663/8663656.png"
                          alt=""
                        />
                        <p className="text-center md:text-left">{instructor.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-16">
          <h1 className="text-[#FFED00] text-4xl font-bold">Sub Program</h1>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {workout.subPrograms.map((subProgram, index) => (
              <div key={index} className="text-[#FFED00]">
                <div className="px-2 pt-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <div>
                    <img
                      className="w-full md:h-[190px] rounded-xl object-cover object-center"
                      src="https://www.publicdomainpictures.net/pictures/540000/velka/man-in-a-gym-1695816018r3g.jpg"
                      alt="Colors"
                      loading="lazy"
                    />
                  </div>
                  <h1 className="mt-4 text-white text-2xl font-bold cursor-pointer">
                    {subProgram.name}
                  </h1>
                  <div className="my-4 text-white">
                    {subProgram.description.slice(0, 80)}
                    ...

                    <Link to={`/workout/subProgram/${subProgram._id}`} className="w-full mt-4 btn bg-[#FFED00] text-black border-black hover:bg-black hover:text-[#FFED00] hover:border-[#FFED00]">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkout;
