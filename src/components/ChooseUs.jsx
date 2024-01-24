import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { chooseUs } from "../data/constant";
// import AOS from "aos";
// import "aos/dist/aos.css";

const ChooseUs = () => {
  // AOS.init();
  return (
    <div className="h-[100%] md:px-16 px-6 py-6 shadow-custo rounded-[2%]">
      <h1 className="pt-16 text-center text-4xl text-gray-100 font-bold">
        Why choose us?
      </h1>
      <div className="grid md:grid-cols-3 grid-rows-1 gap-4">
        {chooseUs.map((choose, index) => (
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            key={index}
            className="shadow-xl py-3 text-center"
          >
            <p className="py-4 text-white">
              <CheckCircleIcon style={{ fontSize: "5rem" }} />
            </p>
            <div className="flex flex-col p-4 flex-grow">
              <h3 className="font-bold py-3 text-emerald-600 text-2xl">
                {choose.title}
              </h3>
              <p className="text-gray-300">{choose.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
