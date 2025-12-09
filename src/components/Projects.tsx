import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import moodify from '../assets/mod.jpeg';
import realstate from '../assets/loc.jpeg';
import bookstore from '../assets/book.jpeg';
import growth from '../assets/growth.jpeg';
import placement from '../assets/place.jpeg';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Moodify - AI Emotion-Based Recommendation App",
    description:
      "Real-time emotion detection-based content recommendation system.",
    tech: [
      "React.js",
      "Flask",
      "Face++ API",
      "Spotify API",
      "TMDB API",
      "Google Books API",
    ],
    liveUrl: "https://moodify-emotional-based-recommendat.vercel.app/",
    githubUrl: "",
    image: moodify,
  },
  {
    title: "Real Estate Platform",
    description:
      "Comprehensive real estate platform with property listings, search, and management features.",
    tech: ["MERN", "Supabase", "Clerk", "ShadCN/UI"],
    liveUrl: "https://real-estate-vijay.vercel.app/",
    githubUrl: "",
    image: realstate,
  },
  {
    title: "Techmint - Freelancing Website",
    description: "Client project request system with clean modern UI.",
    tech: ["React", "TailwindCSS", "Node.js"],
    liveUrl: "https://techmintofficial.netlify.app/",
    githubUrl: "",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Growth Unleash",
    description:
      "AI-powered course recommendation system using machine learning algorithms",
    tech: ["Python", "NLP", "Flask", "Machine Learning"],
    liveUrl: "https://growth-unleash.vercel.app/",
    githubUrl: "",
    image: growth,
  },
  {
    title: "Book Store E-commerce website",
    description:
      "Full-featured online bookstore with cart, payment integration, and order management.",
    tech: ["MERN", "Redux", "MongoDB", "ShadCN/UI"],
    liveUrl: "https://techmintofficial.netlify.app/",
    githubUrl: "",
    image: bookstore,
  },

  {
    title: "Placement Management System",
    description:
      "Comprehensive student management system with records, attendance, and grade tracking",
    tech: ["Python", "NLP", "Flask", "Machine Learning"],
    liveUrl: "https://techmintofficial.netlify.app/",
    githubUrl: "",
    image: placement,
  },
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-6 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`project-card glass-card-project rounded-2xl overflow-hidden group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveUrl ? 'flex-1' : 'flex-1'} flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg font-medium border border-cyan-500/30 hover:bg-slate-700 transition-all`}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .glass-card-project {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          box-shadow: 0 8px 32px 0 rgba(6, 182, 212, 0.15);
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 16px 48px 0 rgba(6, 182, 212, 0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card:hover {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
};
