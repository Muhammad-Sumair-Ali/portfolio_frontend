import React from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import "../assets/css/style.css";
import { ProjectsData } from "../data/projectData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-black dark:text-white flex flex-col justify-center items-center pb-8  "
    >
      <h1 className="text-center text-4xl font-bold">
        My Recent{" "}
        <span className="text-purple-700">
          {" "}
          Projects
          <FaArrowTurnDown className="inline-block text-black dark:text-gray-100" />{" "}
        </span>
      </h1>

      <div className="flex-wrap mt-7 md:mt-10 p-2 md:p-2 w-full gap-5 md:w-5/6 flex items-center justify-center  md:flex-row flex-col">
        {ProjectsData.map((project, id) => {
          return (
            <div key={id} className="group relative overflow-hidden w-full md:w-72 shadow-lg shadow-gray-800 rounded-lg md:rounded-xl  p-1 md:p-0 border-purple-800 border-solid dark:border-4">
              <img
                src={project.image}
                alt="not found"
                className="w-full h-full md:h-44"
              />

              <div className="absolute inset-0 bg-gray-900/25 backdrop-blur-sm bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <p className="text-white text-xl font-bold mb-2">
                  {project.title}
                </p>
                <p className="text-gray-100 text-sm mb-4 text-center"><b>{project.description}</b></p>
                <div className="flex space-x-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4 py-2 bg-gray-700 text-white  rounded hover:bg-gray-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
