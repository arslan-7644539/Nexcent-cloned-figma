import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({ from = 0, to = 100, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration });
    }
  }, [isInView]);

  return (
    <motion.span ref={ref} className="text-primary">
      {rounded}
    </motion.span>
  );
};
export default AnimatedCounter;
