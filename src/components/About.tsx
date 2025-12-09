import { useEffect, useRef, useState } from 'react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      id="about"
      className="py-20 px-6 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.3),transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          About Me
        </h2>

        <div
          className={`glass-card p-8 md:p-12 rounded-2xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            Aspiring Frontend & AI Developer with hands-on experience building fast, accessible,
            and scalable web applications using React.js, TailwindCSS, JavaScript, and the MERN
            stack. Passionate about AI-powered solutions and delivering real-world digital products
            with clean architecture and intuitive design.
          </p>
        </div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          box-shadow: 0 8px 32px 0 rgba(6, 182, 212, 0.15);
        }
      `}</style>
    </section>
  );
};
