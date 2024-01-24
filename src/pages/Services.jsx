import React from "react";
import { Link } from "react-router-dom";
import {
  electricService,
  commercialService,
  plumbingService,
  commercialPlumbing,
} from "../data/constant";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import Service from "../components/Service";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="w-full h-[100%]  bg-gray-800 font-[200]  text-white  pb-12 ">
      <div className=" w-full h-[40vh] bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20201022/pngtree-abstract-technology-background-with-advanced-plumbing-banner-image_430301.jpg')] bg-no-repeat bg-center bg-cover md:pt-24 pt-10">
        <div className=" md:w-[50%]  mx-auto   items-center">
          <h1 className="text-5xl font-Inria text-center mt-12 font-bold text-emerald-400">
            Services
          </h1>
          <p className="text-slate-300 text-current text-center mt-2">
            Welcome to Stretford, where we offer a comprehensive range of
            services to meet your construction needs. Our dedicated team of
            professionals ensures top-notch quality and customer satisfaction in
            every project we undertake.
          </p>
        </div>
      </div>
      <div className="font-Inria text-4xl md:px-16 px-6 pt-7">
        <h1 className="font-Inria text-center">
          We <span className="text-emerald-400 font-Inria">provide</span> range
          of services in{" "}
          <span className="text-emerald-400 font-Inria">stretford</span> with
          high quality services:
        </h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="w-full md:px-16 flex justify-center mt-8"
      >
        <div className="w-[100%] h-[0.8px]  bg-white"></div>
      </div>
      <div className=" lg:w-[70%] mx-auto md:px-16 px-3">
        <div className="">
          <h1 className="font-Inria text-3xl font-bold pt-6 text-emerald-400">
            Electrical Services
          </h1>
          <div className="">
            <h3 className="text-2xl py-3 font-bold text-center">
              Residential Electrical
            </h3>
            <p data-aos="fade-left" data-aos-duration="1000" className="mb-4">
              We offer a full range of electrical services, from residential to
              commercial. Our team of experienced and qualified electricians can
              handle any job, big or small.
            </p>
            <div className="md:flex justify-between space-x-5">
              <ul className="flex flex-col justify-center">
                {electricService.map((elec, index) => (
                  <li
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    key={index}
                    className="mb-2 flex items-center"
                  >
                    <ElectricalServicesIcon
                      style={{ fontSize: "2rem" }}
                      className="text-red-400 pr-2"
                    />
                    {elec}
                  </li>
                ))}
              </ul>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                // key={index}
                className=""
              >
                <img
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-outlet.jpeg.jpg"
                  alt="industries"
                  className="w-[90%] h-[35vh] md:ml-16 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center group mt-5">
              <Link to={"/contact"}>
                <button className="py-3 px-10 rounded-full text-white font-[100] text-center bg-blue-800 hover:font-bold">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl py-3 font-bold text-center">
              Commercial and Industrial Electrical Services
            </h3>
            {/* <p className=" mb-4">
              We offer a full range of electrical services, from residential to
              commercial. Our team of experienced and qualified electricians can
              handle any job, big or small.
            </p> */}
            <div className="md:flex justify-between space-x-5">
              <ul className="flex flex-col md:justify-center">
                {commercialService.map((elec, index) => (
                  <li
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    key={index}
                    className="mb-2 flex items-center"
                  >
                    <ElectricalServicesIcon
                      style={{ fontSize: "2rem" }}
                      className="text-red-400 pr-2"
                    />
                    {elec}
                  </li>
                ))}
              </ul>
              <div data-aos="fade-left" data-aos-duration="1000" className="">
                <img
                  src="https://lh3.googleusercontent.com/proxy/JDqR1QqdrKij7zjbilKQXpFd4Srqennn6OtU8hOG4Uk5njAXJKNPJG4rUdcRv9DCEz0gXyYx3Sy40x_feu0EBRJ7l0XvqExk2fIt0kEBtpZwG1oH0fbDLA-xWQQWrTDT0qQhKtmNO7Ufgp4jwsntMYlmZ3EaMowkZsI7ArM5cmKyYGp1GXPkoN_mTSpGDAkj1_JSOWw"
                  alt="industries"
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
        <div className="">
          <h1 className="font-Inria text-3xl font-bold pt-6 text-emerald-400">
            Plumbing
          </h1>
          <div className="">
            <h3 className="text-2xl py-3 font-bold text-center">
              Residential Plumbing
            </h3>
            <p className=" mb-4">
              We provide expert plumbing services for homes and businesses. We
              can repair leaks, install new fixtures, and more.
            </p>
            <div className="md:flex justify-between space-x-5">
              <ul className="flex flex-col justify-center">
                {plumbingService.map((elec, index) => (
                  <li
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    key={index}
                    className="mb-2 flex items-center"
                  >
                    <PlumbingIcon
                      style={{ fontSize: "2rem" }}
                      className="text-red-400 pr-2"
                    />
                    {elec}
                  </li>
                ))}
              </ul>
              <div data-aos="fade-right" data-aos-duration="1000" className="">
                <img
                  src="https://www.macintyreplumbing.com/wp-content/uploads/2020/01/residential-plumbing-1024x768-opt.jpg"
                  alt="industries"
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
            <h3 className="text-2xl py-3 font-bold text-center my-4">
              Commercial and Industrial Electrical Services
            </h3>
            {/* <p className=" mb-4">
              We offer a full range of electrical services, from residential to
              commercial. Our team of experienced and qualified electricians can
              handle any job, big or small.
            </p> */}
            <div className="md:flex justify-between space-x-5">
              <ul className="flex flex-col md:justify-center">
                {commercialPlumbing.map((elec, index) => (
                  <li
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    key={index}
                    className="mb-2 flex items-center"
                  >
                    <PlumbingIcon
                      style={{ fontSize: "2rem" }}
                      className="text-red-400 pr-2"
                    />
                    {elec}
                  </li>
                ))}
              </ul>
              <div data-aos="fade-right" data-aos-duration="1000" className="">
                <img
                  src="https://dmsplumbing.co.za/wp-content/uploads/2017/11/dms5.jpg"
                  alt="industries"
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
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
