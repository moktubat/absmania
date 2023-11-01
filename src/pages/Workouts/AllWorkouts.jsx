import { useEffect, useState } from "react";
import { getAllWorkOuts } from "../../api/fetch";

const AllWorkouts = () => {
  const [allWorkOuts, setAllWorkOuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllWorkOuts()
      .then((data) => setAllWorkOuts(data))
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
          <div key={workout._id} className="mx-auto">
            <div>
              <div className="w-full card lg:card-side mx-auto">
                <figure>
                  <img className="w-1/2" src={workout.image} alt="Album" />
                </figure>
                <div className="w-1/2 card-body">
                  <h2 className="card-title">{workout.name}</h2>
                  <p>{workout.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white">{workout.benefits}</p>
                <p className="text-white">{workout.equipment}</p>
                <p className="text-white">{workout.safetyGuidelines}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWorkouts;
