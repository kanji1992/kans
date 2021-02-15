import React from "react";
import Comon from "./Comon";
import web from "./car.svg";

const Home = () => {
  return (
    <>
      <Comon
        name="Grow your business with"
        imgsrc={web}
        visit="./service"
        btname="Get started"
      />
    </>
  );
};
export default Home;
