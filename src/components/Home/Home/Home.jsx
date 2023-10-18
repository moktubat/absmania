import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Merch from "../Merch/Merch";
import Recipes from "../Recipes/Recipes";
import Workout from "../Workout/Workout";

const Home = () => {
    return (
        <div className="bg-black overflow-hidden">
            <Header></Header>
            <Workout></Workout>
            <Merch></Merch>
            <Gallery></Gallery>
            <Recipes></Recipes>
            <Contact></Contact>
        </div>
    );
};

export default Home;