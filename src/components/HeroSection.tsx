import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 lg:px-32 py-24">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-primary font-heading text-sm tracking-widest uppercase mb-4"
    >
      Portfolio
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
    >
      Alex Morgan
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl leading-relaxed"
    >
      Full-stack developer & designer crafting digital experiences that blend 
      clean code with thoughtful design. I build products people love to use.
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-8 flex gap-4"
    >
      <a href="#projects" className="bg-primary text-primary-foreground font-heading font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
        View Work
      </a>
      <a href="#contact" className="border border-border text-foreground font-heading font-medium px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
        Get in Touch
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
