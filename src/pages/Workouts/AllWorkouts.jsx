import { useEffect, useState } from "react";
import { getAllWorkOuts } from "../../api/fetch";
import { Link } from "react-router-dom";

const AllWorkouts = () => {
  const [allWorkOuts, setAllWorkOuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllWorkOuts()
      .then((data) => {
        setAllWorkOuts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
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
      <div className="m-16">
        {allWorkOuts.map((workout) => (
          <div key={workout._id}>
            <div className="my-32">
              <div className="md:w-full md:flex justify-center items-center gap-16">
                <figure className="md:w-1/3">
                  <img
                    className="md:w-[352px] md:h-[444px] object-cover rounded-2xl mb-6 md:mb-0"
                    src={workout.image}
                    alt="Album"
                    loading="lazy"
                  />
                </figure>
                <div className="md:w-2/4">
                  <h2 className="text-[#FFED00] text-5xl font-bold">
                    {workout.name}
                  </h2>
                  <p className="text-gray-300 my-4">{workout.description}</p>
                  <p className="text-[#FFED00] my-4">
                    Duration:{" "}
                    <span className="text-gray-300">{workout.duration}</span>
                  </p>
                  <p className="text-[#FFED00] my-4">
                    Safety Guide Lines:{" "}
                    <span className="text-gray-300">
                      {workout.safetyGuidelines}
                    </span>
                  </p>
                  <Link to={`/workout/${workout._id}`} className="btn bg-[#FFED00] text-black border-black hover:bg-black hover:text-white hover:border-[#FFED00]">
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWorkouts;
