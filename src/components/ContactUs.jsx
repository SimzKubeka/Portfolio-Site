import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-12 ">
    <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:0.5}} className="my-20 text-center text-4xl">
      Get In Touch
    </motion.h2>
    <div className="text-center tracking-tighter">
      <motion.p whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1}}className="my-4">
        {CONTACT.address}
      </motion.p>
      <motion.p whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1.3}}className="my-4">
        {CONTACT.phoneNo}
      </motion.p>
      <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1.6}}>
        <a href={`mailto:${CONTACT.email}`} className="text-cyan-400 hover:underline">
          {CONTACT.email}
        </a>
      </motion.div>
      
    </div>
   </div>
  )
}

export default ContactUs