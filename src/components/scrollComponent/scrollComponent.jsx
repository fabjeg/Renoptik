// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function ScrollComponent({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
