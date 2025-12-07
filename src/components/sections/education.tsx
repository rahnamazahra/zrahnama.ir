import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";

const education = [
  {
    institution: "Qom national university of skill",
    degree: "Bachelor's degree",
    field: "Computer Engineering",
    period: "December 2015 - December 2018",
  },
  {
    institution: "Shariaty Technical and Vocational University",
    degree: "Associate's degree",
    field: "Computer Engineering",
    period: "September 2013 - December 2015",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="w-full min-h-screen max-w-7xl mx-auto px-4 py-16">
      <Link href={"#education"}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-16",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}
          >
            EDUCATION
          </h2>
        </BoxReveal>
      </Link>
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-zinc-300 dark:border-zinc-700 pb-8 last:pb-0"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {edu.degree}
              </h3>
              <h4 className="text-xl text-zinc-700 dark:text-zinc-300">
                {edu.field}
              </h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {edu.institution}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {edu.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

