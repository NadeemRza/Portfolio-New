import "./services.scss";
import { motion, useInView } from "framer-motion";
import peopleImage from "../../assets/people.webp";
import { useEffect, useRef, useState } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 999);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      {isMobile && (
        <div ref={ref} className="services">
          <div className="services_text_container">
            <p>
              I focus on helping your brand grow
              <br /> and move forward
            </p>
            <hr />
          </div>
          <div className="services_title_container">
            <div className="services_title_container_title">
              <img src={peopleImage} alt="people_image" />
              <h2>
                <b>Unique</b> Ideas
              </h2>
            </div>
            <div className="services_title_container_title">
              <h2>
                <b>For Your</b> Business.
              </h2>
              <button className="services_title_container_title_button">
                WHAT WE DO?
              </button>
            </div>
          </div>
          <div className="services_list_container">
            <div className="list">
              <h2 className="list_title">Branding</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                accusantium optio accusamus minus quod cum.
              </p>
              <button>Go</button>
            </div>
            <div className="list">
              <h2 className="list_title">Branding</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                accusantium optio accusamus minus quod cum.
              </p>
              <button>Go</button>
            </div>
            <div className="list">
              <h2 className="list_title">Branding</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                accusantium optio accusamus minus quod cum.
              </p>
              <button>Go</button>
            </div>
            <div className="list">
              <h2 className="list_title">Branding</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                accusantium optio accusamus minus quod cum.
              </p>
              <button>Go</button>
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <motion.div
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
          className="services"
        >
          <motion.div className="services_text_container" variants={variants}>
            <p>
              I focus on helping your brand grow
              <br /> and move forward
            </p>
            <hr />
          </motion.div>
          <motion.div className="services_title_container" variants={variants}>
            <div className="services_title_container_title">
              <img src={peopleImage} alt="people_image" />
              <h2>
                <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>{" "}
                Ideas
              </h2>
            </div>
            <div className="services_title_container_title">
              <h2>
                <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
                Business.
              </h2>
              <button className="services_title_container_title_button">
                WHAT WE DO?
              </button>
            </div>
          </motion.div>
          <motion.div className="services_list_container" variants={variants}>
            <motion.div
              className="list"
              whileHover={{ background: "lightgray", color: "#000" }}
            >
              <h2 className="list_title">Website</h2>
              <p>
                A device friendly and attractive website to help people reach and contact you.
              </p>
              <button>Build</button>
            </motion.div>
            <motion.div
              className="list"
              whileHover={{ background: "lightgray", color: "#000" }}
            >
              <h2 className="list_title">Branding</h2>
              <p>
                Build your brand in market on different social sites through social media marketing and target marketing.
              </p>
              <button>Reach</button>
            </motion.div>
            <motion.div
              className="list"
              whileHover={{ background: "lightgray", color: "#000" }}
            >
              <h2 className="list_title">App Development</h2>
              <p>
                Develop apps both for mobile and web so that customers can get latest update about your business.
              </p>
              <button>Click</button>
            </motion.div>
            <motion.div
              className="list"
              whileHover={{ background: "lightgray", color: "#000" }}
            >
              <h2 className="list_title">Shopify Development</h2>
              <p>
                Develop sites on Shopify platfrom so that you business can setup faster and reach customers easily and economically.
              </p>
              <button>Enable</button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Services;
