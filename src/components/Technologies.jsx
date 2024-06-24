import React from "react";
import { RiReactjsLine,RiJavascriptFill  } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress  } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion"
import SkillCategories from "./SkillCategories";

const iconVariants = (duration)=>({
  intial: {y:-10},
  animate: {
    y: [-10,10],
    transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse"
    }
  }
  })

const Technologies = () => {
 return (
  <div className="border-b border-neutral-800 pb-4 lg:mb-24 ">
   <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:1.5}} className="my-20 text-center text-5xl">
    Technology{" "}
    <span className="text-neutral-500">Stack</span>
   </motion.h2>
   <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1.5}} className="flex flex-wrap items-center gap-3 justify-center">
      <motion.div variants={iconVariants(2)} initial='intial' animate='animate' className="rounded-2xl border-4 p-4 border-neutral-800 ">
        <SiMongodb className="text-6xl text-green-400" />
      </motion.div>
      <motion.div variants={iconVariants(2.5)} initial='intial' animate='animate' className="rounded-2xl border-4 p-4 border-neutral-800 ">
        <SiExpress className="text-6xl text-neutral-400" />
      </motion.div>
      <motion.div variants={iconVariants(3)} initial='intial' animate='animate' className="rounded-2xl border-4 p-4 border-neutral-800 ">
        <RiReactjsLine className="text-6xl text-cyan-400" />
      </motion.div>
      <motion.div variants={iconVariants(1.5)} initial='intial' animate='animate' className="rounded-2xl border-4 p-4 border-neutral-800 ">
        <TbBrandNextjs className="text-6xl" />
      </motion.div>
      <motion.div variants={iconVariants(2.5)} initial='intial' animate='animate' className="rounded-2xl border-4 p-4 border-neutral-800 ">
        <FaNodeJs className="text-6xl text-green-500" />
      </motion.div>
      <motion.div variants={iconVariants(3.5)} initial='intial' animate='animate' className="rounded-2xl border-4 p-4 border-neutral-800 ">
        <BiLogoTypescript className="text-6xl text-blue-400" />
      </motion.div>
      <motion.div variants={iconVariants(2)} initial='intial' animate='animate' className="rounded-2xl border-4 p-4 border-neutral-800 ">
        <RiJavascriptFill  className="text-6xl text-yellow-400" />
      </motion.div>
    </motion.div>
    <SkillCategories />
  </div>
 );
};

export default Technologies;
