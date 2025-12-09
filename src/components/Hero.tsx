import { Github, Mail, FileDown } from 'lucide-react';
import { WaveLayer1, WaveLayer2, WaveLayer3 } from './WavesSVG';
import { useEffect, useState } from 'react';

const FloatingParticle = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
  <div
    className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-40 blur-sm"
    style={{
      left,
      bottom: '10%',
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    }}
  />
);

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-blue-950">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_50%)]" />
      </div>

      <div className="wave-container absolute inset-0 overflow-hidden opacity-60">
        <div className="hidden md:block animate-wave-slow">
          <WaveLayer1 />
        </div>
        <div className="animate-wave-medium">
          <WaveLayer2 />
        </div>
        <div className="hidden md:block animate-wave-fast">
          <WaveLayer3 />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            duration={8 + Math.random() * 4}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div
          className={`glass-panel p-8 md:p-12 rounded-3xl transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Miruthula Priya S
              </h1>

              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-xl md:text-2xl text-cyan-300 font-medium">
                  Frontend Developer
                </span>
                <span className="text-cyan-400">•</span>
                <span className="text-xl md:text-2xl text-cyan-300 font-medium">
                  AI Developer
                </span>
              </div>

              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                I build intelligent, intuitive, and high-performance web experiences.
              </p>

              {/* --- REPLACED BUTTON BLOCK (only this section changed) --- */}
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 flex items-center gap-2"
                >
                  <FileDown size={20} className="group-hover:animate-bounce" />
                  Download Resume
                </a>
                <a
                  href="https://github.com/miruthula2040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-cyan-400/50 transition-all duration-300 hover:bg-white/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-105 flex items-center gap-2"
                >
                  <Github size={20} className="group-hover:rotate-12 transition-transform" />
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-cyan-400/50 transition-all duration-300 hover:bg-white/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-105 flex items-center gap-2"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  Contact Me
                </a>
              </div>
              {/* --- end replaced block --- */}
            </div>
          </div>
     
      

      <div className="absolute bottom-0 left-0 w-full text-white transform translate-y-1">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0f172a"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes wave-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes wave-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes wave-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }

        .animate-wave-medium {
          animation: wave-medium 6s ease-in-out infinite;
        }

        .animate-wave-fast {
          animation: wave-fast 4s ease-in-out infinite;
        }

        .animate-shimmer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 3s infinite;
        }

        .glass-panel {
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          box-shadow: 0 8px 32px 0 rgba(6, 182, 212, 0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-wave-slow,
          .animate-wave-medium,
          .animate-wave-fast,
          .animate-shimmer {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};
