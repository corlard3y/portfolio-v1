import { motion } from 'framer-motion';
import { useScrambleDecode } from '../hooks/useScrambleDecode';

export function ScrambleDecode() {
  const { displayed, fading } = useScrambleDecode();

  return (
    <div className="quote-wrap">
      <motion.p
        className="quote-text"
        animate={{ opacity: fading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        &ldquo;{displayed}&rdquo;
      </motion.p>
    </div>
  );
}
