import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Language({ language, bg, percent, delay }) {
  const [state, setState] = useState(percent)

  useEffect(() => {
    let interval = setInterval(() => {
      let number = Math.random() * 100
      setState(number)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="language_container">
      <motion.div
        className="language"
        style={{ boxShadow: `0px 0px 20px 0.5px ${bg} inset`}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: delay }}
      >
        <p style={{ color: bg }}>{language}</p>
        <div className="bar">
          <motion.div 
            className="indicator"
            style={{ backgroundColor: bg, width: `${state}%` }}
            animate={{width: state}}
            transition={{duration: 1}}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Language;
