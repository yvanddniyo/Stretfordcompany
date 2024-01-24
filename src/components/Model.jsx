import React from "react";

const Model = () => {
  return (
    <div className="max-w-[90%] md:max-w-[50%] font-[200] md:mt-12 mb-7 h-[60%] shadow-2xl bg-slate-600 mx-auto rounded-lg p-3 relative z-50">
      <div className="">
        <h1 className=" text-center py-1 text-teal-500 font-bold">
          Get In Touch
        </h1>
        <p className="text-center  text-gray-100 ">
          If you have more question or curious about our service feel free to
          leave a message.
        </p>
        <div className="">
          <form action="">
            <div className="flex justify-center my-9">
              <label className="text-white pr-2">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="outline-none  md:w-1/2 py-[2px] pl-2 border border-gray-600 rounded-sm sm:w-[30%]"
              />
            </div>
            <div className="flex justify-center my-9">
              <label className="text-white pr-2">Email</label>
              <input
                type="text"
                placeholder="Your full name"
                className="outline-none md:w-1/2 py-[2px] pl-2 border border-gray-600 rounded-sm sm:w-[32%]"
              />
            </div>
            <div className="flex justify-center my-9">
              <label className="text-white -ml-8 pr-3">Message</label>
              <textarea
                name=""
                placeholder="Leave your message here"
                id=""
                cols="30"
                rows="5"
                className="outline-none w-[70%] md:w-1/2 py-[2px] pl-2 border border-gray-600 rounded-sm sm:w-[30%]"
              ></textarea>
            </div>
          </form>
          <div className="absolute inset-0 left-[80%] right-[10%] top-3 cursor-pointer text-white">
            <h2>Close</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
