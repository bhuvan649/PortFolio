import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal routing
import { Blogging, SnapEats,PizzaStation,MusicCourse,RandomFeedback } from "../assets";

const projects = [
  {
    id: 0,
    title: "RandomFeedback",
    description:
      "RandomFeedback - Collect anonymous, honest feedback with secure authentication and personalized controls.",
    image: RandomFeedback,
    github: "https://github.com/bhuvan649/RandomFeedback.git",
    demo: "https://your-demo-link.com/project1",
    techStack: ["Next.js", "MongoDB", "Next-Auth", "Resend", "OpenAI API", "Tailwind CSS"],
  },
  {
    id: 1,
    title: "Blogging-Hub",
    description:
      "A blog app built with React.js and Appwrite, featuring user authentication, post CRUD operations, and global state management using Redux.",
    image: Blogging,
    github: "https://github.com/bhuvan649/Blog-App.git",
    demo: "https://your-demo-link.com/project1",
    techStack: ["React.js", "Appwrite", "Redux", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "SnapEats",
    description:
      "A responsive food ordering UI built with React and Vite, enabling users to browse food categories and view item details — ideal for online food delivery platforms.",
    image: SnapEats,
    github: "https://github.com/bhuvan649/FoodDelivery.git",
    demo: "https://your-demo-link.com/project2",
    techStack: ["React.js", "CSS"],
  },
  {
    id: 3,
    title: "Music Courses Platform",
    description:
      "Developed a responsive course platform with interactive 3D cards and individual course pages powered by JSON data. Optimized UI/UX with smooth layouts, hidden scrollbars, and mobile responsiveness.",
    image: MusicCourse,
    github: "https://github.com/bhuvan649/MusicCourses.git",
    demo: "https://your-demo-link.com/project3",
    techStack: ["Next.js", "Tailwind CSS", "JSON Data"],
  },
  {
    id: 4,
    title: "PizzaStation",
    description:
      "A fully functional pizza ordering website built using React.js and Tailwind CSS, backed by a JSON server for product data and cart operations.",
    image: PizzaStation,
    github: "https://github.com/bhuvan649/PizzaStation.git",
    demo: "https://your-demo-link.com/project3",
    techStack: ["React.js", "CSS"],
  },
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-background text-text py-20 px-6 md:px-12 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-poppins">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-target bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3 font-poppins">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-white/90 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <Link
                    to={`/projects/${project.id}`}
                    className="cursor-target text-white font-medium hover:underline flex items-center gap-1"
                  >
                    View Details <span>↗</span>
                  </Link>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target bg-black text-white px-4 py-2 text-sm rounded-md hover:opacity-80 font-medium"
                    >
                      Code
                    </a>
                    <a
                      href={project.demo || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target bg-fuchsia-500 text-white px-4 py-2 text-sm rounded-md hover:opacity-80 font-medium"
                    >
                      Demo ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
