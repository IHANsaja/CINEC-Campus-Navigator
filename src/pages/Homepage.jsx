import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Discover from "../components/Discover";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Features />
            <Discover />
        </div>
    );
};

export default HomePage;