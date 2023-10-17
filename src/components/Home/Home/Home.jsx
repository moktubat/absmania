import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Merch from "../Merch/Merch";
import Workout from "../Workout/Workout";

const Home = () => {
    return (
        <div className="bg-black overflow-hidden">
            <Header></Header>
            <Workout></Workout>
            <Merch></Merch>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;