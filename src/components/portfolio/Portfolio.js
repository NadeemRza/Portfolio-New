import "./portfolio.scss";
import portf1 from "../../assets/portfolio1.png";
import portf2 from "../../assets/portfolio2.png";
import portf3 from "../../assets/portfolio3.png";
import portf4 from "../../assets/portfolio4.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Razavi Stays",
    img: portf1,
    desc: "MERN Stack Hotel Booking site which books hotel as per your dates and city given.",
    link: "https://booking-com-clone-ivory.vercel.app/",
  },
  {
    id: 2,
    title: "Admin Panel",
    img: portf2,
    desc: "Admin panel to control users and add products and their information and tracks stats too.",
    link: "https://react-admin-panel-sandy.vercel.app/",
  },
  {
    id: 3,
    title: "Password Generator",
    img: portf3,
    desc: "Password generator which generates password as per specified format and length build using vanilla JS.",
    link: "https://nadeem-password-generator.vercel.app/",
  },
  {
    id: 4,
    title: "Case Convertor",
    img: portf4,
    desc: "String Case convertor that converts your given string into camel case,snake case,pascal case,screaming case etc.",
    link: "https://nadeem-string-case-converter.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio_button"
            >
              Visit App
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
