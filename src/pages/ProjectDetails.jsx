import { useParams, Link } from 'react-router-dom';
import { SnapEats,Blogging,Todo,PizzaStation } from '../assets';
const dummyProjects = [
  {
    id: '0',
    title: 'Blogging-Hub',
    description: 'A blog app built with React.js and Appwrite, featuring user authentication, post CRUD operations, and global state management using Redux.',
    image: Blogging,
    details: 'Developed a full-stack blog application with React.js as the frontend and Appwrite for backend services including authentication and database management. Implemented features like user registration/login, CRUD operations for blog posts, and seamless state management using Redux. Focused on providing a responsive UI and real-time interaction between users and the blog content.',
  },

];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = dummyProjects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>It's information is not updated</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6 text-lg">{project.details}</p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#1E1E1E] rounded hover:bg-[#333] transition text-white"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
