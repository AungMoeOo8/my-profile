import React from "react";
import { motion } from "framer-motion";
import programming from '../programming.svg'

function Main() {
  return (
    <motion.div className="main" >
      <motion.div className="main_text" initial={{x: '-100%'}} animate={{x: '0'}} exit={{x: '-100%'}} transition={{type: 'spring',duration: 1}}>
        <p>
          <span id="hi">Hi</span>, I am a <span id="backend">Backend</span>{" "}
          developer
        </p>
        <p>And</p>
        <p>
          also a <span id="frontend">Frontend</span> developer
        </p>
      </motion.div>
      <img src={programming} />
    </motion.div>
  );
}

export default Main;
