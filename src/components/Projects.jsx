import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
 return (
  <div className="border-b border-neutral-800 pb-4 lg:mb-24 ">
   <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:0.5}} className="my-20 text-center text-5xl">
    Projects
   </motion.h2>
   <div>
    {PROJECTS.map((project , index) => (
      <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1}} className="w-full lg:w-1/4">
          <img src={project.image} alt={project.title} width={200} height={200} className="mb-4 rounded-md"/>
        </motion.div>
        <motion.div whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1.5}} className="lg:pt-5 w-full max-w-xl lg:w-3/4" >
          <h6 className="mb-2 font-semibold">{project.title}</h6>
          <p className="mb-4text-neutral-400">{project.description}</p>
          {project.technologies.map((tech, index) => (
        <span
         key={index}
         className="rounded bg-neutral-900 text-purple-800 px-2 py-1 text-sm mt-4 mr-2 font-medium"
        >
         {tech}
        </span>
       ))}
        </motion.div>
      </div>
    ))}
   </div>
  </div>
 );
};

export default Projects;
