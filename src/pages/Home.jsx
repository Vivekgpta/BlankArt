import React from "react";
import { Link } from "react-router-dom";
import OurClientFeedback from "../components/home/OurClientFeedback";
import OurBestCreation from "../components/home/OurBestCreation";
import AboutJourney from "../components/home/AboutJourney";
import Menu from "../components/home/Menu";
import Footer from "../components/footer/Footer";
import HeroMainSection from "../components/home/HeroMainSection";
import { motion } from "framer-motion";
import Video from '../components/home/Video'


const Home = () => {
  return (
    <>

    <div className='h-screen w-screen fixed'>
     <Video />
    </div>
      <HeroMainSection />

      <Menu />

      <OurBestCreation />
      <AboutJourney />
      <OurClientFeedback />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
