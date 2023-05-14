import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <section>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
        </section>
    )
}

export default Home