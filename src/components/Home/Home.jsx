import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <section className="container mx-auto px-5">

                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;