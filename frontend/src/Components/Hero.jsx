import React from "react";

const Hero = () => {
  return (
    <section
      className="pt-24 pb-10 bg-white text-center
    flex flex-col items-center px-5 md:px-10"
    >
      <h1
        className="font-bold tracking-tight text-3xl 
        mb-12 md:text-4xl xl:text-5xl"
      >
        <span className="capitalize">
          Bring creative projects to life with
        </span>
        <br />
        <span className="uppercase text-green-800">Genesis</span>
      </h1>
      <div className="flex flex-row space-x-4">
        <button
          className="bg-green-700 px-3 py-2 leading-tight text-white rounded-full
        hover:bg-green-800"
        >
          ADD PROJECTS
        </button>
        <button
          className="bg-white px-3 py-2 leading-tight text-green-800
          border-2 border-green-700 rounded-full
        hover:bg-green-800 hover:text-white"
        >
          BACK PROJECTS
        </button>
      </div>
      <div
        className="flex flex-row items-center justify-center 
      mt-10 w-full"
      >
        <div
          className="flex flex-col items-center justify-center
        border w-full border-gray-300 shadow-md py-3"
        >
          <span className="text-green-900 font-bold">{0}</span>
          <span className="font-semibold">Projects</span>
        </div>
        <div
          className="flex flex-col items-center justify-center
        border w-full border-gray-300 shadow-md py-3"
        >
          <span className="text-green-900 font-bold">{0}</span>
          <span className="font-semibold">Backings</span>
        </div>
        <div
          className="flex flex-col items-center justify-center
        border w-full border-gray-300 shadow-md py-3"
        >
          <span className="text-green-900 font-bold">{0} ETH</span>
          <span className="font-semibold">Donated</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
