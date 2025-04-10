import { motion } from "framer-motion";

const MotionCard = ({ children, className = "", onClick, ...rest }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`p-4 rounded-xl ${className}`}
    {...rest}
  >
    {children}
  </motion.div>
);

export default MotionCard;
