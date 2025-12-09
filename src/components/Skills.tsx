import { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "TailwindCSS",
      "HTML",
      "CSS",
      "ShadCN/UI",
      "Clerk Auth",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend & Database",
    skills: ["Node.js", "Express", "MongoDB", "Supabase"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Development",
    skills: [
      "Using AI APIs (Face++, Gemini, OpenAI)",
      "AI-based Emotion Detection Tools",
      "AI Recommendation Tools",
      "Prompt Engineering Basics",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "OpenAI API", "Face++ API"],
    color: "from-cyan-500 to-teal-500",
  },
];

export const Skills = () => {
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
      id="skills"
      className="py-20 px-6 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.3),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className={`skill-card glass-card-skill p-6 rounded-2xl group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white relative">
                  {category.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 text-sm bg-slate-800/50 text-cyan-300 rounded-full border border-cyan-500/30 backdrop-blur-sm"
                    style={{ animationDelay: `${skillIdx * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .glass-card-skill {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          box-shadow: 0 8px 32px 0 rgba(6, 182, 212, 0.15);
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px 0 rgba(6, 182, 212, 0.3);
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }

        .skill-tag {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-card:hover {
            transform: none;
          }
          .skill-tag {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};
