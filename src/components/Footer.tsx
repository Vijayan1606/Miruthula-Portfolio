import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 px-6 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" /> by Miruthula Priya S
        </p>
        <p className="text-gray-500 text-sm mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
