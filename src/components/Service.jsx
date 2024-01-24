import React from "react";
import { Link } from "react-router-dom";
import {
  electricService,
  commercialService,
  poolConstruction,
  shippingConstruction,
  commercialPlumbing,
  decoration,
} from "../data/constant";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import PoolIcon from "@mui/icons-material/Pool";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LightIcon from "@mui/icons-material/Light";
const secondPart = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="font-Inria text-3xl font-bold pt-6 text-emerald-400">
          Pool Construction
        </h1>
        <div className="">
          {/* <h3 className="text-2xl py-3 font-bold text-center">
            Residential Plumbing
          </h3> */}
          <p className="my-4 text-center">
            We design and build custom pools that are perfect for your backyard.
            We use only the highest quality materials and construction
            techniques.
          </p>
          <div className=" md:flex justify-between space-x-5 ">
            <ul className="flex flex-col justify-center">
              {poolConstruction.map((elec, index) => (
                <li
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  key={index}
                  className="mb-2 flex items-center"
                >
                  <PoolIcon
                    style={{ fontSize: "2rem" }}
                    className="text-red-400 pr-2"
                  />
                  {elec}
                </li>
              ))}
            </ul>
            <div data-aos="fade-right" data-aos-duration="1000" className="">
              <img
                src="https://www.thespruce.com/thmb/ilhEy20ji-A2Ymp5a31GhNGjz7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Familyswimmingpool-GettyImages-155377305-599caa23d088c00010862071.jpg"
                alt=""
                className="h-[35vh] rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center group mt-4">
            <Link to={"/contact"}>
              <button className="py-3 px-10 rounded-full text-white font-[100] text-center bg-blue-800 hover:font-bold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className="font-Inria text-3xl font-bold pt-6 text-emerald-400">
            Shipping Material
          </h1>
          <h3 className="text-2xl py-3 font-bold text-center">
            Shipping Construction and Electrical materials
          </h3>
          <p className=" mb-4 text-center">
            We create unique and stylish shipping electrical and construction
            for homes and businesses. Our team can help you design and build the
            perfect space for your needs.
          </p>
          <div className="md:flex justify-between space-x-5 ">
            <ul className="flex flex-col md:justify-center">
              {shippingConstruction.map((elec, index) => (
                <li
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  key={index}
                  className="mb-2 flex items-center"
                >
                  <LocalShippingIcon
                    style={{ fontSize: "2rem" }}
                    className="text-red-400 pr-2"
                  />
                  {elec}
                </li>
              ))}
            </ul>
            <div data-aos="fade-right" data-aos-duration="1000" className="">
              <img
                src="https://www.plantandequipment.news/wp-content/uploads/2021/08/content_XCMG-bg1.jpg"
                alt=""
                className="w-[90%] h-[35vh] md:ml-16 rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center group mt-4">
            <Link to={"/contact"}>
              <button className="py-3 px-10 rounded-full text-white font-[100] text-center bg-blue-800 hover:font-bold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className="font-Inria text-3xl font-bold pt-6 text-emerald-400">
            Decorative Lighting & Lamp Installation
          </h1>

          <p
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className=" my-4 text-center"
          >
            We can help you create the perfect lighting ambiance for your home
            or business. We offer a wide selection of decorative lighting
            fixtures and lamps.
          </p>
          <div className="md:flex justify-between space-x-5 ">
            <ul className="flex flex-col md:justify-center">
              {decoration.map((elec, index) => (
                <li
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                  key={index}
                  className="mb-2 flex items-center"
                >
                  <LightIcon
                    style={{ fontSize: "2rem" }}
                    className="text-red-400 pr-2"
                  />
                  {elec}
                </li>
              ))}
            </ul>
            <div data-aos="fade-right" data-aos-duration="1000" className="">
              <img
                src="https://img5.su-cdn.com/cdn-cgi/image/width=400,height=400/mall/2021/04/06/db8def772cb4403494b694f041b357b2.jpg"
                alt=""
                className="w-[90%] h-[35vh] md:ml-16 rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center group mt-4">
            <Link to={"/contact"}>
              <button className="py-3 px-10 rounded-full text-white font-[100] text-center bg-blue-800 hover:font-bold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="w-full md:px-16 flex justify-center mt-16"
      >
        <div className="w-[90%] h-[0.8px]  bg-white"></div>
      </div>
    </div>
  );
};

export default secondPart;
