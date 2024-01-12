import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative">
      <div className="lg:h-1/2  xl:h-screen h-132 overflow-hidden">
        <Image
          alt="who we are"
          src="/who-landing.jpeg"
          width="1600"
          height="2000"
          className="sm:h-full h-132"
        />
      </div>
      <div className="lg:w-140 md:h-56 flex flex-col justify-around absolute lg:top-64 lg:left-28 text-start text-white lg:pr-8 md:top-36 left-16 sm:top-8 sm:h-80 h-96 top-24">
        <h2>Empowering Communities</h2>
        <p className="w-11/12">
          At the Free Tribe Network, we promote reproductive wellness, encourage
          health seeking and reporting behaviours, and conduct programs,
          projects and research, to improve your reproductive health and family
          well-being.
        </p>
      </div>
    </div>
  );
};

export default Landing;
