import React from "react";
import { aboutUs } from "../data/constant";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const AboutUs = ({ aboutUs: title }) => {
  // console.log(aboutUs);
  return (
    <div className="w-full h-full  bg-gray-800 font-[200]   text-white md:pb-  py-auto">
      <div className=" w-full h-[60vh] bg-center bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/035/618/036/non_2x/ai-generated-electrical-worker-holding-switch-panel-in-an-electrical-panel-free-photo.jpg')] bg-no-repeat bg-gray-600 z-[-999] ">
        <div className="w-full h-[60vh] pt-20 md:px-16 ">
          <h2 className="text-center text-white text-4xl mt-[12rem] font-[800]">
            ABOUT US
          </h2>
        </div>
      </div>
      <div className="md:w-[60%] sm:px-70% px-3 md:px-16 mx-auto h-full pb-2">
        <div className="">
          <h2 className="py-6 text-center font-[700] text-green-500  text-3xl">
            About Stretford
          </h2>
          <p className="">
            Welcome to Stretford, your trusted partner in providing top-notch
            solutions in electrical, plumbing, shipping construction material,
            and pool construction. At Stretford, we take pride in our commitment
            to excellence, innovation, and customer satisfaction.
          </p>
        </div>
        <div className="">
          <h2 className="py-6 text-center font-[700] text-gray-400 text-3xl">
            Our Vision
          </h2>
          <p className="">
            Stretford envisions a world where quality and reliability are the
            cornerstones of every construction project. We aim to be a leader in
            the industry, setting new standards and continuously exceeding our
            clients' expectations.
          </p>
        </div>
        <div className="">
          <h2 className="py-6 text-center font-[700] text-3xl text-gray-400 ">
            Expertise in Electrical Solutions
          </h2>
          <p className="">
            Our team of skilled and certified electricians at Stretford ensures
            that your electrical systems are not only up to code but also
            efficient and safe. Whether it's residential, commercial, or
            industrial projects, we provide comprehensive electrical services
            tailored to your unique needs.
          </p>
        </div>
        <div className="">
          <h2 className="py-6 text-center font-[700] text-3xl text-gray-400 ">
            Plumbing Excellence
          </h2>
          <p className="">
            Stretford understands the importance of reliable plumbing in any
            construction project. Our experienced plumbers deliver precision and
            efficiency, ensuring that your plumbing systems are installed and
            maintained to the highest standards.
          </p>
        </div>
        <div className="">
          <h2 className="py-6 text-center font-[700] text-3xl text-gray-400 ">
            Shipping Construction and Electrical Material
          </h2>
          <p className="">
            As a one-stop solution provider, Stretford offers a wide range of
            construction materials, sourced from reputable suppliers worldwide.
            From structural components to finishing touches, we provide quality
            materials to ensure the durability and longevity of your
            construction projects.
          </p>
        </div>
        <div className="">
          <h2 className="py-6 text-center font-[700] text-3xl text-gray-400 ">
            Pool Construction Mastery
          </h2>
          <p className="">
            Transform your space with Stretford's expertise in pool
            construction. Our dedicated team combines creativity and technical
            know-how to deliver stunning and functional pools. Whether it's for
            residential or commercial purposes, we turn your visions into
            aquatic realities.
          </p>
        </div>
        <div className="">
          <h2 className="py-6 text-center font-[700] text-3xl text-gray-400 ">
            Customer-Centric Approach
          </h2>
          <p className="">
            At Stretford, we believe in putting our customers first. Our
            customer-centric approach involves open communication, transparent
            processes, and a commitment to meeting deadlines. We strive to build
            lasting relationships with our clients by exceeding their
            expectations every step of the way.
          </p>
        </div>
        <div className="">
          <h2 className="py-6 text-center font-[700] text-3xl text-gray-400 ">
            Sustainability and Innovation
          </h2>
          <p className="">
            Stretford is committed to sustainability and innovation. We actively
            seek eco-friendly solutions and stay abreast of the latest industry
            trends and technologies. Our goal is to contribute to a greener
            future while ensuring the highest quality in our services.
          </p>
        </div>
        <div className="">
          <p className="">
            Choose Stretford for your electrical, plumbing, shipping
            construction material, and pool construction needs. Experience the
            difference that expertise, dedication, and a customer-focused
            approach can make in your projects
          </p>
        </div>
        <div className="mt-9 ">
          <p>
            Contact us today to discuss how we can bring excellence to your
            construction endeavors.
          </p>
          <div className="flex justify-center mx-auto mt-12 bg-orange-300 text-black w-32 py-2 px-2 rounded-lg text-1xl group hover:bg-gray-600">
            <Link to={"/contact"}>
              <button className="font-bold transition-transform duration-1000 group-hover:text-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:px-16 flex justify-center mt-16">
          <div className="w-[80%] h-[0.8px] mx- bg-white"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
