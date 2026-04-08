import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 lg:px-32 py-24">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-primary font-heading text-sm tracking-widest uppercase mb-4"
    >
      Cloud & DevOps Engineer
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
    >
      Jack Roper
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl leading-relaxed"
    >
      Azure Technical Lead at Avanade. Experienced Cloud & DevOps professional specialising in 
      Azure architecture, Terraform, Kubernetes, and CI/CD. HashiCorp Ambassador and published technical author.
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-8 flex gap-4 items-center"
    >
      <a href="#projects" className="bg-primary text-primary-foreground font-heading font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
        View Work
      </a>
      <a href="#contact" className="border border-border text-foreground font-heading font-medium px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
        Get in Touch
      </a>
      <a
        href="https://www.linkedin.com/in/jwroper"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors ml-2"
        aria-label="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
