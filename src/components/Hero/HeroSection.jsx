import React from "react";
import { HeroContent } from "../../data/constant";
import { Link } from "react-router-dom";
import Typed from "react-typed";
const HeroSection = () => {
  return (
    <div className=" w-full md:px-16 px-6  text-white">
      <div className=" md:flex pt-20 justify-between gap-12">
        <div className="  mt-20 ">
          {HeroContent.map((title, index) => (
            <p
              key={index}
              className="md:text-4xl text-3xl text-center font-bold text-yellow-600"
            >
              <span className="text-green-500">{title.name}</span>
              {title.title}
            </p>
          ))}
          <div className="">
            {/* <div className="md:h-24 h-12 border md:my-16 my-8 p-3 border-b-[0.2] rounded-full flex justify-center items-center"></div> */}
          </div>
          <div className=" md:w-[50%] mx-auto sm:w-full w-full md:mt-[4rem] mt-3">
            {HeroContent.map((title, index) => (
              <p
                key={index}
                className="md:text-1xl  text-center font-bold text-gray-200"
              >
                {title.desc}
              </p>
            ))}
          </div>
          <div className="flex mt-12 text-center">
            <h2 className="md:text-3xl sm:text-2xl text-[16px] font-bold py-4'">
              We do{" "}
            </h2>
            <Typed
              className="md:text-3xl sm:text-1xl text-[16px] font-bold md:pl-4 pl-3 text-[#00df9a]"
              strings={[
                "Plumbing",
                "Domestic  Installation",
                "Industrial Installation",
                "Pool Construction",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
        </div>
        <div className="flex-1 mt-20 cursor-pointer overflow-hidden group">
          {/* <div className="transition-transform duration-1000 group-hover:scale-[1.3] ">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/17/23/34/wire-1098059_1280.jpg"
              alt="hero picture"
              className="w-full h-full rounded-lg overflow-scroll"
            />
          </div> */}
        </div>
      </div>
      <div className=" flex justify-center mx-auto mt-12 bg-white text-black w-32 py-2 px-2 rounded-lg text-1xl group hover:bg-gray-600">
        <Link to={"/services"}>
          <button className="font-bold transition-transform duration-1000 group-hover:text-white">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
