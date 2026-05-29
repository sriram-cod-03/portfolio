import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BlurText = ({
  text = "",
  delay = 50,
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  className = "",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const itemVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: direction === "top" ? -30 : 30,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      // FIXED: Overriding internal styles to lock the container layout precisely in the center
      style={{ 
        display: "flex", 
        flexWrap: "nowrap", 
        justifyContent: "center", 
        alignItems: "center",
        width: "100%",
        textAlign: "center",
        margin: "0 auto",
        whiteSpace: "nowrap"
      }}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onAnimationComplete={onAnimationComplete}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          style={{ display: "inline-block" }}
        >
          {element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
};