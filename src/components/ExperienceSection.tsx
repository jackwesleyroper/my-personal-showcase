import { motion } from "framer-motion";

const experiences = [
  {
    role: "Azure Technical Lead",
    company: "Avanade",
    period: "Sep 2021 – Present",
    description:
      "Leading complex, large-scale cloud transformation and operations initiatives. Owning technical architecture and direction for clients, utilising SRE, DevOps, and Azure skills.",
    url: "https://www.avanade.com",
  },
  {
    role: "Lead Operations Engineer",
    company: "Kalibrate",
    period: "May 2021 – Sep 2021",
    description:
      "Provided technical leadership working daily with Microsoft Azure and DevOps technologies.",
    url: "https://www.kalibrate.com",
  },
  {
    role: "Lead Consultant Specialist (Azure)",
    company: "BT",
    period: "May 2019 – Apr 2021",
    description:
      "Subject Matter Expert and technical point of contact for Microsoft Azure across the organisation.",
    url: "https://www.bt.com",
  },
  {
    role: "Systems Cloud Operations Engineer",
    company: "Solarvista Software",
    period: "May 2016 – Apr 2019",
    description:
      "Operations & Support team leader, working with the Azure platform and making key technical and business decisions.",
    url: "https://www.solarvista.com",
  },
  {
    role: "I.T. Infrastructure Technician",
    company: "Spear & Jackson Group",
    period: "Nov 2014 – May 2016",
    description:
      "Lead technical support person, working across multiple sites to improve infrastructure.",
    url: "https://www.spearandjacksongroup.com",
  },
  {
    role: "Network Infrastructure Engineer",
    company: "Imagesound Group",
    period: "Apr 2007 – Nov 2014",
    description:
      "Managed all internal infrastructure, networking, and security. Travelled worldwide in a client-facing role to assist with technical issues.",
    url: "https://www.imagesound.co.uk",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="px-6 md:px-20 lg:px-32 py-24">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-heading text-3xl md:text-4xl font-bold mb-12"
    >
      Experience
    </motion.h2>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative pl-8 md:pl-10"
          >
            {/* Dot */}
            <div className="absolute left-0 top-[6px] w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 border-primary bg-background z-10" />

            <p className="text-xs font-body text-primary tracking-wide uppercase mb-1">
              {exp.period}
            </p>
            <h3 className="font-heading text-lg md:text-xl font-semibold">{exp.role}</h3>
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {exp.company} ↗
            </a>
            <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
