import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Membership from "../Membership/Membership";
import Merch from "../Merch/Merch";
import Recipes from "../Recipes/Recipes";
import Testimonials from "../Testimonials/Testimonials";
import Workout from "../Workout/Workout";

const Home = () => {
    return (
        <div className="bg-black overflow-hidden">
            <Header></Header>
            <Workout></Workout>
            <Merch></Merch>
            <Gallery></Gallery>
            <Recipes></Recipes>
            <Membership></Membership>
            <Contact></Contact>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;