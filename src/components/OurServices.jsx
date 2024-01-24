import React, { useEffect } from "react";
import { OurService } from "../data/constant";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className=" w-full md:px-16 px-6 h-full text-white md:mt-[8em] mt-[4em]">
      <h1 className=" w-full md:text-5xl text-2xl text-center cursor-pointer">
        Our Services
      </h1>
      <p className="text-2xl font-bold py-5">
        We do it <span className="text-cyan-400">best in:</span>
      </p>
      <div className="w-full">
        <div className="h-full">
          <div className="grid md:grid-cols-2 gap-4 pb-20">
            {OurService.map((service, index) => (
              <div key={index} className="w-full">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-hidden group"
                >
                  <img
                    src={service.img}
                    alt="servicess"
                    className="w-full h-48 object-cover transition-transform duration-1000 hover:scale-[1.1] cursor-grab"
                  />
                  <div className="flex flex-col p-4 flex-grow">
                    <h2 className="text-xl text-black font-bold my-3 cursor-pointer hover:text-cyan-700">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 flex-grow">{service.desc}</p>
                    <div className="flex justify-center mx-auto mt-12 bg-orange-300 text-black w-32 py-2 px-2 rounded-lg text-1xl group hover:bg-gray-600">
                      <Link to={"/contact"}>
                        <button className="font-bold transition-transform duration-1000 group-hover:text-white">
                          Contact Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
