import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  icon: React.ReactNode;
  title: string;
  organization: string;
  description?: string;
}

const experiences: ExperienceItem[] = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Web Development Intern',
    organization: 'Nxtlogic Software Solution',
    description: 'Developed responsive web applications using modern frameworks and technologies.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Co-Founder',
    organization: 'Techmint',
    description: 'Led development of client project management platform and coordinated team operations.',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Technical Member ',
    organization: 'Coding Blocks Student Chapter',
    description: 'Organized coding events with my team and mentor students  and  had coding best practices.',
  },
];

export const Experience = () => {
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
      id="experience"
      className="py-20 px-6 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.3),transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.title + idx}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 relative">
                  {/* LEFT column (desktop only for even items) */}
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    {idx % 2 === 0 ? (
                      // <-- hidden on mobile, visible on md+
                      <div className="hidden md:block glass-card-exp p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium mb-2">{exp.organization}</p>
                        {exp.description && (
                          <p className="text-gray-400 text-sm">{exp.description}</p>
                        )}
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* TIMELINE ICON */}
                  <div className="absolute left-8 md:left-1/2 -ml-4 md:-ml-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white border-4 border-slate-950 z-10">
                    {exp.icon}
                  </div>

                  {/* RIGHT column */}
                  <div className="md:w-1/2 md:pl-12 ml-16 md:ml-0">
                    {idx % 2 !== 0 ? (
                      // For odd items: show desktop+mobile card on the right (no duplication)
                      <div className="glass-card-exp p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium mb-2">{exp.organization}</p>
                        {exp.description && (
                          <p className="text-gray-400 text-sm">{exp.description}</p>
                        )}
                      </div>
                    ) : (
                      // For even items: show mobile-only card here (hidden on md+)
                      <div className="block md:hidden glass-card-exp p-6 rounded-xl -ml-16">
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium mb-2">{exp.organization}</p>
                        {exp.description && (
                          <p className="text-gray-400 text-sm">{exp.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .glass-card-exp {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          box-shadow: 0 8px 32px 0 rgba(6, 182, 212, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card-exp:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px 0 rgba(6, 182, 212, 0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .glass-card-exp:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};
