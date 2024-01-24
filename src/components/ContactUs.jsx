import React from "react";
import { paraCont } from "../data/constant";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactUs = () => {
  // AOS.init();
  const phoneNumber = "+250780076941"; // Replace with your WhatsApp phone number
  const message = "Hello, I have a question!"; // Replace with your pre-filled message

  const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="h-full w-full   text-white">
      {/* <div className=" w-full h-[35vh] bg-[url('https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY=')] mb-10 bg-no-repeat bg-center rounded-xl  "></div> */}
      <div className="flex justify-center flex-col pt-2 md:px-16 px-6">
        <h2 className="text-center md:text-3xl text-2xl font-bold text-green-600">
          Contact Us
        </h2>
        <p className="text-center font-[200] text-gray-400 my-6">{paraCont}</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="md:w-[50%] h-[100%] py-6 w-full mx-6  bg-gray-400 rounded-lg text-gray-800">
          <div className="md:mb-12 mb-6 mx-auto">
            <label className="md:pl-[8rem]  font-[100] px-3">Name</label>
            <div className="md:ml-[5rem]  px-3  md:pr-[5rem] mb-12">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full outline-none py-1 pl-1 border border-gray-400 rounded-sm"
              />
            </div>
          </div>
          <label className="md:pl-[8rem] pl-3 font-[100]">Email Address</label>
          <div className="md:ml-[5rem] px-3 md:pr-[5rem] mb-12">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your Email"
              className="w-full outline-none py-1 pl-1 border border-gray-400 rounded-sm"
            />
          </div>
          <label className="md:pl-[8rem] font-[100] px-3">Message</label>
          <div className="md:ml-[5rem] md:pr-[5rem] mb-12 px-3">
            <textarea
              placeholder="Leave your message here"
              cols="30"
              rows="3"
              className="w-full outline-none py-1 pl-1 border border-gray-400 rounded-sm"
            ></textarea>
          </div>
          <div className="flex justify-center group">
            <button className="py-3 px-10 rounded-full text-white font-[100] text-center bg-blue-800 hover:font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="md:W-[50%] flex-col md:flex-row mx-auto flex justify-center px-3 mt-12 items-center ">
        <p className="flex flex-wrap">
          You can also contact or text us on whatsapp{" "}
        </p>
        <span className="text-green-600 font-bold pl-2">Click Here</span>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon
            style={{ fontSize: "3rem" }}
            className="pl-4 cursor-pointer text-yellow-500"
          />
        </a>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="w-full md:px-16 flex justify-center mt-16"
      >
        <div className="w-[80%] h-[0.8px]  bg-white"></div>
      </div>
    </div>
  );
};

export default ContactUs;
