import React from "react";
import { ExternalLink, BadgeCheck, Calendar } from "lucide-react";

const certifications = [
    {
      title: "Employability Skill Development Program",
      provider: "Zensar, RPG Foundation",
      date: "April 2025",
      link: "#",
      description: "Focused on soft skills, professional communication, and interview readiness through real-world industry training.",
    },
    {
        title: "Google Cloud Computing Foundations & Generative AI Arcade Game",
        provider: "Google Developer Student Clubs",
        date: "October 2023",
        link: "#",
        description: "Learned cloud infrastructure basics and implemented a generative AI project as part of the Google Cloud Study Jam.",
      },
  {
    title: "Data Analyst Virtual Internship",
    provider: "Deloitte",
    date: "June 2025",
    link: "#",
    description: "Completed a virtual internship simulating data analytics tasks at Deloitte, including data cleaning, visualization, and insight extraction.",
  },
    {
      title: "Internal Smart India Hackathon",
      date: "October 2024",
      link: "#",
      description: "Participated in internal selection rounds for the Smart India Hackathon, collaborating in a team to solve domain-specific problems.",
    },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-4 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Certifications</h2>
        <p className="text-zinc-400 mb-10">
          Professional certifications and credentials that validate my expertise
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cursor-target bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <BadgeCheck className="text-zinc-400 mb-3" />
              <h3 className="text-xl font-semibold mb-1 text-white">{cert.title}</h3>
              {cert.provider && (
                <p className="text-sm text-zinc-400 mb-1">{cert.provider}</p>
              )}
              <div className="flex items-center text-sm text-zinc-400 mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {cert.date}
              </div>
              <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center justify-center bg-black hover:bg-accent transition text-sm px-4 py-2 rounded-lg w-full"
              >
                View Credential <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
