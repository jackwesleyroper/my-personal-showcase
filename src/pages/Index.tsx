import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CloudSync Dashboard",
    description: "A real-time analytics dashboard for monitoring cloud infrastructure with live metrics and alerting.",
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "Nomad Travel App",
    description: "Mobile-first travel planning platform with AI-powered itinerary suggestions and collaborative trip boards.",
    tags: ["React Native", "Node.js", "GPT-4"],
  },
  {
    title: "Pulse Design System",
    description: "An open-source component library with 50+ accessible components built for speed and consistency.",
    tags: ["Figma", "Storybook", "Tailwind"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section id="projects" className="px-6 md:px-20 lg:px-32 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold mb-12"
        >
          Selected Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </section>

      <ContactForm />

      <footer className="px-6 md:px-20 lg:px-32 py-8 border-t border-border">
        <p className="text-muted-foreground text-sm font-body">
          © 2026 Alex Morgan. Built with care.
        </p>
      </footer>
    </div>
  );
};

export default Index;
