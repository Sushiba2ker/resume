import React from 'react';
import { BadgeCheck, Mail, LinkedinIcon, Briefcase, Github } from 'lucide-react';

export default function Header() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#121212] to-[#181818] p-8 text-white">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <BadgeCheck className="w-5 h-5 text-blue-400" />
        <span className="text-sm text-gray-300">Data Engineer</span>
      </div>
      
      <h1 className="text-4xl font-bold tracking-wider mt-8">Nguyễn Quốc Bảo</h1>
      
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
        <a href="mailto:baoqndtb@gmail.com" className="hover:text-blue-400 flex items-center gap-1">
          <Mail className="w-4 h-4" />
          baoqndtb@gmail.com
        </a>
        <span>|</span>
        <span>+84 932 085 135</span>
        <span>|</span>
        <a href="https://github.com/Sushiba2ker" className="hover:text-blue-400 flex items-center gap-1">
          <Github className="w-4 h-4" />
          Sushiba2ker
        </a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/nguyen-bao-9a58b324a/" className="hover:text-blue-400 flex items-center gap-1">
          <LinkedinIcon className="w-4 h-4" />
          nguyen-bao-9a58b324a
        </a>
        <span>|</span>
        <a href="https://sushiba-portfolio.vercel.app" className="hover:text-blue-400 flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          sushiba-portfolio.vercel.app
        </a>
      </div>
    </div>
  );
}