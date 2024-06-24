import workplace from "../assets/workplace-1.webp";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"

const AboutUs = () => {
 return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
   <h2 className="my-20 text-center text-5xl">
    About{" "}
    <span className="text-neutral-500">Me</span>
   </h2>
   <div className="flex flex-wrap">
    <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8">
     <div className="flex justify-center items-center">
      <img
       src={workplace}
       alt="Workplace"
       className="rounded-xl"
      />
     </div>
    </motion.div>
    <motion.div whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:0.5}} className="w-full lg:w-1/2">
     <div className="flex flex-col items-center lg:items-start">
      <p className="my-2 max-w-xl pt-10 pb-4 font-light tracking-tighter">
        {ABOUT_TEXT}
      </p>
     </div>
    </motion.div>
   </div>
  </div>
 );
};

export default AboutUs;
