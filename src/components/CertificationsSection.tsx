import { motion } from "framer-motion";

const certifications = [
  "Azure Solutions Architect Expert",
  "Azure DevOps Engineer Expert",
  "Azure Administrator Associate",
  "Azure Security Engineer Associate",
  "Azure Network Engineer Associate",
  "Azure Virtual Desktop Specialty",
  "CKA: Certified Kubernetes Administrator",
  "HashiCorp Certified: Terraform Associate",
  "HashiCorp Ambassador 2024",
  "AWS Certified Cloud Practitioner",
  "GitHub Actions Certified",
  "GitHub CoPilot Certified",
];

const skills = [
  "Microsoft Azure",
  "Terraform",
  "Kubernetes & Docker",
  "CI/CD Pipelines",
  "Azure DevOps",
  "GitHub Actions",
  "PowerShell",
  "Linux",
  "Networking & Security",
  "Infrastructure as Code",
  "Site Reliability Engineering",
  "Technical Leadership",
];

const CertificationsSection = () => (
  <section id="certifications" className="px-6 md:px-20 lg:px-32 py-24">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-heading text-3xl md:text-4xl font-bold mb-12"
    >
      Skills & Certifications
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="font-heading text-xl font-semibold mb-5 text-primary">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm font-body bg-secondary text-secondary-foreground px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="font-heading text-xl font-semibold mb-5 text-primary">Certifications</h3>
        <ul className="space-y-2">
          {certifications.map((cert) => (
            <li key={cert} className="font-body text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">✦</span>
              {cert}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
