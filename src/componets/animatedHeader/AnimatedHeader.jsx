import { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";

const AnimatedHeader = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollDirection === "down" && lastScrollY > 100) {
      controls.start({ y: "-100%", opacity: 0 });
    } else {
      controls.start({ y: "0%", opacity: 1 });
    }
  }, [scrollDirection, lastScrollY, controls]);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={controls}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className=" fixed top-0 w-full bg-white/30 backdrop-blur-lg shadow-lg p-4 transition-all duration-300 z-50 "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          animate={{ scale: lastScrollY > 50 ? 0.85 : 1 }}
          transition={{ duration: 0.3 }}
          className="font-bold text-xl"
        >
          MyBrand
        </motion.div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-800 hover:text-blue-500"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default AnimatedHeader;
