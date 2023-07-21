import { motion } from "framer-motion";
import "./Login.css";

function Login() {
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
    <div className="container h-100">
      {/* <div className="logo"></div> */}
      <motion.div
        className="logo"
        variants={dropIn}
        transition={{ duration: 2, ease: "backInOut" }}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <motion.div
        className="login-container"
        variants={dropIn}
        transition={{ duration: 2, ease: "backInOut" }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="inner-container">
          <h2>Let's Stock 'n' Roll</h2>
          <input type="text" placeholder="number" />
          <input type="text" placeholder="password" />
          <p className="forgot-password">Forgot Password?</p>
          <button type="submit">Login</button>
          <p>Wanna Join us? Contact Us</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
