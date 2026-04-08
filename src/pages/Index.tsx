import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Azure Cloud Transformation",
    description: "Leading large-scale cloud infrastructure projects at Avanade, owning technical architecture and direction for enterprise clients.",
    tags: ["Azure", "Terraform", "Kubernetes"],
  },
  {
    title: "CI/CD Pipeline Architecture",
    description: "Designing and implementing robust CI/CD pipelines using Azure DevOps, GitHub Actions, and GitLab for automated deployments.",
    tags: ["Azure DevOps", "GitHub Actions", "GitLab"],
  },
  {
    title: "Technical Blog & Writing",
    description: "Published technical articles featured by Microsoft and across the web, contributing to the HashiCorp Ambassador award.",
    tags: ["Technical Writing", "HashiCorp", "Microsoft"],
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
          © 2026 Jack Roper. Built with care.
        </p>
      </footer>
    </div>
  );
};

export default Index;
