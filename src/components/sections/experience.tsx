import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";

const experiences = [
  {
    company: "AustroByte GmbH",
    role: "Back End Developer",
    period: "May 2024 - Present",
    duration: "8 months",
    location: "Salzburg, Austria",
    description: "Working in a data-driven SaaS company, developing scalable Laravel modules, optimizing APIs, and enhancing backend performance.",
  },
  {
    company: "ModiranToseWeb",
    role: "Back End Developer",
    period: "July 2024 - February 2025",
    duration: "8 months",
    location: "Razavi Khorasan, Iran",
    achievements: [
      "Optimized API performance following SOLID and Clean Code principles",
      "Designed scalable architecture using the Repository-Service pattern",
      "Applied linting tools to prevent common coding issues during development",
      "Created structured API documentation using Swagger YAML",
      "Refactored logic to improve maintainability",
      "Implemented Job/Queue systems and built a Workflow Service for internal processes",
    ],
  },
  {
    company: "Journey",
    role: "Back End Developer",
    period: "January 2024 - July 2024",
    duration: "7 months",
    location: "Qom, Qom Province, Iran",
    achievements: [
      "Developed secure RESTful APIs using Laravel and documented them with Swagger",
      "Implemented SSO and enterprise login systems for partner organizations",
      "Followed Git Flow and participated in code reviews and pull requests",
      "Added automated tests to improve stability and prevent regressions",
      "Integrated Zarinpal for wallet & payment features",
      "Designed database structures and implemented webhooks for communication with external systems",
      "Improved media security and download-protection using Aarvan Cloud",
    ],
  },
  {
    company: "ModernHost",
    role: "Laravel Developer",
    period: "October 2022 - December 2023",
    duration: "1 year 3 months",
    location: "Qom, Qom Province, Iran",
    achievements: [
      "Started backend development using Laravel (MVC architecture)",
      "Built the admin panel (Blade + Laravel) including both front-end templates and backend logic",
      "Designed and implemented MySQL database structures based on project needs",
      "Contributed to building a scalable backend foundation and assisted in deployment and Git versioning",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full min-h-screen max-w-7xl mx-auto px-4 py-16">
      <Link href={"#experience"}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-16",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}
          >
            EXPERIENCE
          </h2>
        </BoxReveal>
      </Link>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-zinc-300 dark:border-zinc-700 pb-8 last:pb-0"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {exp.role}
              </h3>
              <h4 className="text-xl text-zinc-700 dark:text-zinc-300">
                {exp.company}
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.duration}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              {exp.description && (
                <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                  {exp.description}
                </p>
              )}
              {exp.achievements && (
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-zinc-700 dark:text-zinc-300 flex items-start"
                    >
                      <span className="mr-2 text-zinc-500 dark:text-zinc-500">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

