import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
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

      <ExperienceSection />
      <CertificationsSection />
      <EducationSection />
      <ContactForm />

      <footer className="px-6 md:px-20 lg:px-32 py-8 border-t border-border flex items-center justify-between">
        <p className="text-muted-foreground text-sm font-body">
          © 2026 Jack Roper. Built with care.
        </p>
        <a
          href="https://www.linkedin.com/in/jwroper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </footer>
    </div>
  );
};

export default Index;
