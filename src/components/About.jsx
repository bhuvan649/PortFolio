import React from "react";


const techTags = ["Python", "Machine Learning", "JavaScript", "OpenCV", "SQL","React"];

const About = () => {
  return (
    <section id="about" className="bg-background text-text px-4 py-20 lg:px-32">
      <div className="max-w-7xl mx-auto"
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          {/* Left - About Text */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Who am I?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I’m Bhuvan,  a passionate AI & Machine Learning developer currently pursuing my B-Tech from R C P Institute Of Techmology.
              I enjoy building intelligent systems, automating complex processes, and crafting meaningful solutions that solve
              real-world problems.
            </p>

            <h3 className="font-semibold text-white mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Full Stack Development</li>
              <li>Machine Learning & AI</li>
              <li>Computer Vision</li>
              <li>UI / UX Designing</li>
              <li>Problem Solving</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {techTags.map((tag, idx) => (
                <span key={idx} className="cursor-target hover:bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Terminal Style Box */}

          <div className="cursor-target w-full lg:w-[400px] bg-[#1f1f1f] rounded-xl p-6 font-mono text-sm text-gray-200 shadow-md border border-gray-700">
            <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500">
                </div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div><span className="ml-4 text-muted-foreground">terminal</span></div>
            <span className="text-purple-400">~$ </span><span>showami</span>
            <p className="text-green-500">    Bhuvanesh Vasule</p>
            <span className="text-purple-400">~$ </span><span>cat interests.txt</span>
            <ul className="text-white pl-4">
              <li>• Artificial Intelligence</li>
              <li>• Machine Learning</li>
              <li>• Computer Vision</li>
              <li>• Web Development</li>
              <li>• Problem Solving</li>
            </ul>
            <span className="text-purple-400 mt-4">~$ </span><span>currently --working-on</span>
            <p className="text-yellow-400">Building intelligent systems with AI</p>
            <p className="text-purple-400">~$ |</p>
          </div>
        </div>

        {/* Bottom Boxes Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <span>🎓</span> Education
            </h3>
            <div className="cursor-target bg-[#1f1f1f] p-4 rounded-xl mb-4 border border-gray-700">
              <h4 className="font-bold text-sm">B-Tech in Artificial Intelligence and Machine Learning</h4>
              <p className="text-gray-400 text-sm">R C P Institute of Technology<br />August 2026 <br />📍Shirpur Maharashtra, India</p>
              <p className="mt-2 text-sm font-semibold text-accent">8.0 CGPA</p>
            </div>

          </div>

          {/* Skills & Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-whitet">Skills & Languages</h3>
            <div className="cursor-target bg-[#1f1f1f] p-4 rounded-xl mb-4 border border-gray-700">
              <h4 className="font-semibold text-sm mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Machine Learning", "Deep Learning", "DBMS", "SQL", "JavaScript", "OpenCV", "MS Excel","React"].map(skill => (
                  <span key={skill} className="hover:bg-accent text-white px-2 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          <div className="cursor-target bg-[#1f1f1f] p-4 rounded-xl border border-gray-700">
            <h4 className="font-semibold text-sm mb-2">Languages</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "English", level: 4 },
                { name: "Japanese", level: 1 },
                { name: "Hindi", level: 5 },
                { name: "Marathi", level: 5 },
              ].map(({ name, level }) => (
                <div
                  key={name}
                  className="flex items-center justify-between bg-[#1f1f1f]/10 px-3 py-2 rounded-lg"
                >
                  <span className="text-sm text-white">{name}</span>
                  <div className="flex gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < level ? "bg-accent" : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">🏆 Achievements</h3>
            <div className="cursor-target bg-[#1f1f1f] p-4 rounded-xl mb-4 border border-gray-700">
              <h4 className="font-semibold text-sm">Smart India Hackathon</h4>
              <p className="text-gray-400 text-sm mt-1">
                Selected to represent at the National Level of the Smart India Hackathon.
              </p>
            </div>

            <div className="cursor-target bg-[#1f1f1f] p-4 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-sm mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Artificial Intelligence", "ML Models","LLM", "Web Development", "Data Science"].map(item => (
                  <span key={item} className="cursor-target hover:bg-accent text-white px-2 py-1 rounded-full text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
