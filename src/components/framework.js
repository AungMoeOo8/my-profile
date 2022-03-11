import React from "react";
import { motion } from "framer-motion";

function Framework() {
  return (
    <div className="frameworks">
      <h3>Full-Stacks</h3>
      <div className="frameworks_group">
        <div className="framework_container">
          <motion.div
            className="framework"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px 0.5px rgb(255, 125, 65) inset",
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <p className="name">React js</p>
          </motion.div>
        </div>

        <div className="framework_container">
          <motion.div
            className="framework"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px 0.5px rgb(255, 125, 65) inset",
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg" />
            <p className="name">React js</p>
          </motion.div>
        </div>

        <div className="framework_container">
          <motion.div
            className="framework"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px 0.5px rgb(255, 125, 65) inset",
            }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <p className="name">React js</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Framework;
