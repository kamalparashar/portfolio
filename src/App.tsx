import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Monitor, Database } from 'lucide-react';

const projects = [
  {
    title: "Blogging Platform",
    description: "A Blogging platform made in react",
    tech: ["React", "Redux", "Appwrite"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    link: "https://weblogg.netlify.app/",
  },
  {
    title: "Social Media Platform",
    description: "An photo sharing webApp with real-time updates",
    tech: ["React", "Firebase", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    link: "https://snap-stream.netlify.app/",
  },
  {
    title: "AI Video Summarizer",
    description: "Automated youtube video summarizer",
    tech: ["React", "JavaScript", "n8n", "nHost", "RapidAPI" ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "https://briefblip.netlify.app/",
  }
];

const skills = [
  {
    category: "Frontend",
    icon: <Monitor className="w-6 h-6" />,
    items: ["JavaScript", "React", "TailwindCSS", "Redux"]
  },
  {
    category: "Backend",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Node.js", "Python", "Express"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "MongoDB", "SQL"]
  },
  {
    category: "automation",
    icon: <Database className="w-6 h-6" />,
    items: ["n8n"]
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">KP</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="nav-link text-gray-700 hover:text-indigo-600">About</a>
              <a href="#projects" className="nav-link text-gray-700 hover:text-indigo-600">Projects</a>
              <a href="#skills" className="nav-link text-gray-700 hover:text-indigo-600">Skills</a>
              <a href="#contact" className="nav-link text-gray-700 hover:text-indigo-600">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Enhanced Animations */}
      <section className="relative pt-32 pb-20 px-4 animated-gradient floating-circles overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="animate-fade-in stagger-animate">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm Kamal Parashar
              <br />
              <span className="text-gray-100">Front-End Developer</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl">
              I build exceptional digital experiences that combine elegant design with powerful functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Get in touch
              </a>
              <a href="#projects" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                View my work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Enhanced Animations */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 animate-on-scroll">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-indigo-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-all duration-300 hover:translate-x-2"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Enhanced Animations */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 animate-on-scroll">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animate">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 scale-in">
                <div className="flex items-center mb-4">
                  <div className="text-indigo-600 pulse">
                    {skillSet.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-2">{skillSet.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 skill-bar">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.random() * 30 + 70}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Enhanced Animations */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 animate-on-scroll">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger-animate">
            <div className="rotate-in">
              <p className="text-gray-600 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:kamalparasharp1123@example.com"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:translate-x-2"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  kamalparasharp1123@example.com
                </a>
                <a
                  href="https://github.com/kamalparashar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:translate-x-2"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Profile
                </a>
                <a
                  href="https://linkedin.com/in/kamalparashar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:translate-x-2"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <form className="space-y-6 scale-in">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105"

              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Kamal Parashar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;