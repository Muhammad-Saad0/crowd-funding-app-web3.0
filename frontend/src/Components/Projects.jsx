import React from "react";
import Identicons from "react-identicons";

const Projects = () => {
  return (
    <section className="pb-10">
      <div
        className="flex flex-wrap items-center justify-center
    gap-4 px-5 pb-4"
      >
        {Array(6)
          .fill()
          .map((card, i) => {
            return <ProjectCard key={i} id={i} />;
          })}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-white px-4 py-2 leading-tight text-green-800
          border-2 border-green-700 rounded-full
        hover:bg-green-800 hover:text-white"
        >
          Load More...
        </button>
      </div>
    </section>
  );
};

const ProjectCard = ({ id }) => {
  return (
    <a href={`/project-details/${id}`}>
      <div
        className="flex flex-col w-64 rounded-md overflow-hidden
    shadow-lg"
      >
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/230822164529-05-apptronik-apollo-robot.jpg?c=original"
          alt="project-view"
          className="w-full object-cover rounded-sm h-64"
        />
        <div className="px-2 pt-2 pb-4 flex flex-col gap-1">
          <h4 className="font-semibold">Creating a Household Robot</h4>
          <div
            className="flex flex-row items-center justify-between
        "
          >
            <Identicons
              string={"0x123...aet5"}
              size={20}
              className="rounded-full shadow-md"
            />
            <p className="text-gray-500">0x123...aet5</p>
          </div>
          <p className="text-gray-400">2 days left</p>
          <div className="w-full bg-gray-400 rounded-l-md">
            <div
              className="bg-green-600 p-0.5 rounded-l-sm"
              style={{ width: "50%" }}
            />
          </div>
          <div
            className="flex flex-row items-center
        mt-1 justify-between"
          >
            <small className="font-semibold text-gray-700">
              {14} backers
            </small>
            <small className="text-green-600 font-semibold">Open</small>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Projects;
