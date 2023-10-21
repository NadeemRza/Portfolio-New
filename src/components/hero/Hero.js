import "./hero.scss";
import heroImg from "../../assets/hero.png";
import scrollImg from "../../assets/scroll.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} whileHover={{ color: "orange" }}>
            NADEEM RAZA
          </motion.h2>
          <motion.h3 variants={textVariants}>MERN Stack Developer</motion.h3>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              variants={textVariants}
              whileHover={{ backgroundColor: "#fff", color: "#000" }}
              href="https://github.com/NadeemRza?tab=repositories"
              className="button"
            >
              See the Latest Works
            </motion.a>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              variants={textVariants}
              whileHover={{ backgroundColor: "#fff", color: "#000" }}
              href="https://wa.me/919008598069"
              className="button"
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className="scroll_image"
            src={scrollImg}
            alt="scroll_image"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Writer Coder Thinker Influencer
        </motion.div>
        <div className="heroImageContainer">
          <img className="hero_image" src={heroImg} alt="hero_image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
