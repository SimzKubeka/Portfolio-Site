import React from "react";
import { categories } from "../constants";
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills }) => (
 <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:2}} className="flex flex-col items-center w-1/2 lg:w-1/4">
  <h3 className="text-2xl font-light text-neutral-500">{title}</h3>
  <ul className="text-lg mt-4 mb-10">
   {skills.map((skill) => (
    <li key={skill}>{skill}</li>
   ))}
  </ul>
 </motion.div>
);

const SkillCategories = () => (
 <div className=" pb-8 lg:mb-15 ">
  <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:1.5}} className="my-20 text-center text-neutral-500 text-4xl">
   Other Technologies
  </motion.h2>
  <div className="flex flex-wrap justify-center">
   {categories.map((category) => (
    <SkillCategory
     key={category.title}
     title={category.title}
     skills={category.skills}
    />
   ))}
  </div>
 </div>
);

export default SkillCategories;
