import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AddIcon from "@mui/icons-material/Add";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const phoneNumber = "+250780076941"; // Replace with your WhatsApp phone number
  const message = "Hello, I have a question!"; // Replace with your pre-filled message

  const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="max-w-[1240px] font-[200] mx-auto pt-12 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 md:px-16">
      <div>
        <h1 className="w-full  text-3xl font-bold text-[#00df9a]">LOGO</h1>
        <p className="py-4">
          We are dedicated to delivering excellence and exceeding your
          expectations in every aspect of our services. With a commitment to
          quality, innovation, and customer satisfaction, we strive to create
          lasting relationships and bring your visions to life.
        </p>
        <div className="">
          <h1 className="text-teal-500 text-2xl curs">
            Follow on our Social media
          </h1>
          <div className="flex justify-between md:w-[75%] my-6 cursor-pointer">
            <FacebookIcon
              style={{ fontSize: "3rem" }}
              className="text-blue-500"
            />
            <InstagramIcon
              style={{ fontSize: "3rem" }}
              className="text-red-400"
            />
            <TwitterIcon
              style={{ fontSize: "3rem" }}
              className="text-blue-400"
            />
            <LinkedInIcon
              style={{ fontSize: "3rem" }}
              className="text-white-500"
            />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon
                style={{ fontSize: "3rem" }}
                className="text-yellow-500"
              />
            </a>
          </div>
          <div className=" flex items-center">
            or you call us on{" "}
            <span className="px-3">
              <AddIcCallIcon />
            </span>
            <div className="text-yellow-600 font-[600]">
              <div className="flex items-center cursor-pointer">
                <AddIcon style={{ fontSize: "16px" }} />
                <p>250788611150</p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-3">
          <p className="">© 2023 Stretford. All rights reserved</p>
        </div>
      </div>
      <div className="lg:col-span-2 flex md:justify-between justify-evenly mt-2">
        <div>
          <h6 className="font-bold text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Maintenance</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
