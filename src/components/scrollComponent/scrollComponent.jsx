// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


export function ScrollComponent ({ children })  {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    viewport={{ once: false, amount: 0.2 }} // Rejoue l'animation à chaque scroll
  >
      {children}
    </motion.div>
  );
};

