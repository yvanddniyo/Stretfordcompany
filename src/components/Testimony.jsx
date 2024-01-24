import React, { useState } from "react";
import { testimony } from "../data/constant";

const Testimony = () => {
  const [current, setCurrent] = useState(1);
  const tests = [
    { name: "good test" },
    { name: "bad test" },
    { name: "good test" },
  ];
  return (
    <div className="w-full text-white flex justify-center relative">
      <div className=" flex  text-center mt-24">{testimony.img}</div>
      <div className="  w-[400px] flex mt-24">{testimony[2].name}</div>
      <div className="  flex mt-24">{testimony[current].opinion}</div>
      <div className="">  </div>
    </div>
  );
};

export default Testimony;
