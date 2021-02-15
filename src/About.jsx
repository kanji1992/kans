import React from "react";
import Comon from "./Comon";
import img from './car.svg';

const About = () => {
  return (
    <>
      <Comon
        name="Welcome About Page"
        imgsrc={img}
        visit="./about"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
