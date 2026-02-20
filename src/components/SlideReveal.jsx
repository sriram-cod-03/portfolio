import { motion } from "framer-motion";

const SlideReveal = ({ children, direction = "left" }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideReveal;