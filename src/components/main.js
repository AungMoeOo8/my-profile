import React from "react";
import { motion } from "framer-motion";
import programming from '../programming.svg'

function Main() {
  return (
    <motion.div className="main" >
      <motion.div className="main_text" initial={{x: '-100%'}} animate={{x: '0'}} exit={{x: '-100%'}} transition={{type: 'spring',duration: 1}}>
        <p>
          <span id="hi">Hi</span>, I am a <span id="backend">Full Stack</span>{" "}
          developer
        </p>
        <p>And</p>
        <p>
          Also the Creator of <span id="frontend">The Cell</span>
        </p>
      </motion.div>
      <img src={programming} />
    </motion.div>
  );
}

export default Main;
