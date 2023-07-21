import { motion } from "framer-motion";
import "./Framer.css";

export function Framer() {
  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="box"
      variants={dropIn}
      transition={{ duration: 2, ease: "backInOut" }}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></motion.div>
  );
}
