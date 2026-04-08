import { motion } from "framer-motion";

const education = [
  {
    qualification: "BSc (Hons) Computing (Networks) — 2:1",
    institution: "Sheffield Hallam University",
    period: "2001 – 2005",
  },
  {
    qualification: "5 A-Levels",
    period: "1998 – 2001",
  },
];

const EducationSection = () => (
  <section id="education" className="px-6 md:px-20 lg:px-32 py-24">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-heading text-3xl md:text-4xl font-bold mb-12"
    >
      Education
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-6">
      {education.map((edu, i) => (
        <motion.div
          key={edu.institution}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <p className="text-xs font-body text-primary tracking-wide uppercase mb-2">{edu.period}</p>
          <h3 className="font-heading text-lg font-semibold mb-1">{edu.qualification}</h3>
          <p className="font-body text-sm text-muted-foreground">{edu.institution}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;
