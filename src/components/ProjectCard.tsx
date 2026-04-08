import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, description, tags, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300"
  >
    <div className="h-40 md:h-48 bg-secondary rounded-lg mb-6 overflow-hidden flex items-center justify-center">
      <span className="text-muted-foreground text-4xl font-heading font-bold opacity-20 group-hover:opacity-40 transition-opacity">
        0{index + 1}
      </span>
    </div>
    <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="text-xs font-body bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ProjectCard;
