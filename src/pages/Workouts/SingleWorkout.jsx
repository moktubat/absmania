import { useState } from "react";
import { useLoaderData } from "react-router-dom";

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
          <div className="w-full md:flex justify-center gap-16">
            <figure className="w-1/3">
              <img
                className="w-[452px] h-[544px] object-cover rounded-2xl"
                src={workout.image}
                alt="Album"
                loading="lazy"
              />
            </figure>
            <div className="w-2/4">
              <h2 className="text-[#FFED00] text-5xl font-bold">
                {workout.name}
              </h2>
              <p className="text-white my-5">{workout.description}</p>
              <div className="md:flex justify-between ">
                <ul>
                  <p className="text-[#FFED00]">Benefits: </p>
                  {workout.benefits.map((benefit, index) => (
                    <li key={index} className="text-white">
                      {benefit}
                    </li>
                  ))}
                </ul>

                <ul>
                  <p className="text-[#FFED00]">Equipments: </p>
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
              <p className="text-[#FFED00] my-5">
                Safety Guide Lines:{" "}
                <span className="text-white">{workout.safetyGuidelines}</span>
              </p>
            </div>
          </div>
          <div className="m-16">
            <div>
              <div className="w-full md:flex justify-center gap-16">
                <div className="w-3/5">
                  <h2 className="text-xl font-semibold text-[#FFED00] mb-2">
                    FAQ.
                  </h2>
                  <ul className="flex flex-col">
                    {workout.faqs.map((faq, index) => (
                      <li key={index} className="my-2">
                        <h2
                          onClick={() => handleToggle(index)}
                          className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
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
                <div className="w-2/5">
                  <div>
                    <p className="text-[#FFED00]">Instructors: </p>
                    <div className="flex justify-between">
                      {workout.instructors.map((instructor, index) => (
                        <div key={index} className="text-white">
                          <p>{instructor.name}</p>
                          <img
                            src="https://cdn-icons-png.flaticon.com/256/8663/8663656.png"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SingleWorkout;
