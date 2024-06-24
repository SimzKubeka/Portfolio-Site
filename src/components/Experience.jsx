import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
 return (
  <div className="border-b border-neutral-800 pb-4 lg:mb-24 ">
   <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:0.5}} className="my-20 text-center text-5xl">
    Experience
   </motion.h2>
   <div>
    {EXPERIENCES.map((experience, index) => (
     <div
      key={index}
      className="mb-8 flex flex-wrap lg:justify-center"
     >
      <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1.5}} className="w-full lg:w-1/3 lg:flex lg:items-center ">
       <p className="mb-2 text-md text-neutral-400">
        {experience.year}
       </p>
      </motion.div>
      <motion.div whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1.5}} className="w-full lg:w-2/3">
       <h6 className="mb-2 font-semibold">
        {experience.role} - <span className="text-sm text-purple-200">{experience.company}</span>
       </h6>
       <p className="mb-4 text-neutral-400">
        {experience.description}
       </p>
       {experience.technologies.map((tech, index) => (
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

export default Experience;
